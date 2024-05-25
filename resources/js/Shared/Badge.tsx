import {InfoIcon} from "lucide-react";
import React from "react";

interface Props extends React.HTMLProps<'div'>{
    type : 'success' | 'info' | 'primary' | 'danger' | 'dark'

}

export default (props : Props) => {

    function getBadgeColors() {
       switch (props.type) {
           case "danger":
               return 'bg-red-100 text-red-800'
           case 'primary':
               return 'bg-blue-100 text-blue-800'
           case 'dark' :
               return 'bg-gray-100 text-gray-800'

           case 'success' :
               return 'bg-green-100 text-green-800'

           case 'info' :
               return 'bg-yellow-100 text-yellow-800'
           default:
               return 'bg-blue-100 text-blue-800'
       }
    }
    return (
        <div
            className={` flex w-fit  justify-start items-center gap-1
             ${getBadgeColors()} text-sm font-medium me-2 px-2.5 py-2 rounded dark:bg-blue-900 dark:text-blue-300`}>
            {props.children}

        </div>
    )
}
