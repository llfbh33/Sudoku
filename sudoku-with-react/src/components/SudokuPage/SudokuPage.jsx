import { testBoardOne, squareCoordinates, noteCoordinates } from "../../testData";
import { useState } from "react";
import "./SudokuPage.css";



const SudokuPage = () => {
    const [board, setBoard] = useState(testBoardOne);
    let [value, setValue] = useState(0);


    const handleCellChange = (m, n, value) => {
        const updateBoard = [...board];
        updateBoard[m][n].value = value;
        setBoard(updateBoard);
    };


    return (
        <section id="board-background">
            <div id="board-main-outer">
                <div id="board-main-inner">
                    <div class="board-squares-container">
                        {squareCoordinates.map((sqRow, sqRowIndex) => (
                            <div class="board-rows" key={`sqRow-${sqRowIndex + 1}`} id={`sqRow-${sqRowIndex + 1}`}>
                                {sqRow.map((sq, sqIndex) => (
                                    <div class="board-squares" key={`square-${sqIndex + 1}`} id={`square-${sqIndex + 1}`} >
                                        {sq.map((row, rowIndex) => (
                                            <div class="board-rows" key={`sqRow-${rowIndex + 1}`} id={`sqRow-${rowIndex + 1}`}>
                                                {row.map((cell, index) => {
                                                    let [m, n] = cell;
                                                    let value = board[m][n].value;

                                                    if (value > 0) {
                                                        return (
                                                            <div 
                                                                class="board-cells" key={`cell-${index}`} id={`cell-${index}`}>
                                                                {value}
                                                            </div>
                                                        )
                                                    } else {
                                                        return (
                                                            <div class="edit-board">
                                                                {noteCoordinates.map((row, rowIndex) => (
                                                                    <div class="edit-rows" key={`note-${rowIndex}`}>
                                                                        {row.map((note) => {
                                                                            let markNote = board[m][n].notes[note];

                                                                            return (
                                                                                <div class="edit-cells">
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
                        {/* <div class="board-rows">

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

export default SudokuPage;



/*

with JavaScript, switch between two div options 
                                only has class of edit-board, edit-rows & edit-cells when no value exists 
                                <div class="edit-board">
                                    <div class="edit-rows">
                                        <div class="edit-cells">
                                            1
                                        </div>
                                        <div class="edit-cells">
                                            2
                                        </div>
                                        <div class="edit-cells">
                                            3
                                        </div>
                                    </div>
                                    <div class="edit-rows">
                                        <div class="edit-cells">
                                            4
                                        </div>
                                        <div class="edit-cells">
                                        </div>
                                        <div class="edit-cells">
                                        </div>
                                    </div>
                                    <div class="edit-rows">
                                        <div class="edit-cells">
                                            7
                                        </div>
                                        <div class="edit-cells">
                                        </div>
                                        <div class="edit-cells">
                                        </div>
                                    </div>
                                </div>
                                <div class="edit-board">
                                    <div class="edit-rows">
                                        <div class="edit-cells">
                                        </div>
                                        <div class="edit-cells">
                                            2
                                        </div>
                                        <div class="edit-cells">
                                            3
                                        </div>
                                    </div>
                                    <div class="edit-rows">
                                        <div class="edit-cells">
                                        </div>
                                        <div class="edit-cells">
                                            5
                                        </div>
                                        <div class="edit-cells">
                                        </div>
                                    </div>
                                    <div class="edit-rows">
                                        <div class="edit-cells">
                                            7
                                        </div>
                                        <div class="edit-cells">
                                        </div>
                                        <div class="edit-cells">
                                            9
                                        </div>
                                    </div>
                                </div>
                                <div class="edit-board">
                                    <div class="edit-rows">
                                        <div class="edit-cells">
                                            1
                                        </div>
                                        <div class="edit-cells">
                                            2
                                        </div>
                                        <div class="edit-cells">
                                            3
                                        </div>
                                    </div>
                                    <div class="edit-rows">
                                        <div class="edit-cells">
                                            4
                                        </div>
                                        <div class="edit-cells">
                                            5
                                        </div>
                                        <div class="edit-cells">
                                            6
                                        </div>
                                    </div>
                                    <div class="edit-rows">
                                        <div class="edit-cells">
                                            7
                                        </div>
                                        <div class="edit-cells">
                                        </div>
                                        <div class="edit-cells">
                                            9
                                        </div>
                                    </div>
                                </div>
                                */