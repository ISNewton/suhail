import { Button } from "flowbite-react";
import React from "react";
import { twMerge } from 'tailwind-merge'
import {Link} from "@inertiajs/react";
// import {clsx} from 'clsx'
interface Props extends React.ComponentProps<'button'> {
    href:string

}
export default ({href , ...props}:Props) => {

    return href ?  (
            <Link href={href}>

                    <Button className={twMerge("bg-[#7F56D9] hover:bg-[#7F56EE9] p-0  text-white font-bold" ,props.className )}
                            {...props}
                    >{props.children}</Button>

            </Link>
            )
                :
                (
                <Button className={twMerge("bg-[#7F56D9] hover:bg-[#7F56EE9] p-0  text-white font-bold" ,props.className )}
                        {...props}
                >{props.children}</Button>
                )

}
