/* eslint-disable no-extra-parens */
import React from "react";
import { PokemonList } from "./data";
import { Pokemon } from "./Pokemon";
import PokemonViewer from "./PokemonItem";

const PokemonListView = () => {
    return (
        <div id="Pokemon-List">
            {PokemonList.map((p: Pokemon) => (
                <div key={p.name}>
                    <PokemonViewer pokemon={p}></PokemonViewer>
                </div>
            ))}
        </div>
    );
};

export default PokemonListView;
