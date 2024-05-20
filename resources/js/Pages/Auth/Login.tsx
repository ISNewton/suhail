import {Checkbox, Label, TextInput} from "flowbite-react";
import PrimaryButton from "../../Shared/PrimaryButton";
import CustomTextInput from "../../Shared/CustomTextInput";
import {useRememberedState} from "@inertiajs/react/types/useRemember";
import {useState} from 'react'
import {Link, useForm} from "@inertiajs/react";

export default () => {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    })

    function submit(e) {
        e.preventDefault()

        post('/auth/login')
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
                            تسجيل الدخول
                        </h1>
                        <div className="w-full flex-1 mt-8">
                            <form onSubmit={submit} className="flex max-w-md flex-col gap-4">

                                <CustomTextInput
                                    label="البريد الالكتروني"
                                    id="email"
                                    type="email"
                                    errors={errors.email}
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                />


                                <CustomTextInput
                                    label="كلمة المرور"
                                    id="password"
                                    type="password"
                                    errors={errors.password}
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                <PrimaryButton type="submit">تأكيد</PrimaryButton>
                            </form>
                            <p
                               className="mt-4 text-sm text-gray-500 dark:text-gray-400">ليس لديك حساب بعد ؟ <Link href="/auth/register"
                                            className="font-medium text-blue-600 hover:underline dark:text-blue-500">أنشاء حساب جديد</Link>.</p>
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
