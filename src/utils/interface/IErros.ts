import { FormikErrors, FormikTouched } from "formik"
import React from "react"

export default interface IErrors {
    touched: boolean | undefined | FormikTouched<Date>
    errors: string | undefined | FormikErrors<Date>
}