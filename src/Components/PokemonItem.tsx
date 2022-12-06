/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, ReactDOM } from "react";
import { useDrag } from "react-dnd";

import type { Pokemon } from "./types";

interface PokemonItemProps {
    item: Pokemon;
    removeFromRoomBoard?: (id: string) => void;
}

const PokemonItem = ({ item, removeFromRoomBoard }: PokemonItemProps) => {
    const { id, name, stage, color, top, left } = item;
    const [position, setPosition] = useState({ top: top, left: left });

    useEffect(() => {
        const elem = document.getElementById(item.id)?.getBoundingClientRect();
        const t = elem ? elem.y : 0;
        const l = elem ? elem.x : 0;
        setPosition({ top: t, left: l });
    }, []);

    const [{ isDragging }, drag] = useDrag({
        item: {
            type: "Furniture",
            id,
            name,
            left: id.includes("menu") ? position.left : left,
            top: id.includes("menu") ? position.top : top,
            color
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    const styles: Record<string, unknown> = {
        position: id.includes("menu") ? "static" : "absolute",
        left,
        top,
        backgroundColor: color,
        margin: 0
    };

    return (
        <div className="div">
            <div
                id={item.id}
                style={styles}
                ref={drag}
                className={item.name}
            ></div>
        </div>
    );
};

export default PokemonItem;
