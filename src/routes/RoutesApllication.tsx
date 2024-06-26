

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../layout/user/Login/Login'
import CreateAccount from '../layout/user/CreateAccount/CreateAccount'
import RoutesPrivate from './RoutesPrivate'
import LayoutPage from '../pages/layout/LayoutPage'
import LayoutIdentetyCardPage from '../pages/layouIdentetyCard/LayoutIdentetyCard'
import LayoutFingerPrintPage from '../pages/layouFingerPrint/layouFingerPrint'

function RoutesApllication() {
    return (
        <Routes>
            <Route
                path='/'
                Component={Login}
            />

            <Route
                path='/create'
                Component={CreateAccount}
            />



            <Route
                path="/biometry"
                Component={RoutesPrivate}
            >


                <Route
                    index
                    Component={LayoutPage}
                />

                <Route
                    path='identetycard'
                    Component={LayoutIdentetyCardPage}
                />

                <Route
                    path='fingerprint'
                    Component={LayoutFingerPrintPage}
                />

            </Route>


        </Routes >
    )
}

export default RoutesApllication