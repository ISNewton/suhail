import CustomTextInput from "../../CustomTextInput";
import {InfoIcon} from "lucide-react";
import {Label} from "../../../Components/ui/label";
import {useState} from 'react'


export default function (props) {

    return (
        <>
            <div className="w-full md:w-1/2 text-xl">

                <CustomTextInput
                    size={'large'}
                    required
                    label="عنوان السؤال"
                    id="full_name"
                    type="text"
                    placeholder='كيف تأكل الأسماك الماء'
                    value={'hi'}
                    onChange={(e) => console.log( e.target.value)}
                    hint={<div className="mr-2 mt-1 flex flex-start items-center gap-1 text-green-800">
                        <span><InfoIcon size={15}/></span>
                        <span>اختر عنوانا مناسبا لاختبارك</span>
                    </div>}
                />
            </div>
        </>
    )
}
