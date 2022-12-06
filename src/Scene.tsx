/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-extra-parens */
import React, { useState, useCallback, useEffect } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import type { Pokemon } from "./Components/types";

import PokemonList from "./Components/PokemonList";
import PokeBoard from "./Components/PokeBoard";

import "./Scene.css";

const Layout = () => {
    const [PokemonOnBoard, setPokemonOnBoard] = useState<Pokemon[]>([]);

    const addToRoomBoard = (item: Pokemon, left: number, top: number) => {
        const newId = `${item.name}${PokemonOnBoard.length + 1}`;
        const newItem = { ...item, id: newId, left: left, top: top };
        const newList = [...PokemonOnBoard, newItem];
        setPokemonOnBoard(newList);
    };

    const removeFromRoomBoard = (id: string) => {
        const newItems = PokemonOnBoard.filter((f) => f.id !== id);
        setPokemonOnBoard(newItems);
    };

    const moveFurniture = useCallback(
        (id, left, top) => {
            const newItems = PokemonOnBoard.map((item) => {
                return item.id === id
                    ? { ...item, top: top, left: left }
                    : item;
            });
            setPokemonOnBoard(newItems);
        },
        [PokemonOnBoard]
    );

    React.useEffect(() => {
        console.log(PokemonOnBoard);
    }, [PokemonOnBoard]);

    return (
        <DndProvider backend={HTML5Backend}>
            <div id="grid">
                <div
                    id="left-menu-container"
                    style={{ backgroundColor: "#2e57b8" }}
                >
                    <Container>
                        <PokemonList />
                    </Container>
                </div>
                <div id="main-board-container">
                    <PokeBoard
                        PokemonOnBoard={PokemonOnBoard}
                        moveFurniture={moveFurniture}
                        addToRoomBoard={addToRoomBoard}
                        removeFromRoomBoard={removeFromRoomBoard}
                    />
                </div>
            </div>
        </DndProvider>
    );
};

export default Layout;
