import React from "react";
import useDragger from "../hooks/useDragger";

const Jigglypuff: React.FC = () => {
    useDragger("Jigglypuff");

    return (
        <div id="Jigglypuff" className="Jigglypuff">
            <img src={require("./039.png")} width="100" height="100" />
        </div>
    );
};

export default Jigglypuff;
