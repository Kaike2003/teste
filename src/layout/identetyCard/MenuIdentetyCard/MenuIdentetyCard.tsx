import React from 'react'
import { Link } from 'react-router-dom'
import { useModalIdentityCardStorePut, useModalIdentityStore, useModalIdentityStoreView, useModalNumberIdentity } from '../../../utils/store/Store'

function MenuIdentetyCard() {

    const [setModal] = useModalIdentityStore((state) => [state.setModal])
    const [setModalView] = useModalIdentityStoreView((state) => [state.setModal])
    const [setModalPut] = useModalIdentityCardStorePut((state) => [state.setModal])
    const [setModalNumberIdentity] = useModalNumberIdentity((state) => [state.setModal])



    return (
        <React.Fragment>
            <div className='sm:mt-6 lg:mt-8 mt-12 lg:mb-20 max-w-[100%] mx-auto px-4 sm:px-6 lg:px-8 flex flex-row gap-5 items-center justify-center'>

                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-3">
                    <div className="rounded-md shadow ">
                        <button
                            onClick={() => {
                                setModal(true)
                            }}
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
                            Criar bilhete de identidade
                        </button>
                    </div>
                </div>

                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-3">
                    <div className="rounded-md shadow ">
                        <button
                            onClick={() => {
                                setModalView(true)
                            }}
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
                            Visualizar bilhete de identidade
                        </button>
                    </div>
                </div>

                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-3">
                    <div className="rounded-md shadow ">
                        <button
                            onClick={() => {
                                setModalPut(true)
                            }}
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
                            Editar bilhete de identidade
                        </button>
                    </div>
                </div>

                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-3">
                    <div className="rounded-md shadow ">
                        <button
                            onClick={() => {
                                setModalNumberIdentity(true)
                            }}
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
                            Editar nº bilhete de identidade
                        </button>
                    </div>
                </div>



            </div>
        </React.Fragment>
    )
}

export default MenuIdentetyCard