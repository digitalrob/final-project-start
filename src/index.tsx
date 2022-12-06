import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { BDropDown } from "./BackgroundDD";
import Scene from "./Scene";

ReactDOM.render(
    <>
        <div className="title-header">
            <h3>Welcome to Poke Team Design</h3>
            <h4 className="sub-title">
                By Alex Daley, Patrick Harris, Robert Reardon
            </h4>
        </div>
        <hr></hr>
        <BDropDown options={["", "Forest", "Volcano", "Waterfall"]}></BDropDown>
        <React.StrictMode>
            <Scene />
        </React.StrictMode>
    </>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
