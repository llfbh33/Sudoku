import SudokuBoard from "../SudokuBoard/SudokuBoard";
import NumberPicker from "../NumberPicker/NumberPicker";
import { testBoardOne } from "../../testData";
import { useState } from "react";
import "./SudokuPage.css";



const SudokuPage = () => {
    const [board, setBoard] = useState(testBoardOne);
    let [value, setValue] = useState(0);
    let [noteMode, setNoteMode] = useState(false);




    return (
        <div>
            <SudokuBoard board={board} setBoard={setBoard} value={value} noteMode={noteMode} />

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

