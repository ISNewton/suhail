
import { Navbar } from "flowbite-react";
import {GoogleHomeIcon, Home01Icon} from '@hugeicons/react-pro';
import {Camera, CircleArrowLeft, Info} from 'lucide-react';
import PrimaryButton from "../Shared/PrimaryButton";
export default function LayoutNavbar() {
    return (
        <Navbar  rounded  >
            <Navbar.Brand  href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">سهيل</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="my-auto">
                <Navbar.Link className="flex mx-4 gap-1 items-center font-bold h-full" href="#">
                    <span>
                    <Info />
                    </span>
                    <span>
                    عن المنصة
                    </span>
                </Navbar.Link>
            <Navbar.Link>
                <PrimaryButton>
                    <span className="my-auto">
                    انضم الينا
                    </span>
                    <CircleArrowLeft className="mr-2"/>
                </PrimaryButton>
            </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
