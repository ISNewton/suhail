import PrimaryButton from "../PrimaryButton";
import { default as RandomElement} from '../../assets/svg/RandomElement.svg'
import { default as OrangeElement} from '../../assets/svg/OrangeElement.svg'

export default () => {
    return (
        <div className="mx-auto my-12  max-w-6xl">
            <h2 className="mb-4 text-6xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">نساهم في تنمية القطاع التعليمي</h2>
            <a href="#" className="flex  flex-col items-center bg-white   rounded-lg  md:flex-row
            hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">مهمتنا : تعليم بجودة أفضل</h5>
                    <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                        المعلمون هم ركيزة أساسية في تطوير المجتمع. نحن نسعى لتمكينهم من تحقيق أقصى إمكانياتهم وتقديم
                        تجربة تعليمية استثنائية للطلاب. انضم إلينا في رحلة تحقيق التفوق والتعلم المستدام</p>
                </div>
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-s-lg"
                     src="/man.png" alt=""/>
            </a>

        </div>

    )
}
