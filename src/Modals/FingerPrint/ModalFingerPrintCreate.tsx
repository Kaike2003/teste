import React, { useCallback, useEffect } from 'react'
import { useModalFingerPrint } from '../../utils/store/Store'
import { Dialog, Select, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { api } from '../../utils/service/api/getToken'
import toast from 'react-hot-toast'

import { Fingerprint } from 'lucide-react';

export default function ModalFingerPrintCreate() {

    const [modal, setModal] = useModalFingerPrint((state) => [state.modal, state.setModal])
    const [finger, setFinger] = useState<boolean>(false)
    const [status, setStatus] = useState<boolean>(false)

    const callBack = useCallback(async () => {
    


    }, [])


    useEffect(() => {
        callBack()
    }, [callBack])



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
                                <Dialog.Panel className="max-w-md w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    
                                    <div className="mt-4">
                                        <Fingerprint
                                            size={400}
                                            className={`
                                            w-full text-black px-4 py-2 rounded-lg focus:outline-none
                                            ${status === false ?
                                                    "bg-blue-100 hover:bg-blue-200"
                                                    :
                                                    "bg-red-100 hover:bg-red-200"
                                                }
                                         mt-2 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 cursor-pointer focus:ring
                                            `}
                                            onClick={() => {



                                                if (status === false) {

                                                    if (finger === true) {
                                                        setFinger(false)
                                                    } else {
                                                        setFinger(true)
                                                    }

                                                    setStatus(true)
                                                } else {

                                                    if (finger === true) {
                                                        setFinger(false)
                                                    } else {
                                                        setFinger(true)
                                                    }

                                                    setStatus(false)
                                                }
                                            }}
                                        />
                                    </div>

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
                                            Create
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
