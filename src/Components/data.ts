import { Bulbasaur, Charizard } from "./types";

const bulbasaur: Bulbasaur = {
    id: "col-bulbasaur",
    name: "bulbasaur",
    color: "cadetblue",
    stage: 1,
    src: "./../Pokemon/001.png",
    top: 0,
    left: 0,
    height: 50,
    width: 50
};
const charizard: Charizard = {
    id: "col-bulbasaur",
    name: "charizard",
    color: "cadetblue",
    stage: 1,
    src: "./../Pokemon/006.png",
    top: 0,
    left: 0,
    height: 50,
    width: 50
};

export const pokemon = [bulbasaur, charizard];
