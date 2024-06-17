import CustomTextInput from "../../CustomTextInput";
import {InfoIcon} from "lucide-react";
import {Label} from "../../../Components/ui/label";
import {useState} from 'react'


type TestData = {
    title: string
    type: "public" | 'private'
}

interface Props {
    testData: TestData
    setTestData: (value: TestData) => TestData
}

export default function ({testData, setTestData}: Props) {


    return (
        <>
            <div className="w-full md:w-1/2 text-xl">

                <CustomTextInput
                    size={'large'}
                    required
                    label="عنوان الاختبار"
                    id="full_name"
                    type="text"
                    // errors={errors.full_name}
                    value={testData.title}
                    onChange={(e) => setTestData((values) => {
                            return {
                                ...values,
                                title: e.target.value
                            }
                        }
                    )}
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
                        onClick={() => setTestData(v => ({...v, type: 'public'}))}
                        className={`rounded-lg ${testData.type == 'public' ? 'bg-gray-100' : 'bg-white'} cursor-pointer border
                            hover:bg-gray-100
                            text-card-foreground shadow-sm p-6`}>

                        <h3>اختبار عام</h3>
                        <p className="text-sm flex gap-2">
                            <InfoIcon size={15}/>
                            يمكن لأي شخض الانضمام
                        </p>

                    </div>
                    <div
                        onClick={() => setTestData(v => ({...v, type: 'private'}))}
                        className={`rounded-lg ${testData.type == 'private' ? 'bg-gray-100' : 'bg-white'}
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
