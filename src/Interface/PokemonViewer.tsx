import React from "react";
import useDragger from "../hooks/useDragger";
import { Pokemon } from "./Pokemon";
export interface PokemonProps {
    pokemon: Pokemon;
}
const PokemonViewer: React.FC<PokemonProps> = (props) => {
    const { pokemon } = props;
    useDragger(pokemon.name);

    return (
        <div
            id={pokemon.name}
            className={pokemon.name}
            style={{
                top: 0,
                bottom: 0,
                right: 650,
                height: 120,
                width: 120,
                cursor: "pointer"
            }}
        >
            <img
                draggable="false"
                src={pokemon.image}
                width="100"
                height="100"
            />
        </div>
    );
};

export default PokemonViewer;
