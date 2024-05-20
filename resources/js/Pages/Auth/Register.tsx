import {Checkbox, Label, TextInput} from "flowbite-react";
import PrimaryButton from "../../Shared/PrimaryButton";
import CustomTextInput from "../../Shared/CustomTextInput";
import {useRememberedState} from "@inertiajs/react/types/useRemember";
import {useState} from 'react'
import {useForm} from "@inertiajs/react";

export default () => {
    const { data, setData, post, processing, errors } = useForm({
        full_name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    function submit(e) {
        e.preventDefault()

        post('/auth/register')
        console.log(errors)
    }

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">

                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div>
                        <img
                            src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
                            className="w-32 mx-auto"/>
                    </div>
                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">
                            انشاء حساب جديد
                        </h1>
                        <div className="w-full flex-1 mt-8">
                            <form onSubmit={submit} className="flex max-w-md flex-col gap-4">
                                <CustomTextInput
                                    label="الاسم بالكامل"
                                    id="full_name"
                                    type="text"
                                    errors={errors.full_name}
                                    value={data.full_name}
                                    onChange={(e) => setData('full_name' , e.target.value)}
                                />

                                <CustomTextInput
                                    label="البريد الالكتروني"
                                    id="email"
                                    type="email"
                                    errors={errors.email}
                                    value={data.email}
                                    onChange={(e) => setData('email' , e.target.value)}
                                />


                                <CustomTextInput
                                    label="كلمة المرور"
                                    id="password"
                                    type="password"
                                    errors={errors.password}
                                    value={data.password}
                                    onChange={(e) => setData('password' , e.target.value)}
                                />
                                <CustomTextInput
                                    label="تأكيد كلمة المرور"
                                    id="password_confirmation"
                                    type="password"
                                    errors={errors.password}
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation' , e.target.value)}
                                />
                                <PrimaryButton type="submit">التالي</PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                         style={{backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')"}}>
                    </div>
                </div>

            </div>
        </div>
    )
}
