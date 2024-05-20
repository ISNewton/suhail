import {Label, TextInput} from "flowbite-react";
import React from "react";

interface Props extends React.ComponentProps<'input'> {
    label:string
    errors:string
}
export default (props : Props ) => {
    console.log(props.errors)
    return (
        <div>
            {props.label && (
                <div className="mb-2 block">
                    <Label color={props.errors ? 'failure' : 'default'} htmlFor={props.id} value={props.label}/>
                </div>
            )}

            <TextInput color={props.errors ? 'failure' : 'default'}
                       helperText={
                           <>
                               {props.errors && (
                                   <>
                                       <span className="font-medium">{props.errors}</span>
                                   </>
                               )}
                           </>
                       }
                       id={props.id} type={props.type} placeholder={props.placeholder}  {...props}/>
        </div>
    )
}
