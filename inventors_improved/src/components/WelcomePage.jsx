import "./css/app.css"
import React, {useState} from "react";
import InventorApp from "./InventorApp";

const WelcomePage = () => {
    
    return(
        <>
        <div className="welcome-page">
            <h1 className="welcome-page-title">INVENTORS</h1>
        </div>
        <div className="button-area">
            <button className="start-button">
                START
            </button>
        </div>
        </>
    );
};

export default WelcomePage;