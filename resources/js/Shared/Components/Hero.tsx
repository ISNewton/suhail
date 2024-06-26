import PrimaryButton from "../PrimaryButton";
import { default as RandomElement} from '../../assets/svg/RandomElement.svg'
import { default as OrangeElement} from '../../assets/svg/OrangeElement.svg'

export default () => {
    return (
        <section className="bg-white flex items-center h-screen dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl relative  lg:py-16 lg:px-12">

                <div className="hidden z-0 md:block absolute top-0 right-0 -translate-y-12 translate-x-20">
                    <img className="w-28 h-auto " alt={""} src={OrangeElement}/>
                </div>



                <h1 className="mb-4 relative z-10 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">اختبر
                    طلابك بكفاءة مع منصة
                    سهيل
                </h1>
                <p className="mb-8 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">تجربة
                    سهلة ومرنة لإدارة الاختبارات الإلكترونية
                </p>
                <div
                    className="flex relative z-10  gap-4  mb-8 lg:mb-16  justify-between sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <PrimaryButton>
                    <span className="my-auto text-xl">
                    سجل الأن
                    </span>
                    </PrimaryButton>
                    <PrimaryButton >
                    <span className="my-auto text-xl">
                    سجل الأن
                    </span>
                    </PrimaryButton>

                </div>
                <div className="hidden md:block absolute bottom-0 left-0 -translate-y-12 translate-x-20">
                    <img className="w-60 h-auto " alt={""} src={RandomElement}/>
                </div>

            </div>
        </section>
    )
}
