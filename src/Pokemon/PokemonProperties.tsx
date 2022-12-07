import React from "react";
import useDragger from "../hooks/useDragger";

export interface PokemonProps {
    id: string;
    name: string;
    picture: string;
    left: number;
    top: number;
    size: string;
}

export const pokemonCharacters = [
    {
        id: "Bulbasaur",
        name: "Bulbasaur",
        picture: "./001.png",
        draggable: false,
        size: "medium"
    },
    {
        id: "Charizard",
        name: "Charizard",
        picture: "./006.png",
        draggable: false,
        size: "small"
    },
    {
        id: "Eevee",
        name: "Eevee",
        picture: "./133.png",
        draggable: false,
        size: "small"
    },
    {
        id: "Garchomp",
        name: "Garchomp",
        picture: "./445.png",
        draggable: false,
        size: "small"
    },
    {
        id: "Jigglypuff",
        name: "Jigglypuff",
        picture: "./039.png",
        draggable: false,
        size: "small"
    },
    {
        id: "Jolteon",
        name: "Jolteon",
        picture: "./135.png",
        draggable: false,
        size: "small"
    },
    {
        id: "Lucario",
        name: "Lucario",
        picture: "./448.png",
        draggable: false,
        size: "large"
    },
    {
        id: "Nidoking",
        name: "Nidoking",
        picture: ".034/.png",
        draggable: false,
        size: "small"
    },
    {
        id: "pikachu",
        name: "pikachu",
        picture: "./25.png",
        draggable: false,
        size: "small"
    },
    {
        id: "Rattata",
        name: "Rattata",
        picture: "./019.png",
        draggable: false,
        size: "medium"
    },
    {
        id: "Rhydon",
        name: "Rhydon",
        picture: "./112.png",
        draggable: false,
        size: "medium"
    },
    {
        id: "Snorlax",
        name: "Snorlax",
        picture: "./143.png",
        draggable: false,
        size: "large"
    },
    {
        id: "Venusaur",
        name: "Venusaur",
        picture: "./003.png",
        draggable: false,
        size: "small"
    },
    {
        id: "Wartortle",
        name: "Wartortle",
        picture: "./008.png",
        draggable: false,
        size: "medium"
    }
];
