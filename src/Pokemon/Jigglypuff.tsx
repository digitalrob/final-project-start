import React from "react";
import useDragger from "../hooks/useDragger";

const Jigglypuff: React.FC = () => {
    useDragger("Jigglypuff");

    return (
        <div id="Jigglypuff" className="Jigglypuff">
            <img
                draggable="false"
                src={require("./039.png")}
                width="70"
                height="70"
            />
        </div>
    );
};

export default Jigglypuff;
