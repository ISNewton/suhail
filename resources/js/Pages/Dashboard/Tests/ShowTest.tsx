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
import testInfoStep from "../../../Shared/Components/CreateTest/TestInfoStep";
import TestCreatedStep from "../../../Shared/Components/CreateTest/TestCreatedStep";


export default () => {
    const test = {
        title: 'اختبار عملي حاسوب',
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
                                الاختبارات
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
                                الاختبارات
                                </span>
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="my-12 pr-4">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    <span>{test.title}</span>
                </h1>

                <div className="my-8 border rounded-lg p-12">

                </div>

            </div>
        </div>
    )

}
