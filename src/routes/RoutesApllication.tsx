

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../layout/user/Login/Login'
import CreateAccount from '../layout/user/CreateAccount/CreateAccount'
import RoutesPrivate from './RoutesPrivate'
import LayoutPage from '../pages/layout/LayoutPage'

function RoutesApllication() {
    return (
        <Routes>
            <Route
                path='/'
                Component={Login}
                errorElement={<h1>Error</h1>}
            />

            <Route
                path='/create'
                Component={CreateAccount}
                errorElement={<h1>Error</h1>}
            />



            <Route
                path="/biometry"
                Component={RoutesPrivate}
            >


                <Route
                    index
                    Component={LayoutPage}
                />

            </Route>


        </Routes >
    )
}

export default RoutesApllication