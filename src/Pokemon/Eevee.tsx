import React from "react";
import useDragger from "../hooks/useDragger";

const Eevee: React.FC = () => {
    useDragger("Eevee");

    return (
        <div id="Eevee" className="Eevee">
            <img src={require("./133.png")} width="100" height="100" />
        </div>
    );
};

export default Eevee;
