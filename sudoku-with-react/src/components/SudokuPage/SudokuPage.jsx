import SudokuBoard from "../SudokuBoard/SudokuBoard";
import NumberPicker from "../NumberPicker/NumberPicker";
import { buildCompleteObj, generateSudoku } from "../../utils";
import { testBoardOne } from "../../testData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { VscDebugRestart } from "react-icons/vsc";
import { FaPause } from "react-icons/fa";
import "./SudokuPage.css";



const SudokuPage = () => {
    const {type} = useParams();
    const [game, setGame] = useState(() => generateSudoku(type));

    const [startingBoard, setStartingBoard] = useState(game.puzzleBoard)
    const [board, setBoard] = useState(game.puzzleBoard);
    const [complete, setComplete] = useState(game.completeObj);

    const [value, setValue] = useState(1);
    const [noteMode, setNoteMode] = useState(false);
    const [mistakes, setMistakes] = useState(0);
    const [time, setTime] = useState(0);
    const [formattedTime, setFormattedTime] = useState("0:00");
    const [isRunning, setIsRunning] = useState(true);
    const [selectedCell, setSelectedCell] = useState(null);


    // Resets the board with either old or new board data
    const handleReset = (exchange) => {  // has to be invoked when being called or exchange is the event
        setTime(0);
        setFormattedTime("0:00");

        
        if (exchange) {                             // starting a new game
            const newBoard = generateSudoku(type);

            setStartingBoard(newBoard.puzzleBoard);
            setBoard(newBoard.puzzleBoard);
            setComplete(newBoard.completeObj);
        } else {
            setBoard(startingBoard);                // resetting the old game
            setComplete(buildCompleteObj(startingBoard));
        }
        setValue(1);
        setNoteMode(false);
        setMistakes(0)
        setSelectedCell(null);
        setIsRunning(true);
    };

    const handlePause = () => {
        setIsRunning(prev => !prev);
    }

    const sudokuProps = {
        board,
        setBoard,
        value,
        setValue,
        formattedTime,
        noteMode,
        mistakes,
        setMistakes,
        complete,
        setComplete,
        handleReset,
        isRunning,
        handlePause,
        type,
        selectedCell,
        setSelectedCell,
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
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setTime(prev => {
                    const newTime = prev + 1;

                    const minutes = Math.floor(newTime / 60);
                    const seconds = newTime % 60;

                    const formatted = `${minutes}:${seconds
                        .toString()
                        .padStart(2, "0")}`;

                    setFormattedTime(formatted);

                    return newTime;
                });
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    useEffect(() => {
        if (complete.remaining <= 0) {
            setIsRunning(prev => !prev);
        }
    }, [complete])




    return (
        <div>
            <section id="board-background">
                <div className="mistake-container">
                    <div className="icon-button-container">
                        <VscDebugRestart className="icon-button" onClick={() => handleReset()} />
                        <FaPause className="icon-button" onClick={() => handlePause()} />
                        <div>{formattedTime}</div>
                        <div>{`${type.charAt(0).toUpperCase() + type.slice(1)}`}</div>
                    </div>
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

