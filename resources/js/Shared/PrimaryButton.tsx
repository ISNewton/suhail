import { Button } from "flowbite-react";
import React from "react";
import { twMerge } from 'tailwind-merge'
// import {clsx} from 'clsx'
interface Props extends React.ComponentProps<'button'> {
    hi:string

}
export default (props:Props) => {

    return (

        <Button className={twMerge("bg-[#7F56D9] hover:bg-[#7F56EE9] p-0  text-white font-bold" ,props.className )}
            {...props}
        >{props.children}</Button>
    )
}
