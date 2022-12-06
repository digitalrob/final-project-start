/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback, useEffect } from "react";
import { useDrop, DragSourceMonitor, DragObjectWithType } from "react-dnd";
import PokemonList from "./PokemonList";
import type { Pokemon } from "./types";

import "./styles.css";
import PokemonItem from "./PokemonItem";

interface RoomBoardProps {
    PokemonOnBoard: Pokemon[];
    moveFurniture: (id: string, top: number, left: number) => void;
    addToRoomBoard: (item: Pokemon, top: number, left: number) => void;
    removeFromRoomBoard: (id: string) => void;
}

const PokeBoard = ({
    PokemonOnBoard,
    moveFurniture,
    addToRoomBoard,
    removeFromRoomBoard
}: RoomBoardProps) => {
    const [, drop] = useDrop({
        accept: "Pokemon",
        drop(item: unknown, monitor) {
            const i = item as Pokemon;
            const delta = monitor.getDifferenceFromInitialOffset() as {
                x: number;
                y: number;
            };

            const left = Math.round(i.left + delta.x);
            const top = Math.round(i.top + delta.y);

            if (i.id.includes("menu")) {
                addToRoomBoard(i, left, top);
            } else {
                moveFurniture(i.id, left, top);
            }
            return null;
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    });

    return (
        <div id="room-board">
            <div ref={drop} id="room">
                {PokemonOnBoard.map((p: Pokemon) => (
                    <PokemonItem
                        removeFromRoomBoard={removeFromRoomBoard}
                        key={p.id}
                        item={p}
                    />
                ))}
            </div>
        </div>
    );
};

export default PokeBoard;
