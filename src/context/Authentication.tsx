import React, { createContext, useCallback, useEffect, useState } from 'react'
import { TAuthentication } from '../utils/types/TAuthentication'
import { api } from '../utils/service/api/getToken'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useEmailStore } from '../utils/store/Store'


export const AuthenticationContext = createContext<TAuthentication>({
    logged: false,
    user: "",
    outuser: () => { },
    loggeduser: () => { }
})

function AuthenticationProvider({ children }: { children: React.ReactNode }) {

    const [email,setEmail] = useEmailStore((state) => [state.email,state.setEmail])
    const [user, setUser] = useState<string>("")


    const callBackStorage = useCallback(() => {
        const loadingStorage = () => {
            const storageToken = localStorage.getItem("@Auth:token")
            const storageEmail = localStorage.getItem("@Auth:email")

            if (storageToken && storageEmail) {
                setUser(`${storageToken}`)
                setEmail(storageEmail)
            }
        }

        loadingStorage()

    }, [])



    useEffect(() => {
        callBackStorage()
    }, [callBackStorage])

    const loggeduser = async (email: string, password: string) => {

        try {

            const response = await api.post("/user/login", {
                password: password,
                email: email,
            })


            if (response.data.error) {
                alert(response.data.error);
            } else {
                setUser(response.data);
                axios.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${response.data}`;
                localStorage.setItem("@Auth:token", response.data);
                localStorage.setItem("@Auth:email", email);
                toast.success("Sessão iniciada")
            }


        } catch (error: any) {
            console.log(error);
            toast.error(`${error.response.data}`)
        }

    }

    const outuser = () => {
        localStorage.clear();
        setUser("")
    };
    return (
        <AuthenticationContext.Provider
            value={{
                logged: !!user,
                user,
                loggeduser,
                outuser
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationProvider