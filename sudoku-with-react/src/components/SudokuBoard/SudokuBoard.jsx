import { squareCoordinates, noteCoordinates } from "../../testData";
import { useState } from "react";
import "./SudokuBoard.css";






const SudokuBoard = ({ board, setBoard, value, setValue, noteMode, mistakes, setMistakes, complete, setComplete, handleReset}) => {


    const handleMistakes = (valid) => {
        if (!valid) setMistakes(prev => prev += 1);
    };

console.log(complete)
    const handleCellChange = (m, n) => {
        let currValue = value;

        if (complete[value] >= 9 && board[m][n].value === 0) return;  // will not select an empty cell when the current value has 9 locations

        if (noteMode || board[m][n].isGiven || board[m][n].value === board[m][n].solution) {
            if (board[m][n].value !== value && value !== 0) setValue(board[m][n].value);
            return;
        }

        if (board[m][n].value === value) currValue = 0;
        let valid = currValue === 0 || value === board[m][n].solution;
        

        let updatedBoard = board.map((row, rowIdx) =>
            row.map((cell, colIdx) =>
                rowIdx === m && colIdx === n
                    ? { ...cell, 
                        value: currValue,
                        valid,           // When changing a cell we need to ensure that the board will still be solvable
                        }
                    : cell
            )
        );

        if (valid && currValue !== 0) {
            const oldVal = value;
            let newVal = value;
            let solved = complete[oldVal];
            solved++;
            let remaining = complete.remaining;
            remaining--;

            if (solved >= 9) {
                newVal = oldVal + 1 > 9 ? 1 : oldVal + 1;
                while (complete[newVal] >= 9 && complete.remaining > 0) {  // Does not need to loop if there are no possibilities remaining
                    newVal = newVal + 1 > 9 ? 1 : newVal + 1;
                }
            } 

            setComplete(prev => ({
                ...prev,
                [oldVal]: solved,
                remaining,
            }));

            setValue(newVal);
        }

        setBoard(updatedBoard);
        handleMistakes(valid);
    };


    const handleNoteChange = (m, n) => {
        const updatedBoard = board.map((row, rowIdx) =>
            row.map((cell, colIdx) => {
                if (rowIdx === m && colIdx === n) {
                    const newNotes = [...board[m][n].notes]
                    newNotes[value] = !newNotes[value];
                    return { ...cell, notes: newNotes }
                }
                return cell;
            }
            )
        );

        setBoard(updatedBoard);
    };


    return (
        <section id="board-background">
            <div id="board-main-outer">
                <div id="board-main-inner">

                    {complete.remaining > 0 
                    ? <div className="board-squares-container">
                        {squareCoordinates.map((sqRow, sqRowI) => (
                            <div className="board-rows" key={`sqRow-${sqRowI + 1}`}>
                                {sqRow.map((sq, sqI) => (
                                    <div className="board-squares" key={`square-${sqI + 1}`} >
                                        {sq.map((row, rowI) => (
                                            <div className="board-rows" key={`sq-${sqI + 1}-row-${rowI}`} >
                                                {row.map((cell, cI) => {
                                                    let [m, n] = cell;
                                                    let num = board[m][n].value;
                                                    let valid = num === board[m][n].solution;

                                                    if (num > 0) {
                                                        return (
                                                            <div
                                                                className={!valid ? "board-cells number-invalid" : value === num ? "board-cells number-selected" : "board-cells"}
                                                                key={`sq-${sqI + 1}-row-${rowI}-cell-${cI}`}
                                                                onClick={() => handleCellChange(m, n)}
                                                            >
                                                                {num}
                                                            </div>
                                                        )
                                                    } else {
                                                        return (
                                                            <div
                                                                className="edit-board"
                                                                key={`sq-${sqI + 1}-row-${rowI}-cell-${cI}`}
                                                                onClick={() => {
                                                                    if (noteMode) handleNoteChange(m, n);
                                                                    else handleCellChange(m, n)
                                                                }}
                                                            >
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
                    </div>
                    : (
                        <div>
                            <h3>Congradulations!!</h3>
                            <h4>You won! Want to try again?</h4>
                            <div className="new-game-spacing">
                                <div className="restart" onClick={() => handleReset(false)}>Restart</div>
                                <div className="restart" onClick={() => handleReset(true)}>New Game</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
};

export default SudokuBoard;

