import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import MemberPage from "./pages/MemberPage";
import ProductLanding from "./pages/products";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>

            <Route path={"/admin"} element ={<MainPage/>}>

            </Route>
            <Route path={"/products/*"} element = {<ProductLanding></ProductLanding>}>

            </Route>

            <Route path="/" element={<MemberPage />}>

            </Route>
            
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
