import React from "react";
/* eslint-disable no-extra-parens */

import type { Pokemon } from "./types";

import { pokemon } from "./data";

import "./styles.css";
import PokemonItem from "./PokemonItem";

const PokemonList = () => {
    return (
        <div id="pokemon-list">
            {pokemon.map((p: Pokemon) => (
                <div key={p.name}>
                    <p className="pokemond-label">
                        {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
                    </p>
                    <PokemonItem item={p} />
                </div>
            ))}
        </div>
    );
};

export default PokemonList;
