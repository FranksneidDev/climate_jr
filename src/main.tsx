import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import './index.css'
import Router from "./Hooks/Router.tsx";
import {Provider} from "react-redux";
import {store} from "./Store/Store.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
