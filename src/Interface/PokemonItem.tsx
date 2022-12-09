import React from "react";
import useDragger from "../hooks/useDragger";
import { Pokemon } from "./Pokemon";
export interface PokemonProps {
    pokemon: Pokemon;
}
const PokemonItem: React.FC<PokemonProps> = (props) => {
    const { pokemon } = props;
    useDragger(pokemon.name);

    return (
        <div
            id={pokemon.name}
            className={pokemon.name}
            style={{
                position: "absolute",
                left: 300,
                top: 450,
                bottom: 200,
                right: 600,
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

export default PokemonItem;
