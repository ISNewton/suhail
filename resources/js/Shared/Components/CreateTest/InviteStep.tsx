import {CrossIcon, PlusIcon, TimerIcon, XIcon} from "lucide-react";
import React, {useState, KeyboardEventHandler} from 'react'
import QuestionItem from "./QuestionItem";
import Badge from "../../Badge";
import {isValid, z, ZodError, ZodIssue, ZodParsedType} from "zod";
import PrimaryButton from "../../PrimaryButton";
import {Label} from "flowbite-react";
import Select from "react-select";
import CreatableSelect from 'react-select/creatable';
import MultiSelectInvite from "./MultiSelectInvite";


interface Option {
    readonly label: string;
    readonly value: string;
}

interface Props {
    setNextButtonDisabled: Function

}

export default function (props: Props) {

    const [emails, setEmails] = useState<string[]>([])
    const [emailValidationMessage, setEmailValidationMessage] = useState<string>("")

    const [inputValue, setInputValue] = React.useState('');
    const [value, setValue] = React.useState<readonly Option[]>([]);


    const createOption = (label: string) => ({
        label,
        value: label,
    });


    function validateEmail(email: string) {
        const schema = z.string().email({message: "البريد الالكتروني غير صحيح"})
            .refine((e) => {
                const emails = value.map(v => v.value)
                return emails.includes(e) ? false : true

            }, "البريد الالكتروني مستخدم بالفعل")

        const errors = schema.safeParse(email)

        if (errors.success) {
            if (emailValidationMessage) {
                setEmailValidationMessage("")
                props.setNextButtonDisabled(false)
            }
            return true
        }

        const message = JSON.parse(errors.error.message)[0].message

        setEmailValidationMessage(message)

        props.setNextButtonDisabled(true)
    }

    const handleKeyDown: KeyboardEventHandler = (event) => {
        if (emailValidationMessage) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue((prev) => [...prev, createOption(inputValue)]);
                setInputValue('');
                event.preventDefault();
        }
    };

    return (
        <>
            <div className="mb-2 block">
                <h3 className={"h"}>
                    أدعوا طلابك للمشاركة في الاختبار
                </h3>

                <p className="text-red-500">{emailValidationMessage}</p>
                <CreatableSelect
                    components={{
                        DropdownIndicator: null
                    }}
                    inputValue={inputValue}
                    isMulti
                    isClearable={true}
                    escapeClearsValue={true}
                    menuIsOpen={false}
                    onInputChange={(newValue) => {
                        console.log(newValue)
                        if (newValue.trim()) {
                            validateEmail(newValue)
                        }
                        setInputValue(newValue)

                    }}
                    onChange={(newValue) => setValue(newValue)}
                    onKeyDown={e => handleKeyDown(e)}
                    placeholder="Type something and press enter..."
                    value={value}
                />
            </div>

        </>
    )
}
