import React from "react";
import ReactDOM from "react-dom/client";
import "./components/css/app.css";

import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";


import WelcomePage from "./components/WelcomePage";
import InventorApp from "./components/InventorApp";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <InventorApp />
        </BrowserRouter>
    </React.StrictMode>
);