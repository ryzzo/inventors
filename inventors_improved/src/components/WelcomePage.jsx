import "./css/app.css"
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
    const navigate = useNavigate();
    
    return(
        <>

        <div className="welcome-page">
            <h1 className="welcome-page-title">INVENTORS</h1>
        </div>
        <div className="button-area">
            <button className="start-button" onClick={()=> navigate('game')}>
                START
            </button>
        </div>
        </>
    );
};

export default WelcomePage;