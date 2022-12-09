import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BDropDown } from "./BackgroundDD";
import { Pokemon } from "./Interface/Pokemon";
import PokemonList from "./Interface/PokemonList";
import { PopUpSlider } from "./PopUpSlider";

const Layout = () => {
    //const [pokemonOnBoard, setPokemonOnBoard] = useState<Pokemon[]>([]);
    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                <h3 style={{ textAlign: "center", fontSize: "3rem" }}>
                    Welcome to Poke Team Design
                </h3>
                <h4 style={{ textAlign: "center", fontSize: "1rem" }}>
                    By Alex Daley, Patrick Harris, Robert Reardon
                </h4>
            </div>
            <PopUpSlider></PopUpSlider>
            <hr></hr>
            <div className="box">
                <h4 style={{ fontSize: "1.6rem" }}> Website Description:</h4>
                <h5 style={{ textAlign: "left", fontSize: "1.0rem" }}>
                    Our site is a great way for you to find some of your
                    favorite Pokémon as well as choose a cool background image!
                    Click show selections to get started!
                </h5>
            </div>
            <div
                className="container"
                id="box"
                style={{
                    textAlign: "center"
                }}
            >
                <PokemonList></PokemonList>
            </div>
        </DndProvider>
    );
};
export default Layout;
