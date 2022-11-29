import React from "react";
import useDragger from "../hooks/useDragger";

const Pikachu: React.FC = () => {
    useDragger("Pikachu");

    return (
        <div id="Pikachu" className="Pikachu">
            <img src={require("./25.png")} width="100" height="100" />
        </div>
    );
};

export default Pikachu;
