import React, { Fragment, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu } from '@headlessui/react'
import { AuthenticationContext } from '../../../context/Authentication'
import { useModalUser, useModalUserPassword, useModalUserPutBasic, useModalUserPutEmail } from '../../../utils/store/Store'

function Profile() {


    const { outuser } = useContext(AuthenticationContext)
    const navigate = useNavigate()
    const [setModalInfo] = useModalUser((state) => [state.setModal])
    const [setModalPutBasic] = useModalUserPutBasic((state) => [state.setModal])
    const [setModalPutEmail] = useModalUserPutEmail((state) => [state.setModal])
    const [setModalPutPassword] = useModalUserPassword((state) => [state.setModal])




    return (
        <div className='flex items-center ml-auto space-x-6'>
            <Menu as={Fragment} >
                <Menu.Button className={"flex items-center justify-center px-8 py-1 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-2 md:text-lg md:px-5"}>Perfil</Menu.Button>
                <Menu.Items >
                    <div className='flex gap-4'>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`flex items-center justify-center px-8 py-1 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-2 md:text-lg md:px-5
                                    ${active && 'bg-blue-500'}`}
                                    onClick={() => {
                                        setModalInfo(true)
                                    }}
                                >
                                    Visualizar informações
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`flex items-center justify-center px-8 py-1 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-2 md:text-lg md:px-5
                                    ${active && 'bg-blue-500'}`}
                                    onClick={() => {
                                        setModalPutBasic(true)
                                    }}
                                >
                                    Editar
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`flex items-center justify-center px-8 py-1 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-2 md:text-lg md:px-5
                                    ${active && 'bg-blue-500'}`}
                                    onClick={() => {
                                        setModalPutEmail(true)
                                    }}
                                >
                                    Email
                                </button>
                            )}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`flex items-center justify-center px-8 py-1 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-2 md:text-lg md:px-5
                                    ${active && 'bg-blue-500'}`}
                                    onClick={() => {
                                        setModalPutPassword(true)
                                    }}
                                >
                                    Password
                                </button>
                            )}
                        </Menu.Item>


                        <Menu.Item >
                            {({ active }) => (
                                <button
                                    onClick={() => {
                                        outuser()
                                        navigate("/")
                                    }}
                                    className={` flex items-center justify-center px-8 py-1 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-2 md:text-lg md:px-5
                                        ${active && 'bg-blue-500'}`}
                                >
                                    Sair
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Menu>


            <button id="toggleOpen" className='lg:hidden'>
                <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
    )
}

export default Profile