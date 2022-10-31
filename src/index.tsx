import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter, HashRouter} from "react-router-dom";
import {ModalState} from "./context/ModalContext";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <HashRouter>
        <ModalState>
            <App/>
        </ModalState>
    </HashRouter>
);
