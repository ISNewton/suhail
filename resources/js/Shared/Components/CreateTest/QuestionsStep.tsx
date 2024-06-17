import {CrossIcon, PlusIcon, TimerIcon, XIcon} from "lucide-react";
import {useState} from 'react'
import QuestionItem from "./QuestionItem";
import Badge from "../../Badge";
import {z, ZodError, ZodIssue, ZodParsedType} from "zod";
import PrimaryButton from "../../PrimaryButton";


interface QuestionType {
    title: string,
    id: number,
    options: QuestionOptionType[]
}

interface QuestionOptionType {
    id: number,
    title: string
    isCorrect: boolean
}

interface Props {
    questions: QuestionType[]
    setQuestions: Function
}

export default function ({questions, setQuestions}: Props) {


    // const [questions, setQuestions] = useState<QuestionType[]>([
    //     defaultQuestion
    // ])

    const [titleError, setTitleError] = useState<string>('')

    const [optionsError, setOptionsError] = useState<{ id: number, message: string }[]>([])

    const [activeQuestion, setActiveQuestion] = useState<QuestionType | null>(questions[0])

    const questionTitleValidationSchema = z
        .string()
        .min(6, 'يجب أن لا يقل عنوان السؤال عن ستة أحرف')

    const questionOptionValidationSchema = z.object({
        id: z.any(),
        title: z.string().min(6, 'يجب أن لا يقل عنوان السؤال عن ستة أحرف'),
        isCorrect: z.boolean()
    })


    function changeActiveQuestion(questionId: number) {
        // const titleValidation = parseQuestionTitleValidation()
        const isTitleValid = validateTitle()
        if (!isTitleValid) {
            return
        }


        const isOptionsValid = validateOptions()
        if (!isOptionsValid) {
            console.log('not valid')
            return
        }

        const question = questions.find(q => q.id == questionId)
        if (question) {

            setActiveQuestion(question)
        }

    }

    function validateTitle(): boolean {
        if (activeQuestion == null) {
            return false

        }
        const schema = z.string().min(6)
        const validation = schema.safeParse(activeQuestion.title)

        if (validation.success) {
            return true
        } else {
            const message = JSON.parse(validation.error.message)[0].message
            setTitleError(message)
            return false

        }

    }


    function validateOptions(): boolean {
        if (activeQuestion == null) {
            return false

        }
        const schema = z.array(z.object({
            title: z.string().min(1, 'يجب أن تحتوي الاجابة على رمز واحد على الأقل')
        }))
            .min(2, 'يجب أن يحتوي السؤال على أجابتين كحد أدنى')
            .refine(items => {
                const titles = items.map(i => i.title)
                return new Set(titles).size == titles.length


            }, {
                message: 'يجب أن لا تتكرر الاجابات',
            })

        const validation = schema.safeParse(activeQuestion.options)

        if (validation.success) {
            return true
        } else {

            const zodErrors = JSON.parse(validation.error.message)

            const errors: { id: number; message: any; }[] = []

            zodErrors.map((e: { path: (string | number)[]; message: any; }) => {

                errors.push({
                    id: activeQuestion.options[e.path[0] ?? 0].id,
                    message: e.message
                })

            })


            setOptionsError(errors)
            return false

        }

    }


    function validateQuestionsTitles(): boolean {
        return true

    }


    function addEmptyQuestion() {


        const isTitleValid = validateTitle()
        if (!isTitleValid) {
            return
        }


        const isOptionsValid = validateOptions()
        if (!isOptionsValid) {
            console.log('not valid')
            return
        }


        const newQuestion =
            {
                title: 'سؤال جديد',
                id: Math.random(),
                options: [
                    {
                        title: 'أزرق',
                        isCorrect: false,
                        id: Math.random(),
                    },
                ],
            }

        setQuestions(q => {
            return [
                ...q,
                newQuestion

            ]
        })

        setActiveQuestion(newQuestion)

    }

    function handleQuestionChange(value: string) {
        setQuestions(q => {

            return q.map(question => {
                if (question.id == activeQuestion?.id) {
                    question.title = value
                }
                return question

            })
        })
    }

    function handleOptionsChange(optionId: number, updatedOption: QuestionOptionType) {

        console.log(optionId, updatedOption)

        setQuestions(q => {

            return q.map(question => {
                if (question.id == activeQuestion?.id) {
                    question.options = question.options.map(option => {
                        if (option.id == optionId) {
                            return {
                                ...updatedOption,
                                id: optionId
                            }
                        }
                        if (updatedOption.isCorrect && option.id != optionId) {

                            return {
                                ...option,
                                isCorrect: false
                            }

                        }

                        return option
                    })
                }
                return question

            })

        })

    }


    function addEmptyOption() {


        setQuestions(q => {
            return q.map(question => {
                if (question.id == activeQuestion?.id) {
                    question.options.push({
                        id: Math.random(),
                        title: 'أزرق',
                        isCorrect: false,
                    })
                }
                return question

            })
        })
    }

    function removeOption(optionId: number) {

        setQuestions(q => {
            return q.map(question => {
                if (question.id == activeQuestion?.id) {
                    question.options = question.options.filter(o => o.id != optionId)
                }
                return question

            })
        })
    }

    function removeQuestion(id: number) {
        setQuestions(q => {
                return q.filter(question => question.id != id)
            }
        )
        if (activeQuestion?.id == id) {
            setActiveQuestion(null)
        }
    }


    return (
        <>
            {/*{questionsCount.forEach(count => <QuestionItem />)}*/}
            <div className="flex gap-1 flex-wrap">
                {questions.map(q => (
                    <Badge
                        key={q.id}
                        className={`font-bold bg-white
                        ${q.id == activeQuestion?.id ? 'bg-primary text-white' : 'border border-primary text-primary'} `}
                    >
                        <span
                            onClick={() => changeActiveQuestion(q.id)}

                            className="cursor-pointer">
                         {q.title}
                        </span>
                        <span onClick={() => removeQuestion(q.id)} className={'cursor-pointer   mr-4'}><XIcon/></span>
                    </Badge>

                ))}
                <PrimaryButton
                    onClick={addEmptyQuestion} className="
                    font-normal
                    flex items-center bg-white text-black hover:text-black  hover:bg-gray-200 w-fit p-2 rounded-lg cursor-pointer
                    ">
                    <span>
                    <PlusIcon/>
                    </span>
                    <span>
                    أضف سؤال
                    </span>
                </PrimaryButton>
            </div>
            {activeQuestion && (

                <div>
                    {activeQuestion && (
                        <QuestionItem
                            titleError={titleError}
                            optionsError={optionsError}
                            removeOption={removeOption} handleOptionsChange={handleOptionsChange}
                            handleQuestionTitleChange={handleQuestionChange} question={activeQuestion}/>
                    )}
                    <div>

                        {activeQuestion.options.length <= 4 && (
                            <p onClick={addEmptyOption}
                               className="flex items-center hover:bg-gray-200 w-fit p-2 rounded-lg cursor-pointer">

                    <span>
                    <PlusIcon/>
                    </span>
                                <span>
                    اختيار جديد
                    </span>

                            </p>
                        )}


                    </div>

                </div>
            )}
        </>
    )
}
