import React from "react";
import useDragger from "../hooks/useDragger";

const Garchomp: React.FC = () => {
    useDragger("Garchomp");

    return (
        <div id="Garchomp" className="Garchomp">
            <img
                draggable="false"
                src={require("./445.png")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default Garchomp;
