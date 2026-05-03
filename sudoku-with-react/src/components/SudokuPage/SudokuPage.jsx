import SudokuBoard from "../SudokuBoard/SudokuBoard";
import NumberPicker from "../NumberPicker/NumberPicker";
import { generateEasySudoku } from "../../utils";
import { testBoardOne } from "../../testData";
import { useState, useEffect } from "react";
import "./SudokuPage.css";



const SudokuPage = () => {
    let newBoard = generateEasySudoku();
    const [board, setBoard] = useState(newBoard);
    let [value, setValue] = useState(1);
    let [noteMode, setNoteMode] = useState(false);
    let [mistakes, setMistakes] = useState(0);
    let [complete, setComplete] = useState({});
    let [reset, setReset] = useState(true);
    const handleReset = (exchange) => {
        if (exchange) {
            newBoard = generateEasySudoku();
        } 
        setBoard(newBoard);
        setValue(1);
        setNoteMode(false);
        setMistakes(0)
        setReset(true);
    };


    const sudokuProps = {
        board,
        setBoard,
        value,
        setValue,
        noteMode,
        mistakes,
        setMistakes,
        complete,
        setComplete,
        reset,
        setReset,
        handleReset
    };



    useEffect(() => {
        if (mistakes >= 3) {
            setTimeout(() => {
                alert("Too many mistakes, please try again");
                handleReset(false);
            }, 300);
        }
    }, [mistakes]);


    useEffect(() => {
        if (reset) {
            const completeObj = {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                remaining: 81
            };

            for (let i = 0; i < board.length; i++) {
                for (let j = 0; j < board[0].length; j++) {
                    if (board[i][j].value !== 0) {
                        completeObj[board[i][j].value] += 1;
                        completeObj.remaining -= 1;
                    }
                }
            }

            setComplete(completeObj);
            setReset(false);
        };

    }, [reset])


    return (
        <div>
            <section id="board-background">
                <div className="mode-container">
                    <div>{`${mistakes}/3`}</div>
                </div>
            </section>
            <SudokuBoard {...sudokuProps} />

            <section id="board-background">
                <div className="mode-container">
                    <div className={noteMode ? "mode-btn mode-on" : "mode-btn"} onClick={() => setNoteMode(!noteMode)}>
                        {noteMode ? "Notes on" : "Notes off"}
                    </div>
                </div>
            </section>

            <NumberPicker {...sudokuProps} />
        </div>
    )
};

export default SudokuPage;

