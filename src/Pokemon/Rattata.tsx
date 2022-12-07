import React from "react";
import useDragger from "../hooks/useDragger";

const Rattata: React.FC = () => {
    useDragger("Rattata");

    return (
        <div id="Rattata" className="Rattata">
            <img
                draggable="false"
                src={require("./019.png")}
                width="80"
                height="80"
            />
        </div>
    );
};

export default Rattata;
