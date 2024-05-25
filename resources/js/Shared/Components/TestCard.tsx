import {FileIcon, InfoIcon} from "lucide-react";

export default () => {
    return (

    <div className="rounded-lg hover:bg-gray-100 cursor-pointer border bg-card text-card-foreground shadow-sm p-6  ">

        <h2 className="mt-10 scroll-m-20 flex justify-start gap-2  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            <FileIcon className=""/>
            اختبار عملي حاسوب
        </h2>
        <p className="leading-7 ">تاريخ الانشاء: 1/1/2000 </p>
        <div className="mt-4 flex  gap-2 ">
            <div
                className=" flex w-fit  justify-start items-center gap-1  bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-2 rounded dark:bg-blue-900 dark:text-blue-300">
                <InfoIcon size={17}/>
                <span>
                27  سؤال
                </span>

            </div>
            <div
                className=" flex  w-fit justify-start items-center gap-1  bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-2 rounded dark:bg-blue-900 dark:text-blue-300">
                <InfoIcon size={17}/>
                <span>
                27  سؤال
                </span>

            </div>
            <div
                className=" flex w-fit justify-start items-center gap-1  bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-2 rounded dark:bg-blue-900 dark:text-blue-300">
                <InfoIcon size={17}/>
                <span>
                27  سؤال
                </span>

            </div>
        </div>
    </div>

    )
}
