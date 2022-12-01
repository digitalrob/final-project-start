import React from "react";
import useDragger from "../hooks/useDragger";

const Rhydon: React.FC = () => {
    useDragger("Rhydon");

    return (
        <div id="Rhydon" className="Rhydon">
            <img
                draggable="false"
                src={require("./112.png")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default Rhydon;
