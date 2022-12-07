import React, { useState } from "react";
import Pic from "./Pic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";
import PokeballPic from "./Pokemon/pokeball.png";
import { Container, Row, Col } from "react-bootstrap";

const renderPiece = (x: number, y: number, [picX, picY]: [number, number]) => {
    if (x === picX && y === picY) {
        return <Pic />;
    }
};

const renderSquare = (i: number, picPosition: [number, number]) => {
    const x = i;
    const y = 0;

    return (
        <div key={i} style={{ width: "50%", height: "100%" }}>
            <BoardSquare x={x} y={y}>
                {renderPiece(x, y, picPosition)}
            </BoardSquare>
        </div>
    );
};

type BoardProps = {
    picPosition: [number, number];
};

const Board: React.FC<BoardProps> = (props) => {
    const { picPosition } = props;
    const squares = [];
    for (let i = 0; i < 1; i++) {
        squares.push(renderSquare(i, picPosition));
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <div
                style={{
                    width: "200%",
                    height: "200%",
                    display: "flex"
                }}
            >
                {squares}
            </div>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <img
                                id="Pokeball"
                                style={{
                                    width: "300px",
                                    height: "650px",
                                    marginRight: "20px",
                                    marginLeft: "20px",
                                    marginTop: "20px",
                                    float: "left",
                                    backgroundImage: `url(${PokeballPic})`,
                                    backgroundSize: "contain"
                                }}
                            ></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </DndProvider>
    );
};

export default Board;
