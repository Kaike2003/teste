import React, { useCallback, useEffect } from 'react'
import { useEmailStore, useModalIdentityStoreView } from '../../utils/store/Store'
import { Dialog, Select, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Field, Input, Label } from '@headlessui/react'
import { api } from '../../utils/service/api/getToken'
import { TTableIdentety } from '../../utils/types/TTableIdentety'
import dateFormat from "dateformat";



export default function ModalIdentityCardView() {

    const [modal, setModal] = useModalIdentityStoreView((state) => [state.modal, state.setModal])
    const [email] = useEmailStore((state) => [state.email])
    const [data, setData] = useState<TTableIdentety[]>([])
    console.log(email)

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
                                        return (
                                            <React.Fragment key={item.cardnumber}>
                                                <Field className={"flex flex-row gap-2 items-center"}>


                                                    <Field className={"w-[100%]"}>
                                                        <Label>Name <span className='text-red-500 font-medium'>*</span></Label>

                                                        <Input
                                                            className="
w-full bg-white px-4 py-2 rounded-lg focus:outline-none
mt-2 text-gray-700 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500  focus:ring"
                                                            name="full_name"
                                                            placeholder='name'
                                                            value={item.name}
                                                            disabled
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
                                                            aria-label="Project status">
                                                            <option value="">{item.sexo}</option>

                                                        </Select>


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
                                                            value={item.fathername}
                                                            disabled

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
                                                            value={item.mathername}
                                                            disabled

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
                                                            type='text'
                                                            value={dateFormat(item.datebirth, "dd-mm-yyyy")}
                                                            disabled

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
                                                            value={item.height}
                                                            disabled

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
                                                            value={item.province}
                                                            disabled
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
                                                            value={item.residence}
                                                            disabled
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
                                                            type="text"
                                                            placeholder='issuedon'
                                                            value={dateFormat(item.issuedon, "dd-mm-yyyy")}
                                                            disabled
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
                                                            type="text"
                                                            placeholder='validuntil'
                                                            value={dateFormat(item.validuntil, "dd-mm-yyyy")}
                                                            disabled

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
                                                            aria-label="Project status">
                                                            <option value="">{item.maritalstatus}</option>

                                                        </Select>


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
                                                            value={item.cardnumber}
                                                            disabled
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
                                                            value={item.naturalfrom}
                                                            disabled
                                                        />


                                                    </Field>




                                                </Field>

                                            </React.Fragment>
                                        )
                                    })}


                                    <div className="mt-4">
                                        <button
                                            type="button"

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



                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition >
        </>
    )
}
