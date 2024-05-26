import CustomTextInput from "../../CustomTextInput";
import {InfoIcon, PlusIcon} from "lucide-react";
import {Label} from "../../../Components/ui/label";
import {useState} from 'react'
import QuestionItem from "./QuestionItem";
import Badge from "../../Badge";


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

    const [activeQuestion , setActiveQuestion] = useState<QuestionType>(questions[0])

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
                <QuestionItem removeOption={removeOption} handleOptionsChange={handleOptionsChange} handleQuestionTitleChange={handleQuestionChange} question={activeQuestion} />
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
