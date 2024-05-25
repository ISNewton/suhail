
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb"
import {Link} from "@inertiajs/react";
import {FileIcon, HomeIcon} from "lucide-react";
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
                            <Link as={'div'} className=" flex gap-1 items-bottom justify-between" to="/dashboard">
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
                    <div className="grid gap-4 grid-cols-4">
                        <TestCard />
                        <TestCard />
                        <TestCard />
                        <TestCard />

                    </div>
                </div>

            </div>
        </div>
    )

}
