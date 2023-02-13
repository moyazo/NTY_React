import { FC } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from 'react-router-dom'
import Details from "../details";
import Home from "../home";

const Router : FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/details" element={<Details/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;