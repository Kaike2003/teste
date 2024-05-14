import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./utils/styles/index.css"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import AuthenticationProvider from './context/Authentication';

ReactDOM.render(
    <AuthenticationProvider>
        <BrowserRouter>
            <React.StrictMode>
                <App />
                <Toaster />
            </React.StrictMode>
        </BrowserRouter >
    </AuthenticationProvider>
    ,
    document.getElementById('root')
);
