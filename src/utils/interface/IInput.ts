import { FormikErrors, FormikTouched } from "formik"
import React from "react"

export default interface IInput {
    id: string
    type: "text" | "password" | "number" | "email" | "date"
    placeholder: string
    value?: string | number
    onchange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onblur: (e: React.FocusEvent<HTMLInputElement, Element>) => void
}
