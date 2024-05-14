import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthenticationContext } from "../context/Authentication";


export default function RoutesPrivate() {

    const { logged } = useContext(AuthenticationContext)

    return (
        logged ? <Outlet /> : <Navigate to={"/biometry"} />
    )
}
