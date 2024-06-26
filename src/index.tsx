import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./utils/styles/index.css"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import AuthenticationProvider from './context/Authentication';
import ModalIdentityCardCreate from './Modals/IdentityCard/ModalIdentityCardCreate';
import ModalIdentityCardView from './Modals/IdentityCard/ModalIdentityCardView';
import ModalIdentityCardPut from './Modals/IdentityCard/ModalIdentityCardPut';
import ModalFingerPrintCreate from './Modals/FingerPrint/ModalFingerPrintCreate';
import ModalIdentityCardNumberPut from './Modals/IdentityCard/ModalIdentityCardNumberPut';
import ModalUserView from './Modals/user/ModalUserView';
import ModalUserPutBasic from './Modals/user/ModalUserPutBasic';
import ModalUserPutEmail from './Modals/user/ModalUserPutEmail';
import ModalUserPutPassword from './Modals/user/ModalUserPutPassword';

ReactDOM.render(
    <AuthenticationProvider>
        <BrowserRouter>
            <React.StrictMode>
                <App />
                <Toaster />
                <ModalIdentityCardCreate />
                <ModalIdentityCardView />
                <ModalIdentityCardPut />
                <ModalFingerPrintCreate />
                <ModalIdentityCardNumberPut />
                <ModalUserView />
                <ModalUserPutBasic />
                <ModalUserPutEmail />
                <ModalUserPutPassword />
            </React.StrictMode>
        </BrowserRouter >
    </AuthenticationProvider>
    ,
    document.getElementById('root')
);
