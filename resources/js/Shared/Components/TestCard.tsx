import {FileIcon, InfoIcon} from "lucide-react";
import Badge from "../Badge";
import {router} from '@inertiajs/react'

export default () => {
    return (

        <div onClick={() => router.visit('/dashboard/tests/1')}
             className="rounded-lg hover:bg-gray-100 cursor-pointer border bg-card text-card-foreground shadow-sm p-6  ">

            <h2 className="mt-10 scroll-m-20 flex justify-start gap-2  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                <FileIcon className=""/>
                اختبار عملي حاسوب
            </h2>
            <p className="leading-7 ">تاريخ الانشاء: 1/1/2000 </p>
            <div className="mt-4 flex flex-wrap  gap-2 ">

                <Badge type='primary'>
                    <InfoIcon size={17}/>
                    <span>
                27  سؤال
                </span>
                </Badge>
                <Badge type='success'>
                    <InfoIcon size={17}/>
                    <span>
                27  سؤال
                </span>
                </Badge>
                <Badge type='info'>
                    <InfoIcon size={17}/>
                    <span>
                27  سؤال
                </span>
                </Badge>
            </div>
        </div>

    )
}
