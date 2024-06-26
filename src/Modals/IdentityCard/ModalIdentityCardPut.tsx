import React, { useCallback, useEffect } from 'react'
import { useEmailStore, useModalIdentityCardStorePut } from '../../utils/store/Store'
import { Dialog, Select, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Field, Input, Label } from '@headlessui/react'
import { api } from '../../utils/service/api/getToken'
import { TTableIdentety } from '../../utils/types/TTableIdentety'
import dateFormat from "dateformat";
import { IIdentety } from '../../utils/interface/IIdentety'
import { date, number, object, string } from 'yup'
import Errors from '../../layout/user/components/Errors'
import toast from 'react-hot-toast'
import { Formik, Form } from 'formik';



export default function ModalIdentityCardPut() {

    const [modal, setModal] = useModalIdentityCardStorePut((state) => [state.modal, state.setModal])
    const [email] = useEmailStore((state) => [state.email])
    const [data, setData] = useState<TTableIdentety[]>([])


    const callBackData = useCallback(async () => {

        const response = await api.get(`/identityCard/${email}`)
            .then(async success => {
                const newData = success.data
                setData(newData)
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });


    }, [email])

    useEffect(() => {
        callBackData()
    }, [callBackData])



    const schema = object({
        // cardnumber: string().required().min(14).max(14).matches(/^\d{9}[A-Z]{2}\d{3}$/, 'The identity card code is invalid'),
        datebirth: date().required(),
        fathername: string().required(),
        height: number().required(),
        issuedon: date().required(),
        maritalstatus: string().required(),
        mathername: string().required(),
        name: string().required(),
        naturalfrom: string().required(),
        province: string().required(),
        residence: string().required(),
        sexo: string().required(),
        validuntil: date().required(),
    })


    return (
        <>

            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => {
                    setModal(false)
                }}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="max-w-5xl w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    {data.map((item) => {
                                        const { cardnumber, datebirth, email, fathername, height, issuedon, maritalstatus, mathername, name, naturalfrom, province, residence, sexo, validuntil } = item

                                        const userSave: IIdentety = {
                                            cardnumber: cardnumber,
                                            datebirth: datebirth,
                                            fathername: fathername,
                                            height: height,
                                            issuedon: issuedon,
                                            maritalstatus: maritalstatus,
                                            province: province,
                                            mathername: mathername,
                                            name: name,
                                            sexo: sexo,
                                            validuntil: validuntil,
                                            residence: residence,
                                            naturalfrom: naturalfrom
                                        }

                                        const userinitial: IIdentety = {
                                            cardnumber: "",
                                            datebirth: "",
                                            fathername: "",
                                            height: 0,
                                            issuedon: "",
                                            maritalstatus: "",
                                            mathername: "",
                                            name: "",
                                            naturalfrom: "",
                                            province: "",
                                            residence: "",
                                            sexo: "",
                                            validuntil: ""
                                        }



                                        return (


                                            <Formik
                                                key={cardnumber}
                                                initialValues={userSave || userinitial}
                                                validationSchema={schema}
                                                validateOnChange
                                                enableReinitialize
                                                onSubmit={async values => {

                                                    api.patch(`/identityCard/update`, {
                                                        email: email,
                                                        datebirth: new Date(values.datebirth),
                                                        fathername: values.fathername,
                                                        height: Number(values.height),
                                                        issuedon: new Date(values.issuedon),
                                                        maritalstatus: values.maritalstatus,
                                                        mathername: values.mathername,
                                                        name: values.name,
                                                        naturalfrom: values.naturalfrom,
                                                        province: values.province,
                                                        residence: values.residence,
                                                        sexo: values.sexo,
                                                        validuntil: new Date(values.validuntil),
                                                    })
                                                        .then(async success => {
                                                            setModal(false)
                                                            toast.success(success.data)
                                                        })
                                                        .catch(async error => {
                                                            toast.error(error.response.data)
                                                        })
                                                }}
                                            >

                                                {({ errors, touched, handleChange, handleBlur, values }) => (

                                                    <Form>



                                                        <Field className={"flex flex-row gap-2 items-center"}>


                                                            <Field className={"w-[100%]"}>
                                                                <Label>Name <span className='text-red-500 font-medium'>*</span></Label>

                                                                <Input
                                                                    className="
                                     w-full bg-white px-4 py-2 rounded-lg focus:outline-none
                                      mt-2 text-gray-700 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500  focus:ring"
                                                                    name="full_name"
                                                                    placeholder='name'
                                                                    onChange={handleChange("name")}
                                                                    onBlur={handleBlur("name")}
                                                                    value={values.name}

                                                                />
                                                                <Errors
                                                                    data={{
                                                                        touched: touched.name,
                                                                        errors: errors.name,
                                                                    }}
                                                                />

                                                            </Field>


                                                            <Field className={"w-[100%]"}>
                                                                <Label>Sexo
                                                                    <span className='text-red-500 font-medium'>*</span>
                                                                </Label>


                                                                <Select
                                                                    className="
                                                w-full bg-white px-4 py-2 rounded-lg focus:outline-none
                                                mt-2 text-gray-700 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500  focus:ring"
                                                                    name="status"
                                                                    onChange={handleChange("sexo")}
                                                                    onBlur={handleBlur("sexo")} aria-label="Project status"
                                                                    value={values.sexo}

                                                                >

                                                                    <option value="masculine">Masculine</option>
                                                                    <option value="feminino">Feminine</option>
                                                                </Select>

                                                                <Errors
                                                                    data={{
                                                                        touched: touched.sexo,
                                                                        errors: errors.sexo,
                                                                    }}
                                                                />
                                                            </Field>






                                                            <Field className={"w-[100%]"}>
                                                                <Label>Fathername
                                                                    <span className='text-red-500 font-medium'>*</span>
                                                                </Label>
                                                                <Input
                                                                    className="
                                     w-full bg-white px-4 py-2 rounded-lg focus:outline-none
                                      mt-2 text-gray-700 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500  focus:ring"
                                                                    name="full_name"
                                                                    placeholder='fathername'
                                                                    onChange={handleChange("fathername")}
                                                                    onBlur={handleBlur("fathername")}
                                                                    value={values.fathername}

                                                                />
                                                                <Errors
                                                                    data={{
                                                                        touched: touched.fathername,
                                                                        errors: errors.fathername,
                                                                    }}
                                                                />

                                                            </Field>



                                                        </Field>


                                                        <Field className={"flex flex-row gap-2"}>

                                                            <Field className={"w-[100%]"}>
                                                                <Label>Mathername
                                                                    <span className='text-red-500 font-medium'>*</span>
                                                                </Label>
                                                                <Input
                                                                    className="
                                     w-full bg-white px-4 py-2 rounded-lg focus:outline-none
                                      mt-2 text-gray-700 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500  focus:ring"
                                                                    name="full_name"
                                                                    placeholder='mathername'
                                                                    onChange={handleChange("mathername")}
                                                                    onBlur={handleBlur("mathername")}
                                                                    value={values.mathername}
                                                                />
                                                                <Errors
                                                                    data={{
                                                                        touched: touched.mathername,
                                                                        errors: errors.mathername,
                                                                    }}
                                                                />

                                                            </Field>




                                                            <Field className={"w-[100%]"}>
                                                                <Label>Datebirth
                                                                    <span className='text-red-500 font-medium'>*</span>
                                                                </Label>
                                                                <Input
                                                                    className="
                                     w-full bg-white px-4 py-2 rounded-lg focus:outline-none
                                      mt-2 text-gray-700 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500  focus:ring"
                                                                    name="full_name"
                                                                    type='date'
                                                                    onChange={handleChange("datebirth")}
                                                                    onBlur={handleBlur("datebirth")}
                                                                    value={String(dateFormat(new Date(values.datebirth), "yyyy-mm-dd"))}


                                                                />
                                                                <Errors
                                                                    data={{
                                                                        touched: touched.datebirth,
                                                                        errors: errors.datebirth,
                                                                    }}
                                                                />

                                                            </Field>

                                                            <Field className={"w-[100%]"}>
                                                                <Label>Height
                                                                    <span className='text-red-500 font-medium'>*</span>
                                                                </Label>
                                                                <Input
                                                                    className="
                                     w-full bg-white px-4 py-2 rounded-lg focus:outline-none
                                      mt-2 text-gray-700 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500  focus:ring"
                                                                    name="full_name"
                                                                    placeholder='height'
                                                                    onChange={handleChange("height")}
                                                                    onBlur={handleBlur("height")}
                                                                    value={values.height}
                                                                />
                                                                <Errors
                                                                    data={{
                                                                        touched: touched.height,
                                                                        errors: errors.height,
                                                                    }}
                                                                />

                                                            </Field>






                                                        </Field>


                                                        <Field className={"flex flex-row gap-2"}>




                                                            <Field className={"w-[100%]"}>
                                                                <Label>Province
                                                                    <span className='text-red-500 font-medium'>*</span>
                                                                </Label>
                                                                <Input
                                                                    className="
                                     w-full bg-white px-4 py-2 rounded-lg focus:outline-none
                                      mt-2 text-gray-700 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500  focus:ring"
                                                                    name="full_name"
                                                                    placeholder='province'
                                                                    onChange={handleChange("province")}
                                                                    onBlur={handleBlur("province")}
                                                                    value={values.province}
                                                                />
                                                                <Errors
                                                                    data={{
                                                                        touched: touched.province,
                                                                        errors: errors.province,
                                                                    }}
                                                                />

                                                            </Field>

                                                            <Field className={"w-[100%]"}>
                                                                <Label>Residence
                                                                    <span className='text-red-500 font-medium'>*</span>
                                                                </Label>
                                                                <Input
                                                                    className="
                                     w-full bg-white px-4 py-2 rounded-lg focus:outline-none
                                      mt-2 text-gray-700 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500  focus:ring"
                                                                    name="full_name"
                                                                    placeholder='residence'
                                                                    onChange={handleChange("residence")}
                                                                    onBlur={handleBlur("residence")}
                                                                    value={values.province}
                                                                />
                                                                <Errors
                                                                    data={{
                                                                        touched: touched.residence,
                                                                        errors: errors.residence,
                                                                    }}
                                                                />

                                                            </Field>

                                                            <Field className={"w-[100%]"}>
                                                                <Label>Naturalfrom
                                                                    <span className='text-red-500 font-medium'>*</span>
                                                                </Label>



                                                                <Input
                                                                    className="
                                     w-full bg-white px-4 py-2 rounded-lg focus:outline-none
                                      mt-2 text-gray-700 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500  focus:ring"
                                                                    name="full_name"
                                                                    type="text"
                                                                    placeholder='naturalfrom'
                                                                    onChange={handleChange("naturalfrom")}
                                                                    onBlur={handleBlur("naturalfrom")}
                                                                    value={values.naturalfrom}

                                                                />

                                                                <Errors
                                                                    data={{
                                                                        touched: touched.naturalfrom,
                                                                        errors: errors.naturalfrom,
                                                                    }}
                                                                />
                                                            </Field>







                                                        </Field>

                                                        <Field className={"flex flex-row gap-2"}>

                                                            <Field className={"w-[100%]"}>
                                                                <Label>Issuedon
                                                                    <span className='text-red-500 font-medium'>*</span>
                                                                </Label>
                                                                <Input
                                                                    className="
                                     w-full bg-white px-4 py-2 rounded-lg focus:outline-none
                                      mt-2 text-gray-700 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500  focus:ring"
                                                                    name="full_name"
                                                                    type="date"
                                                                    placeholder='issuedon'
                                                                    onChange={handleChange("issuedon")}
                                                                    onBlur={handleBlur("issuedon")}
                                                                    value={String(dateFormat(new Date(values.issuedon), "yyyy-mm-dd"))}

                                                                />
                                                                <Errors
                                                                    data={{
                                                                        touched: touched.issuedon,
                                                                        errors: errors.issuedon,
                                                                    }}
                                                                />

                                                            </Field>


                                                            <Field className={"w-[100%]"}>
                                                                <Label>Validuntil
                                                                    <span className='text-red-500 font-medium'>*</span>
                                                                </Label>
                                                                <Input
                                                                    className="
                                     w-full bg-white px-4 py-2 rounded-lg focus:outline-none
                                      mt-2 text-gray-700 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500  focus:ring"
                                                                    name="full_name"
                                                                    type="date"
                                                                    placeholder='validuntil'
                                                                    onChange={handleChange("validuntil")}
                                                                    onBlur={handleBlur("validuntil")}
                                                                    value={String(dateFormat(new Date(values.validuntil), "yyyy-mm-dd"))}

                                                                />
                                                                <Errors
                                                                    data={{
                                                                        touched: touched.validuntil,
                                                                        errors: errors.validuntil,
                                                                    }}
                                                                />

                                                            </Field>


                                                            <Field className={"w-[100%]"}>





                                                                <Label>Maritalstatus
                                                                    <span className='text-red-500 font-medium'>*</span>
                                                                </Label>


                                                                <Select
                                                                    className="
                                                w-full bg-white px-4 py-2 rounded-lg focus:outline-none
                                                mt-2 text-gray-700 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500  focus:ring"
                                                                    name="status"
                                                                    value={values.maritalstatus}
                                                                    onChange={handleChange("maritalstatus")}
                                                                    onBlur={handleBlur("maritalstatus")} aria-label="Project status">
                                                                    <option value="single">Single</option>
                                                                    <option value="married">Married</option>
                                                                    <option value="widower">Widower</option>
                                                                    <option value="divorced">Divorced</option>
                                                                    <option value="separate">Separate</option>
                                                                </Select>

                                                                <Errors
                                                                    data={{
                                                                        touched: touched.maritalstatus,
                                                                        errors: errors.maritalstatus,
                                                                    }}
                                                                />
                                                            </Field>

                                                            {/* <Field className={"w-[100%]"}>
                                                                <Label>cardnumber
                                                                    <span className='text-red-500 font-medium'>*</span>
                                                                </Label>

                                                                <Input
                                                                    className="
w-full bg-white px-4 py-2 rounded-lg focus:outline-none
mt-2 text-gray-700 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500  focus:ring"
                                                                    name="full_name"
                                                                    placeholder='cardnumber'
                                                                    onChange={handleChange("cardnumber")}
                                                                    onBlur={handleBlur("cardnumber")}
                                                                    value={values.cardnumber}

                                                                />
                                                                <Errors
                                                                    data={{
                                                                        touched: touched.cardnumber,
                                                                        errors: errors.cardnumber,
                                                                    }}
                                                                />
                                                            </Field> */}





                                                        </Field>


                                                        <div className="mt-4">
                                                            <button
                                                                type="submit"

                                                                className="
                                    w-full text-black font-medium px-4 py-2 rounded-lg focus:outline-none
                                    bg-blue-100 hover:bg-blue-200
                                     mt-2 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500  focus:ring"
                                                                onClick={() => {

                                                                }}
                                                            >
                                                                Put
                                                            </button>
                                                        </div>



                                                    </Form>


                                                )}
                                            </Formik >
                                        )
                                    })}



                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition >
        </>
    )
}
