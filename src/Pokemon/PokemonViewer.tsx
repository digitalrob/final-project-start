import React, { FC } from "react";
import useDragger from "../hooks/useDragger";
import { PokemonProps } from "./PokemonProperties";

const PokemonViewer: FC<PokemonProps> = ({
    id,
    name,
    picture,
    size,
    top,
    left
}) => {
    useDragger(id);
    return (
        <div id={id} className={name}>
            <img
                draggable="false"
                src={require("" + picture)}
                width="100px"
                height="100px"
            />
        </div>
    );
};
export default PokemonViewer;
