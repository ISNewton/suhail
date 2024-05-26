import CustomTextInput from "../../CustomTextInput";
import {InfoIcon} from "lucide-react";
import {Label} from "../../../Components/ui/label";
import {useState} from 'react'


export default function (props) {

    const [testType , setTestType] = useState('global')

    return (
        <>
            <div className="w-full md:w-1/2 text-xl">

                <CustomTextInput
                    size={'large'}
                    required
                    label="الاسم بالكامل"
                    id="full_name"
                    type="text"
                    // errors={errors.full_name}
                    value={'hi'}
                    onChange={(e) => setData('full_name', e.target.value)}
                    hint={<div className="mr-2 mt-1 flex flex-start items-center gap-1 text-green-800">
                        <span><InfoIcon size={15}/></span>
                        <span>اختر عنوانا مناسبا لاختبارك</span>
                    </div>}
                />
            </div>
            <div className="w-full   md:w-1/2 text-xl my-8">
                <Label className='text-xl mb-2'>
                    نوع الاختبار
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                    <div
                        onClick={() => setTestType('public')}
                        className={`rounded-lg ${testType == 'public' ? 'bg-gray-100' : 'bg-white'} cursor-pointer border
                            hover:bg-gray-100
                            text-card-foreground shadow-sm p-6`}>

                        <h3>اختبار عام</h3>
                        <p className="text-sm flex gap-2">
                            <InfoIcon size={15}/>
                            يمكن لأي شخض الانضمام
                        </p>

                    </div>
                    <div
                        onClick={() => setTestType('private')}
                        className={`rounded-lg ${testType == 'private' ? 'bg-gray-100' : 'bg-white'}
                            hover:bg-gray-100
                              cursor-pointer border  text-card-foreground shadow-sm p-6`}>
                        <h3>اختبار خاص</h3>
                        <p className="text-sm flex gap-2">
                            <InfoIcon size={15}/>
                            يمكن فقط للأشخاص المدعويين الانضمام
                        </p>

                    </div>
                </div>

            </div>
        </>
    )
}
