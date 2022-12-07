import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { PopUpSlider } from "./PopUpSlider";
import Lucario from "./Pokemon/Lucario";
import Charizard from "./Pokemon/Charizard";
import Bulbasaur from "./Pokemon/Bulbasaur";
import Snorlax from "./Pokemon/Snorlax";
import Wartortle from "./Pokemon/Wartortle";
import Pikachu from "./Pokemon/Pikachu";
import Rhydon from "./Pokemon/Rhydon";
import Jolteon from "./Pokemon/Jolteon";
import Eevee from "./Pokemon/Eevee";
import Nidoking from "./Pokemon/Nidoking";
import Rattata from "./Pokemon/Rattata";
import Venusaur from "./Pokemon/Venusaur";
import Jigglypuff from "./Pokemon/Jigglypuff";
import Garchomp from "./Pokemon/Garchomp";
import PokemonViewer from "./Pokemon/PokemonViewer";
import { pokemonCharacters, PokemonProps } from "./Pokemon/PokemonProperties";
const pokemonArr = pokemonCharacters.map(
    (pokemon: {
        id: string;
        name: string;
        picture: string;
        draggable: boolean;
        size: string;
    }): PokemonProps => {
        return {
            id: pokemon.id,
            name: pokemon.name,
            picture: pokemon.picture,
            left: 0,
            top: 0,
            size: pokemon.size
        };
    }
);
ReactDOM.render(
    <>
        <div>
            <h3 style={{ textAlign: "center", fontSize: "3rem" }}>
                Welcome to Poke Team Design
            </h3>
            <h4 style={{ textAlign: "center", fontSize: "1rem" }}>
                By Alex Daley, Patrick Harris, Robert Reardon
            </h4>
            <PopUpSlider></PopUpSlider>
        </div>
        <hr></hr>
        <div className="box">
            <h4 style={{ fontSize: "1.6rem" }}> Website Description:</h4>
            <h5 style={{ textAlign: "left", fontSize: "1.0rem" }}>
                Our site is a great way for you to find some of your favorite
                Pokémon as well as choose a cool background image! Click show
                selections to get started!
            </h5>
        </div>
        <React.StrictMode>
            <div
                className="container"
                id="box"
                style={{
                    textAlign: "center"
                }}
            >
                <Charizard />
                <Lucario />
                <Snorlax />
                <Wartortle />
                <Pikachu />
                <Rhydon />
                <Jolteon />
                <Eevee />
                <Nidoking />
                <Rattata />
                <Venusaur />
                <Jigglypuff />
                <Garchomp />
                {<PokemonViewer {...pokemonArr[0]}></PokemonViewer>}
            </div>
        </React.StrictMode>
    </>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: {https://bit.ly/CRA-vitals
reportWebVitals();
