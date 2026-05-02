import SudokuBoard from "../SudokuBoard/SudokuBoard";
import NumberPicker from "../NumberPicker/NumberPicker";
import { testBoardOne } from "../../testData";
import { useState, useEffect } from "react";
import "./SudokuPage.css";



const SudokuPage = () => {
    const [board, setBoard] = useState(testBoardOne);
    let [value, setValue] = useState(1);
    let [noteMode, setNoteMode] = useState(false);
    let [mistakes, setMistakes] = useState(0);
    console.log(mistakes)


useEffect(() => {
    if (mistakes >= 3) {
        

        setTimeout(() => {
            alert("Too many mistakes, please try again");
            setBoard(testBoardOne);
            setMistakes(0);
        }, 300); // 1 second delay (adjust as needed)
    }
}, [mistakes]);

    return (
        <div>
            <section id="board-background">
                <div className="mode-container">
                    <div>{`${mistakes}/3`}</div>
                </div>
            </section>
            <SudokuBoard board={board} setBoard={setBoard} value={value} noteMode={noteMode} mistakes={mistakes} setMistakes={setMistakes}/>

            <section id="board-background">
                <div className="mode-container">
                    <div className={noteMode ? "mode-btn mode-on" : "mode-btn"} onClick={() => setNoteMode(!noteMode)}>
                        {noteMode ? "Notes on" : "Notes off"}
                    </div>
                </div>
            </section>

            <NumberPicker value={value} setValue={setValue}/>
        </div>
    )
};

export default SudokuPage;

