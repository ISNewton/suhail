import {PlusIcon} from "lucide-react";
import {useState} from 'react'
import QuestionItem from "./QuestionItem";
import Badge from "../../Badge";
import {z, ZodError, ZodIssue, ZodParsedType} from "zod";


interface QuestionType {
    title: string,
    id:number,
    options :QuestionOptionType[]
}

interface  QuestionOptionType {
    id:number,
    title:string
    isCorrect: boolean
}
export default function (props) {

    const defaultQuestion = {
            title: 'ما لون السمك في الماء',
            id: Math.random(),
            options: [
                {
                title: 'أزرق',
                isCorrect: true,
                    id: Math.random(),
            } ,
                {
                    title: 'أزرق',
                    isCorrect: false,
                    id: Math.random(),
                },

                {
                    title: 'أزرق',
                    isCorrect: false,
                    id: Math.random(),
                },

                {
                    title: 'أزرق',
                    isCorrect: false,
                    id: Math.random(),
                },
            ]
        }



    const [questions , setQuestions] = useState<QuestionType[]>([
        defaultQuestion
    ])

    const [titleError , setTitleError ] = useState<string>('')

    const [optionsError , setOptionsError ] = useState<{id:number , message:string}[]>([])

    const [activeQuestion , setActiveQuestion] = useState<QuestionType>(questions[0])

    const questionTitleValidationSchema = z
        .string()
        .min(6 , 'يجب أن لا يقل عنوان السؤال عن ستة أحرف')

    const questionOptionValidationSchema = z.object({
            id:z.any(),
            title:z.string().min(6 , 'يجب أن لا يقل عنوان السؤال عن ستة أحرف'),
            isCorrect:z.boolean()
        })


    function parseQuestionTitleValidation() {
        setTitleError('')
        try {
            const validationError =  questionTitleValidationSchema.parse(activeQuestion.title)
        }
        catch (e :ZodError) {

            setTitleError(e.errors[0].message)
            // setTitleError(e?.message)
        }

    }

    function parseQuestionOptionsValidation(optionId:number , value) {
        const previousError = optionsError.find(o => o.id == optionId)?.message
        try {
            const validationError =  questionOptionValidationSchema.parse(activeQuestion.options.find(o => o.id == optionId))

            if(previousError) {
                console.log(2323)

                setOptionsError(prevErros => {
                    return prevErros.filter(o => o.id != optionId)
                    }
                )
            }
        }
        catch (e :ZodError) {

            console.log(e.errors[0].message)
            setOptionsError(prevErros => {
               return [
                ...prevErros,
                {
                    id: optionId,
                    message: e.errors[0].message
                }
            ]
            }
            )
            // setTitleError(e?.message)
        }

    }
    function addEmptyQuestion() {
        setQuestions(q => {
            return [
                ...q,
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
            ]
    })

    }

    function handleQuestionChange(value) {
        setQuestions(q => {

            return q.map(question => {
                if(question.id == activeQuestion.id) {
                    question.title = value
                }
                return question

            })
        })
    }

    function handleOptionsChange(optionId: number , updatedOption:QuestionOptionType) {

        setQuestions(q => {

            return q.map(question => {
                if(question.id == activeQuestion.id) {
                    question.options = question.options.map(option => {
                        if(option.id == optionId) {
                            return  {
                                ...updatedOption,
                                id:optionId
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
        if(activeQuestion.options.length > 4) {
            alert("You can't ")
            return
        }

        setQuestions(q => {
            return q.map(question => {
                if(question.id == activeQuestion.id) {
                   question.options.push({
                       id:Math.random(),
                       title:'أزرق',
                       isCorrect:false,
                   })
                }
                return question

            })
        })
    }

    function removeOption(optionId:number) {

        setQuestions(q => {
            return q.map(question => {
                if(question.id == activeQuestion.id) {
                    question.options = question.options.filter(o => o.id != optionId)
                }
                return question

            })
        })
    }


    return (
        <>
            {/*{questionsCount.forEach(count => <QuestionItem />)}*/}
            <div className="flex gap-1 flex-wrap">
                {questions.map(q =>(
                    <Badge
                        onClick={() => setActiveQuestion(q)}
                        key={q.id}
                        className={`font-bold bg-white  ${q.id == activeQuestion.id ? 'bg-primary text-white' : 'border border-primary text-primary'} cursor-pointer`}>{q.title}</Badge>

                ) )}
                <Badge onClick={addEmptyQuestion} className="font-bold cursor-pointer">
                    <span>
                    <PlusIcon/>
                    </span>
                    <span>
                    أضف سؤال
                    </span>
                </Badge>
            </div>
            {activeQuestion && (
                <QuestionItem
                    titleError={titleError}
                    optionsError={optionsError}
                    validateTitle={parseQuestionTitleValidation}
                    validateOptions={parseQuestionOptionsValidation}
                    removeOption={removeOption} handleOptionsChange={handleOptionsChange} handleQuestionTitleChange={handleQuestionChange} question={activeQuestion} />
            )}
            <div>

                {activeQuestion.options.length <=4 && (
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
        </>
    )
}
