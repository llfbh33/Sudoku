import { squareCoordinates, noteCoordinates } from "../../testData";
import { useState } from "react";
import "./SudokuBoard.css";



const SudokuBoard = ({board}) => {

    return (
        <section id="board-background">
            <div id="board-main-outer">
                <div id="board-main-inner">
                    <div className="board-squares-container">
                        {squareCoordinates.map((sqRow, sqRowI) => (
                            <div className="board-rows" key={`sqRow-${sqRowI + 1}`}>
                                {sqRow.map((sq, sqI) => (
                                    <div className="board-squares" key={`square-${sqI + 1}`} >
                                        {sq.map((row, rowI) => (
                                            <div className="board-rows" key={`sq-${sqI + 1}-row-${rowI}`} >
                                                {row.map((cell, cI) => {
                                                    let [m, n] = cell;
                                                    let value = board[m][n].value;

                                                    if (value > 0) {
                                                        return (
                                                            <div 
                                                                className="board-cells" key={`sq-${sqI + 1}-row-${rowI}-cell-${cI}`}>
                                                                {value}
                                                            </div>
                                                        )
                                                    } else {
                                                        return (
                                                            <div className="edit-board" key={`sq-${sqI + 1}-row-${rowI}-cell-${cI}`}>
                                                                {noteCoordinates.map((noteRow, rowIndex) => (
                                                                    <div className="edit-rows" key={`noteRow-${rowIndex}`}>
                                                                        {noteRow.map((note) => {
                                                                            let markNote = board[m][n].notes[note];

                                                                            return (
                                                                                <div className="edit-cells" key={`note-${note}`}>
                                                                                    {markNote ? note : ""}
                                                                                </div>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )
                                                    }
                                                })}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                        {/* <div className="board-rows">

                            <div id="square-1" class="board-squares">
                                <div class="board-rows">
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                                <div class="board-rows">
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                                <div class="board-rows">
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                            </div>

                            <div id="square-2" class="board-squares">
                                <div class="board-rows">
                                    <div class="board-cells">
                                        8
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                                <div class="board-rows">
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                        1
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                                <div class="board-rows">
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                            </div>

                            <div id="square-3" class="board-squares">
                                <div class="board-rows">
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                                <div class="board-rows">
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                                <div class="board-rows">
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                        2
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                            </div>

                        </div> */}
                        {/* <div class="board-rows">

                            <div id="square-4" class="board-squares">
                                <div class="board-rows">
                                    <div class="board-cells">
                                        5
                                    </div>
                                    <div class="board-cells">
                                        6
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                                <div class="board-rows">
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                                <div class="board-rows">
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                        1
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                            </div>

                            <div id="square-5" class="board-squares">
                                <div class="board-rows">
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                        2
                                    </div>
                                    <div class="board-cells">
                                        8
                                    </div>
                                </div>
                                <div class="board-rows">
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                        6
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                                <div class="board-rows">
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                        4
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                            </div>

                            <div id="square-6" class="board-squares">
                                <div class="board-rows">
                                    <div class="board-cells">
                                        9
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                                <div class="board-rows">
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                                <div class="board-rows">
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                        3
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                            </div>

                        </div> */}
                        {/* <div class="board-rows">

                            <div id="square-7" class="board-squares">
                                <div class="board-rows">
                                    <div class="board-cells">
                                        6
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                                <div class="board-rows">
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                        4
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                                <div class="board-rows">
                                    <div class="board-cells">
                                        9
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                            </div>

                            <div id="square-8" class="board-squares">
                                <div class="board-rows">
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                        8
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                                <div class="board-rows">
                                    <div class="board-cells">
                                        3
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                                <div class="board-rows">
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                            </div>

                            <div id="square-9" class="board-squares">
                                <div class="board-rows">
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                                <div class="board-rows">
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                        5
                                    </div>
                                </div>
                                <div class="board-rows">
                                    <div class="board-cells">
                                    </div>
                                    <div class="board-cells">
                                        7
                                    </div>
                                    <div class="board-cells">
                                    </div>
                                </div>
                            </div>

                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default SudokuBoard;

