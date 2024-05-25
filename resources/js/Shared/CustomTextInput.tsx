import {Label, TextInput} from "flowbite-react";
import React from "react";
import {Input} from "../Components/ui/input";

interface Props extends React.ComponentProps<'input'> {
    label:string
    errors:string
}
export default ({errors , label, required , ...props} : Props ) => {
    return (
        <div>
            {label && (
                <div className="mb-2 block">
                    <Label color={errors ? 'failure' : 'default'} htmlFor={props.id} >
                        {label} {" "}
                        {required && (
                            <span className="text-red-500">*</span>
                        )}

                    </Label>
                </div>
            )}

            <Input color={errors ? 'failure' : 'default'}
                   className={`focus:outline-none  ${errors && 'border border-red-500'}`}
                       id={props.id} type={props.type} placeholder={props.placeholder}  {...props}/>
            {errors && (
                <small className="text-red-500">{errors}</small>
            )}
        </div>
    )
}
