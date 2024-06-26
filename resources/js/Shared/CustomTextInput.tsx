import {Label, TextInput} from "flowbite-react";
import React from "react";
import {Input} from "../Components/ui/input";

interface Props extends React.ComponentProps<'input'> {
    label?: string
    errors: string
    hint?: React.HTMLProps<'div'>
    labelClass?: string
    size?: 'small' | 'medium' | 'large'
}

export default ({errors, size, labelClass, hint, label, required, ...props}: Props) => {

    function getSize() {
        switch (size) {
            case 'small':
                return 'text-md'
            case 'medium':
                return 'text-lg'
            case 'large':
                return 'text-xl'
            default:
                return ''
        }

    }

    return (
        <div>
            {label && (
                <div className="mb-2 block">
                    <Label className={getSize()} color={errors ? 'failure' : 'default'} htmlFor={props.id}>
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
            {!errors && hint && (
                <small className="text-gray-600">{hint}</small>
            )}
        </div>
    )
}
