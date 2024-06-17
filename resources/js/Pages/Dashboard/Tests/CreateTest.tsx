import {useState} from 'react'
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

export default () => {

    const [step, setStep] = useState<'info' | 'questions' | 'invite'>('info')

    const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false)

    const [testInfoData, setTestInfoData] = useState<{
        title: string
        type: 'public' | 'private'
    }>({
        title: '',
        type: 'public',
    })

    function handleNextStep() {
        if (step == 'info') {
            setStep('questions')
        }

        if (step == 'questions') {
            setStep('invite')
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
                    {step == 'questions' && <QuestionsStep key={"questions"}/>}
                    {step == 'invite' && <InviteStep key={"questions"} setNextButtonDisabled={setIsNextDisabled}/>}

                    <div className="flex flex-row-reverse  justify-between items-end">
                        <PrimaryButton disabled={isNextDisabled} onClick={handleNextStep}
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
