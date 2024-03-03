import React from "react";
import WelcomePage from "./WelcomePage";
import InventorGame from "./InventorGame";
import {Routes, Route} from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const InventorApp = () =>{
    const navigate = useNavigate();

    return(
        <Routes>
            <Route path="/" element={<WelcomePage/>}/>
            <Route path="/game" element={<InventorGame/>}/>
        </Routes>
    );
};

export default InventorApp;