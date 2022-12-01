import React from "react";
import useDragger from "../hooks/useDragger";

//const Arr[] = "Bulbasaur, Charizard, Eevee, Garchomp, Jigglypuff, Jolteon, Lucario, Nidoking, Pikachu, Rattata, Rhydon, Snorlax, Venusaur, Wartortle";
const Bulbasaur: React.FC = () => {
    useDragger("Bulbasaur");

    return (
        <div id="Bulbasaur" className="Bulbasaur">
            <img
                draggable="false"
                src={require("./001.png")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default Bulbasaur;
