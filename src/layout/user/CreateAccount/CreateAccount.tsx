import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import { object, number, string, ObjectSchema } from 'yup';
import { Formik, Form } from 'formik';
import Errors from '../components/Errors';
import { api } from '../../../utils/service/api/getToken';
import toast from 'react-hot-toast';
import { User } from '../../../utils/interface/IUser';




export default function CreateAccount() {

    const navigate = useNavigate()

    const userinitial: User = {
        email: "",
        password: "",
        phone1: 0,
        phone2: 0,
        username: ""
    }


    const schema: ObjectSchema<User> = object({
        email: string().required().email(),
        password: string().required(),
        username: string().required(),
        phone1: number().required().min(90000000).max(999999999),
        phone2: number().required().min(90000000).max(999999999),
    })

    return (
        <div className="h-screen flex">
            <div className="hidden lg:flex w-full lg:w-1/2 login_img_section
          justify-around items-center">
                <div
                    className=" 
                  bg-black 
                  opacity-20 
                  inset-0 
                  z-0"
                >

                </div>
                <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
                    <h1 className="text-white font-bold text-4xl font-sans">Simple App</h1>
                    <p className="text-white mt-1">The simplest app to use</p>
                    <div className="flex justify-center lg:justify-start mt-6">
                        <Link to="#" className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">Get Started</Link>
                    </div>
                </div>
            </div>
            <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
                <div className="w-full px-8 md:px-32 lg:px-24">

                    <Formik
                        initialValues={userinitial}
                        validationSchema={schema}
                        validateOnChange
                        onSubmit={async values => {

                            await api.post("/user", {
                                username: values.username,
                                email: values.email,
                                phone1: values.phone1,
                                phone2: values.phone2,
                                password: values.password
                            })
                                .then(async success => {
                                    navigate("/")
                                    toast.success(`${success.data}`)
                                })
                                .catch(async error => {
                                    toast.error(`${error.response.data}`)
                                })



                        }}
                    >

                        {({ errors, touched, handleChange, handleBlur }) => (

                            <Form>

                                <h1 className="text-gray-800 font-bold text-2xl mb-1">
                                    Olá de novo!</h1>
                                <p className="text-sm font-normal text-gray-600 mb-8">Bem vindo de volta</p>

                                <div className=''>


                                    <Errors
                                        data={{
                                            touched: touched.username,
                                            errors: errors.username,
                                        }}
                                    />

                                    <div className={`flex items-center border-2 mb-6 py-2 px-3 rounded-2xl`}>


                                        <svg
                                            viewBox="0 0 1024 1024"
                                            fill="currentColor"
                                            height="1em"
                                            width="1em"
                                            className="h-5 w-5 text-gray-400"

                                        >
                                            <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" />
                                        </svg>


                                        <Input
                                            data={{
                                                id: 'username',
                                                type: 'text',
                                                onchange: handleChange("username"),
                                                onblur: handleBlur("username"),
                                                placeholder: "Username"
                                            }}
                                        />

                                    </div>

                                </div>


                                <Errors
                                    data={{
                                        touched: touched.email,
                                        errors: errors.email,
                                    }}
                                />

                                <div className="flex items-center border-2 mb-6 py-2 px-3 rounded-2xl">


                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>


                                    <Input
                                        data={{
                                            id: 'email',
                                            type: 'text',
                                            onchange: handleChange("email"),
                                            onblur: handleBlur("email"),
                                            placeholder: "Email adress",
                                        }}
                                    />



                                </div>


                                <Errors
                                    data={{
                                        touched: touched.password,
                                        errors: errors.password,
                                    }}
                                />

                                <div className="flex items-center border-2 mb-6 py-2 px-3 rounded-2xl ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>

                                    <Input
                                        data={{
                                            id: 'password',
                                            type: 'password',
                                            onchange: handleChange("password"),
                                            onblur: handleBlur("password"),
                                            placeholder: "Password",
                                        }}
                                    />


                                </div>

                                <Errors
                                    data={{
                                        touched: touched.phone1,
                                        errors: errors.phone1,
                                    }}
                                />

                                <div className="flex items-center border-2 mb-6 py-2 px-3 rounded-2xl ">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="h-5 w-5 text-gray-400"
                                    >
                                        <path d="M21 2H6a2 2 0 00-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 002 2h15a1 1 0 001-1V3a1 1 0 00-1-1zm-8 2.999c1.648 0 3 1.351 3 3A3.012 3.012 0 0113 11c-1.647 0-3-1.353-3-3.001 0-1.649 1.353-3 3-3zM19 18H7v-.75c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18z" />
                                    </svg>

                                    <Input
                                        data={{
                                            id: 'phone1',
                                            type: 'text',
                                            onchange: handleChange("phone1"),
                                            onblur: handleBlur("phone1"),
                                            placeholder: "900000000",
                                        }}
                                    />


                                </div>

                                <Errors
                                    data={{
                                        touched: touched.phone2,
                                        errors: errors.phone2,
                                    }}
                                />

                                <div className="flex items-center border-2 mb-6 py-2 px-3 rounded-2xl ">

                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="h-5 w-5 text-gray-400"
                                    >
                                        <path d="M21 2H6a2 2 0 00-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 002 2h15a1 1 0 001-1V3a1 1 0 00-1-1zm-8 2.999c1.648 0 3 1.351 3 3A3.012 3.012 0 0113 11c-1.647 0-3-1.353-3-3.001 0-1.649 1.353-3 3-3zM19 18H7v-.75c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18z" />
                                    </svg>

                                    <Input
                                        data={{
                                            id: 'phone2',
                                            type: 'text',
                                            onchange: handleChange("phone2"),
                                            onblur: handleBlur("phone2"),
                                            placeholder: "900000000",
                                        }}
                                    />


                                </div>



                                <button type="submit" className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Create</button>
                                <div className="flex justify-between mt-4">
                                    <Link to={"/"} className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Login ?</Link>

                                    <Link to="#" className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Don't have an account yet?</Link>
                                </div>


                            </Form>


                        )}
                    </Formik >

                </div>

            </div>
        </div>
    )
}
