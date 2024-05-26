// import { Button } from "flowbite-react";
import { Button } from "@/Components/ui/button"
import React from "react";
import { twMerge } from 'tailwind-merge'
import {Link} from "@inertiajs/react";
import {cn} from "../lib/utils";
// import {clsx} from 'clsx'
interface Props extends React.ComponentProps<'button'> {
    href:string

}
export default ({href , className , ...props}:Props) => {

    return href ?  (
            <Link href={href}>

                <Button className={`bg-[#7F56D9] hover:bg-[#7F56EE9] text-white font-bold ${className}`}
                            {...props}
                    >{props.children}</Button>

            </Link>
            )
                :
                (
                <Button className={cn('bg-[#7F56D9] hover:bg-[#7F56EE9] text-white font-bold' , className)}
                        {...props}
                >{props.children}</Button>
                )

}
