import React from "react";
import useDragger from "../hooks/useDragger";

const Jolteon: React.FC = () => {
    useDragger("Jolteon");

    return (
        <div id="Jolteon" className="Jolteon">
            <img src={require("./135.png")} width="100" height="100" />
        </div>
    );
};

export default Jolteon;
