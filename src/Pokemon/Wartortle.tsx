import React from "react";
import useDragger from "../hooks/useDragger";

const Wartortle: React.FC = () => {
    useDragger("Wartortle");

    return (
        <div id="Wartortle" className="Wartortle">
            <img src={require("./008.png")} width="100" height="100" />
        </div>
    );
};

export default Wartortle;
