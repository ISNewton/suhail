import React, {useRef, useState} from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb"
import {Link} from "@inertiajs/react";
import {FileIcon, HomeIcon, InfoIcon, PenIcon} from "lucide-react";
import DashboardMenu from "../../../Shared/Components/DashboardMenu";
import LargeTitle from "../../../Shared/LargeTitle";
import TestCard from "../../../Shared/Components/TestCard";
import CustomTextInput from "../../../Shared/CustomTextInput";
import SmallTitle from "../../../Shared/SmallTitle";
import {Label} from "../../../Components/ui/label";
import PrimaryButton from "../../../Shared/PrimaryButton";
import TestInfoStep from "../../../Shared/Components/CreateTest/TestInfoStep";
import QuestionsStep from "../../../Shared/Components/CreateTest/QuestionsStep";
import InviteStep from "../../../Shared/Components/CreateTest/InviteStep";
import {z} from "zod";

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

interface Option {
    readonly label: string;
    readonly value: string;
}

export default () => {

    const [step, setStep] = useState<'info' | 'questions' | 'invite'>('questions')

    const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false)

    const [testInfoData, setTestInfoData] = useState<{
        title: string
        type: 'public' | 'private'
    }>({
        title: '',
        type: 'public',
    })


    const [studentsEmails, setStudentsEmails] = React.useState<readonly Option[]>([]);


    const [tooltipMessage, setTooltipMessage] = useState<{
        id: number
        message: string
    }[]>([])


    const questionStepRef = useRef()

    const [questions, setQuestions] = useState<QuestionType[]>([
        {
            title: 'ما لون السمك في الماء',
            id: Math.random(),
            options: [
                {
                    title: 'أحمر',
                    isCorrect: false,
                    id: Math.random(),
                },

                {
                    title: 'أزرق',
                    isCorrect: true,
                    id: Math.random(),
                },
            ]
        }

    ])


    function handleNextStep() {


        if (step == 'info') {
            setStep('questions')
        }

        if (step == 'questions') {
            const isReadyToSubmit = questionStepRef.current.isReadyToSubmit()

            if (isReadyToSubmit) {
                setStep('invite')

            }
        }


        if (step == 'invite') {
            setStep('info')
        }

    }


    function handelPreviousStep() {

        if (step == 'info') {
            return
        }


        if (step == 'questions') {
            setStep('info')
        }


        if (step == 'invite') {
            setStep('questions')
        }

    }

    function getStepTitle() {
        if (step == 'info') {
            return 'اعدادات الاختبار'
        }

        if (step == 'questions') {
            return 'أسئلة الاختبار'
        }

        if (step == 'invite') {
            return 'دعوة الطلاب'
        }
        return 'test'
    }


    return (
        <div>
            <Breadcrumb className="inline-block border p-2 rounded-lg  ">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link as={'div'} className=" flex gap-3 items-bottom justify-between" to="/dashboard">
                                <span>
                                <HomeIcon size={'18'}/>
                                </span>
                                <span>
                                الرئيسية
                                </span>
                            </Link>
                        </BreadcrumbLink>

                        <BreadcrumbSeparator/>
                        <BreadcrumbLink>
                            <Link as={'div'} className=" flex gap-3 items-bottom justify-between" to="/dashboard">
                                <span>
                                <PenIcon size={'18'}/>
                                </span>
                                <span>
                                اختبار جديد
                                </span>
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="my-12 pr-4">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    <span>اختبار جديد  - </span>
                    <span>{getStepTitle()}</span>
                </h1>

                <div className="my-8 border rounded-lg p-12">

                    {step == 'info' &&
                        <TestInfoStep testData={testInfoData} setTestData={setTestInfoData} key={"info"}/>}

                    {step == 'questions' &&
                        <QuestionsStep
                            ref={questionStepRef}
                            tooltipMessage={tooltipMessage}
                            setTooltipMessage={setTooltipMessage}
                            questions={questions} setQuestions={setQuestions} key={"questions"}/>}
                    {step == 'invite' &&
                        <InviteStep emails={studentsEmails} setEmails={setStudentsEmails} key={"questions"}
                                    setNextButtonDisabled={setIsNextDisabled}/>}

                    <div className="flex flex-row-reverse  justify-between items-end">
                        <PrimaryButton disabled={isNextDisabled && tooltipMessage.length == 0} onClick={handleNextStep}
                                       className="my-2 text-end">التالي</PrimaryButton>

                        {step !== 'info' && (

                            <PrimaryButton disabled={isNextDisabled} onClick={handelPreviousStep}
                                           className="my-2 text-end">السابق</PrimaryButton>
                        )}


                    </div>
                </div>

            </div>
        </div>
    )

}
