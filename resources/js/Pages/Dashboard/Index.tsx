
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb"
import {Link} from "@inertiajs/react";
import {FileIcon, HomeIcon, InfoIcon} from "lucide-react";
import DashboardMenu from "../../Shared/Components/DashboardMenu";
import LargeTitle from "../../Shared/LargeTitle";
import TestCard from "../../Shared/Components/TestCard";
export default () => {

    return (
        <div>
            <Breadcrumb className="inline-block border p-2 rounded-lg  " >
                <BreadcrumbList >
                    <BreadcrumbItem>
                        <BreadcrumbLink >
                            <Link as={'div'} className=" flex gap-3 items-bottom justify-between" to="/dashboard">
                                <span>
                                <HomeIcon size={'18'}/>
                                </span>
                                <span>
                                الرئيسية
                                </span>
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="my-12 pr-4">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">لوحة التحكم</h1>

               <DashboardMenu />

                <div className="my-8">
                    <div className="grid gap-4  grid-cols-1 md:grid-cols-3  xl:grid-cols-4">
                        <TestCard/>
                        <TestCard/>
                        <TestCard/>
                        <TestCard/>
                        <div
                            className="rounded-lg hover:bg-gray-100 cursor-pointer border bg-card text-card-foreground shadow-sm p-6  ">
                            <Link href="/dashboard/tests/create" className="text-center min-h-20 flex items-center justify-center leading-9 text-xl">
                                +
                                اختبار جديد
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )

}
