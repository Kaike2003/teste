import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import { object, number, string, ObjectSchema } from 'yup';
import { Formik, Form } from 'formik';
import Errors from '../components/Errors';
import { api } from '../../../utils/service/api/getToken';
import toast from 'react-hot-toast';
import { UserLogin } from '../../../utils/interface/IUserLogin';
import { AuthenticationContext } from '../../../context/Authentication';




export default function Login() {

    const { logged, loggeduser } = useContext(AuthenticationContext)
    const navigate = useNavigate()

    console.log(logged)


    const userinitial: UserLogin = {
        email: "",
        password: "",
    }


    const schema: ObjectSchema<UserLogin> = object({
        email: string().required().email(),
        password: string().required(),
    })


    if (logged) {
        return <>
            {navigate("/biometry")}
        </>
    } else {
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


                                const email = values.email
                                const password = values.password
                                return loggeduser(email, password)

                            }}
                        >

                            {({ errors, touched, handleChange, handleBlur }) => (

                                <Form>

                                    <h1 className="text-gray-800 font-bold text-2xl mb-1">
                                        Olá de novo!</h1>
                                    <p className="text-sm font-normal text-gray-600 mb-8">Bem vindo de volta</p>




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






                                    <button type="submit" className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Create</button>
                                    <div className="flex justify-between mt-4">
                                        <Link to={"/create"} className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Create account ?</Link>

                                        <div></div>
                                    </div>


                                </Form>


                            )}
                        </Formik >

                    </div>

                </div>
            </div>
        )
    }


}
