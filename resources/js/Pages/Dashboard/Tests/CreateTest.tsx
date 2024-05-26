
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
export default () => {

    const [step , setStep] = useState<'info'| 'questions'>('info')

    function handleNextStep() {
        if(step == 'info') {
            setStep('questions')
        }
        else {
            setStep('info')
        }

    }


    return (
        <div>
            <Breadcrumb className="inline-block border p-2 rounded-lg  " >
                <BreadcrumbList >
                    <BreadcrumbItem>
                        <BreadcrumbLink >
                            <Link as={'div'} className=" flex gap-3 items-bottom justify-between" to="/dashboard">
                                <span>
                                <HomeIcon size={'18'}/>
                                </span>
                                <span>
                                الرئيسية
                                </span>
                            </Link>
                        </BreadcrumbLink>

                        <BreadcrumbSeparator />
                        <BreadcrumbLink >
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
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">اختبار جديد</h1>

                <div className="my-8 border rounded-lg p-12">

                    {step == 'info' && <TestInfoStep />}
                    {step == 'questions' && <QuestionsStep />}

                    <div className="flex justify-end items-end">
                        <PrimaryButton onClick={handleNextStep} className="my-2 text-end">التالي</PrimaryButton>
                    </div>
                </div>

            </div>
        </div>
    )

}
