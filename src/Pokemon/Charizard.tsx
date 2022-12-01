import React from "react";
import useDragger from "../hooks/useDragger";

const Charizard: React.FC = () => {
    useDragger("Charizard");

    return (
        <div id="Charizard" className="Charizard">
            <img
                draggable="false"
                src={require("./006.png")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default Charizard;
