import React from "react";
import useDragger from "../hooks/useDragger";

const Venusaur: React.FC = () => {
    useDragger("Venusaur");

    return (
        <div id="Venusaur" className="Venusaur">
            <img src={require("./003.png")} width="100" height="100" />
        </div>
    );
};

export default Venusaur;
