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
import {FileIcon, HomeIcon, InfoIcon, PaperclipIcon, PenIcon} from "lucide-react";
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
import testInfoStep from "../../../Shared/Components/CreateTest/TestInfoStep";
import TestCreatedStep from "../../../Shared/Components/CreateTest/TestCreatedStep";
import ReportsCards from "../../../Shared/Components/ShowTest/ReportsCards";


export default () => {
    const test = {
        title: 'اختبار عملي حاسوب',
    }
    const [selectedOption, setSelectedOption] = useState<'students' | 'reports' | 'settings' | 'questions'>('reports')

    function isSelected(option: string) {
        return option == selectedOption ? 'border-black' : 'border-none'
    }

    return (
        <div>
            <Breadcrumb className="inline-block border p-2 rounded-lg  ">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link as={'div'} className=" cursor-pointer flex gap-3 items-bottom justify-between"
                                  href="/dashboard">
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
                            <div className=" flex gap-3 items-bottom justify-between">
                                <span>
                                <PaperclipIcon size={'18'}/>
                                </span>
                                <span>
                                {test.title}
                                </span>
                            </div>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="my-12 pr-4">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    <span>{test.title}</span>
                </h1>

                <div className="my-8   p-12">
                    <div className="my-8">
                        <div className='flex justify-start border-b-2 '>
                            <p onClick={() => setSelectedOption('reports')}
                               className={`border-b-2 ${isSelected('reports')} px-4 cursor-pointer`}>الاحصائيات</p>
                            <p onClick={() => setSelectedOption('questions')}
                               className={`border-b-2 ${isSelected('questions')} px-4 cursor-pointer`}>أسئلة
                                الاختبار</p>
                            <p onClick={() => setSelectedOption('students')}
                               className={`border-b-2 ${isSelected('students')} px-4 cursor-pointer`}>الطلاب</p>

                            <p onClick={() => setSelectedOption('settings')}
                               className={`border-b-2 ${isSelected('settings')} px-4 cursor-pointer`}>اعدادات
                                الاختبار</p>
                        </div>
                    </div>

                </div>

                <div>
                    <ReportsCards/>

                </div>

            </div>
        </div>
    )

}
