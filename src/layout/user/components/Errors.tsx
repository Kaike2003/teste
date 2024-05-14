import React from 'react'
import IErrors from '../../../utils/interface/IErros'


function Errors({ data }: { data: IErrors }) {

    const { errors, touched } = data

    return (
        <div>
            {touched && errors &&
                <div className="font-medium">
                    {String(errors)}
                </div>}
        </div>
    )
}

export default Errors