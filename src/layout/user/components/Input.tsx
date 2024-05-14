import React from "react";
import IInput from "../../../utils/interface/IInput";

export default function Input({ data }: { data: IInput }) {

    const { id, onblur, onchange, placeholder, type, value } = data

    return (
        <React.Fragment>

            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className="pl-2 w-full outline-none border-none"
                onChange={(e) => { onchange(e) }}
                onBlur={(e) => { onblur(e) }}
                value={value}
            />


        </React.Fragment>
    )

}