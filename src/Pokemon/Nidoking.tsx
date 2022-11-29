import React from "react";
import useDragger from "../hooks/useDragger";

const Nidoking: React.FC = () => {
    useDragger("Nidoking");

    return (
        <div id="Nidoking" className="Nidoking">
            <img src={require("./034.png")} width="100" height="100" />
        </div>
    );
};

export default Nidoking;
