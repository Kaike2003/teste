import React, { useCallback, useEffect } from 'react'
import { useEmailStore, useModalUser } from '../../utils/store/Store'
import { Dialog, Select, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Field, Input, Label } from '@headlessui/react'
import { api } from '../../utils/service/api/getToken'
import dateFormat from "dateformat";
import Errors from '../../layout/user/components/Errors'
import { Formik, Form } from 'formik';
import { TUser } from '../../utils/types/TUser'
import { TPhones } from '../../utils/types/TPhones'



export default function ModalUserView() {

    const [modal, setModal] = useModalUser((state) => [state.modal, state.setModal])
    const [email] = useEmailStore((state) => [state.email])
    const [data, setData] = useState<TUser[]>([])
    const [phone, setPhone] = useState<TPhones[]>([])


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

    // data.map((item) => {
    //     const { Phone } = item
    //     return setPhone(Phone)
    // })

    // const phonesValue = data.map((item) => {
    //     return item.Phone
    // })

    // console.log(phonesValue)




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
                                        const { email, username, Phone } = item
                                        const { phone1, phone2 } = Phone[0]


                                        return (

                                            <React.Fragment>
                                                <Field className={"flex flex-row gap-2 items-center"}>


                                                    <Field className={"w-[100%]"}>
                                                        <Label>User name</Label>

                                                        <Input
                                                            className="
w-full bg-white px-4 py-2 rounded-lg focus:outline-none
mt-2 text-gray-700 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500  focus:ring"
                                                            name="full_name"
                                                            placeholder='name'
                                                            disabled
                                                            value={username}

                                                        />


                                                    </Field>


                                                    <Field className={"w-[100%]"}>
                                                        <Label>Email</Label>

                                                        <Input
                                                            className="
w-full bg-white px-4 py-2 rounded-lg focus:outline-none
mt-2 text-gray-700 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500  focus:ring"
                                                            name="full_name"
                                                            placeholder='fathername'
                                                            disabled
                                                            value={email}

                                                        />


                                                    </Field>



                                                </Field>

                                                <Field className={"flex flex-row gap-2 items-center"}>


                                                    <Field className={"w-[100%]"}>
                                                        <Label>Phone 1</Label>

                                                        <Input
                                                            disabled
                                                            className="
w-full bg-white px-4 py-2 rounded-lg focus:outline-none
mt-2 text-gray-700 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500  focus:ring"
                                                            name="full_name"
                                                            placeholder='name'

                                                            value={phone1}

                                                        />


                                                    </Field>


                                                    <Field className={"w-[100%]"}>
                                                        <Label>Phone 2</Label>

                                                        <Input
                                                            disabled
                                                            className="
w-full bg-white px-4 py-2 rounded-lg focus:outline-none
mt-2 text-gray-700 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500  focus:ring"
                                                            name="full_name"
                                                            placeholder='fathername'

                                                            value={phone2}

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
                                                        onClick={() => {
                                                            setModal(false)
                                                        }}
                                                    >
                                                        Ok
                                                    </button>
                                                </div>
                                            </React.Fragment>


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
