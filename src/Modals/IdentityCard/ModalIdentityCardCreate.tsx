import React, { useCallback, useEffect } from 'react'
import { useEmailStore, useModalIdentityStore } from '../../utils/store/Store'
import { Dialog, Select, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Description, Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'
import { Formik, Form } from 'formik';
import { IIdentety } from '../../utils/interface/IIdentety'
import { number, string, ObjectSchema, date, object } from 'yup'
import Errors from '../../layout/user/components/Errors'
import { api } from '../../utils/service/api/getToken'
import toast from 'react-hot-toast'



export default function ModalIdentityCardCreate() {

    const [modal, setModal] = useModalIdentityStore((state) => [state.modal, state.setModal])
    const [email] = useEmailStore((state) => [state.email])


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


    const schema = object({
        cardnumber: string().required().min(14).max(14).matches(/^\d{9}[A-Z]{2}\d{3}$/, 'The identity card code is invalid'),
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



                                    <Formik
                                        initialValues={userinitial}
                                        validationSchema={schema}
                                        validateOnChange
                                        onSubmit={async values => {

                                            api.post("/identityCard", {
                                                email: email,
                                                datebirth: new Date(values.datebirth),
                                                fathername: values.fathername,
                                                height: Number(values.height),
                                                issuedon: values.issuedon,
                                                maritalstatus: values.maritalstatus,
                                                mathername: values.mathername,
                                                name: values.name,
                                                naturalfrom: values.naturalfrom,
                                                province: values.province,
                                                residence: values.residence,
                                                sexo: values.sexo,
                                                validuntil: values.validuntil,
                                                cardnumber: values.cardnumber
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

                                        {({ errors, touched, handleChange, handleBlur }) => (

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
                                                            onBlur={handleBlur("sexo")} aria-label="Project status">
                                                            <option value="">Sexo</option>
                                                            <option value="masculine">Masculine</option>
                                                            <option value="feminine">Feminine</option>
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
                                                        />
                                                        <Errors
                                                            data={{
                                                                touched: touched.residence,
                                                                errors: errors.residence,
                                                            }}
                                                        />

                                                    </Field>


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
                                                        />
                                                        <Errors
                                                            data={{
                                                                touched: touched.issuedon,
                                                                errors: errors.issuedon,
                                                            }}
                                                        />

                                                    </Field>




                                                </Field>

                                                <Field className={"flex flex-row gap-2"}>


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
                                                            onChange={handleChange("maritalstatus")}
                                                            onBlur={handleBlur("maritalstatus")} aria-label="Project status">
                                                            <option value="active">Marital status</option>
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

                                                    <Field className={"w-[100%]"}>
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
                                                        />
                                                        <Errors
                                                            data={{
                                                                touched: touched.cardnumber,
                                                                errors: errors.cardnumber,
                                                            }}
                                                        />
                                                    </Field>


                                                </Field>




                                                <Field className={"flex flex-row gap-2"}>


                                                    <Field className={"w-[33%]"}>
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
                                                        />

                                                        <Errors
                                                            data={{
                                                                touched: touched.naturalfrom,
                                                                errors: errors.naturalfrom,
                                                            }}
                                                        />
                                                    </Field>




                                                </Field>



                                                <div className="mt-4">
                                                    <button
                                                        type="submit"

                                                        className="
                                    w-full text-black font-medium px-4 py-2 rounded-lg focus:outline-none
                                    bg-blue-100 hover:bg-blue-200
                                     mt-2 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500  focus:ring"
                                                    >
                                                        Create
                                                    </button>
                                                </div>



                                            </Form>


                                        )}
                                    </Formik >


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition >
        </>
    )
}
