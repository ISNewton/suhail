import React from "react";
import {cn} from "../lib/utils";

interface Props extends React.HTMLProps<'h1'>{
    text:any
}
export default function ({children , ...props} : Props) {
    return (

        <h1  className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl' , props.className)}
             {...props}
        >
            {/*<h1  className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">*/}
            {children}
        </h1>)
}
