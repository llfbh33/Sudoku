import SudokuBoard from "../SudokuBoard/SudokuBoard";
import NumberPicker from "../NumberPicker/NumberPicker";
import { testBoardOne } from "../../testData";
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
        <div>
            <SudokuBoard board={board} />
            <NumberPicker value={value} setValue={setValue}/>
        </div>
    )
};

export default SudokuPage;

