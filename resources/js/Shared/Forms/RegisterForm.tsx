import CustomTextInput from "../CustomTextInput";
import PrimaryButton from "../../Shared/PrimaryButton";
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

        <form onSubmit={submit} className="flex max-w-md flex-col gap-4">
                                <CustomTextInput
                                    required
                                    label="الاسم بالكامل"
                                    id="full_name"
                                    type="text"
                                    errors={errors.full_name}
                                    value={data.full_name}
                                    onChange={(e) => setData('full_name', e.target.value)}
                                />

                                <CustomTextInput
                                    required
                                    label="البريد الالكتروني"
                                    id="email"
                                    type="email"
                                    errors={errors.email}
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                />

                                <CustomTextInput
                                    required
                                    label="كلمة المرور"
                                    id="password"
                                    type="password"
                                    errors={errors.password}
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                <CustomTextInput
                                    required
                                    label="تأكيد كلمة المرور"
                                    id="password_confirmation"
                                    type="password"
                                    errors={errors.password}
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                />
                                <PrimaryButton type="submit">التالي</PrimaryButton>
                            </form>
    )
}
