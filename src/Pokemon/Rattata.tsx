import React from "react";
import useDragger from "../hooks/useDragger";

const Rattata: React.FC = () => {
    useDragger("Rattata");

    return (
        <div id="Rattata" className="Rattata">
            <img
                draggable="false"
                src={require("./019.png")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default Rattata;
