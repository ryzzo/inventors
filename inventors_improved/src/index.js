import React from "react";
import ReactDOM from "react-dom/client";
import "./components/css/app.css";

import WelcomePage from "./components/WelcomePage";

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer)
root.render(<WelcomePage/>);