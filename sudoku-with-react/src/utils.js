const validSudoku = (board) => {
    const rows = Array.from({ length: 9 }, () => Array(9).fill(false));
    const cols = Array.from({ length: 9 }, () => Array(9).fill(false));
    const boxes = Array.from({ length: 9 }, () => Array(9).fill(false));

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const value = board[i][j].value;

            if (value !== 0) {
                const num = value - 1;
                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (rows[i][num] || cols[j][num] || boxes[boxIndex][num]) {
                    return false;
                }

                rows[i][num] = true;
                cols[j][num] = true;
                boxes[boxIndex][num] = true;
            }
        }
    }

    return true;
};

const isNumberPlacementValid = (board, targetValue) => {
    return hasNoConflicts(board, targetValue) && hasViableHomes(board, targetValue);
};

// Checks for existing conflicts for the current value
const hasNoConflicts = (board, targetValue) => {
    const rows = new Set();
    const cols = new Set();
    const boxes = new Set();

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col].value !== targetValue) continue;

            const box = Math.floor(row / 3) * 3 + Math.floor(col / 3);

            if (rows.has(row) || cols.has(col) || boxes.has(box)) {
                return false;
            }

            rows.add(row);
            cols.add(col);
            boxes.add(box);
        }
    }

    return true;
};

// Check that every missing box still has a possible spot
// const hasViableHomes = (board, targetValue) => {
//     const rowsWithTarget = new Set();
//     const colsWithTarget = new Set();
//     const boxesWithTarget = new Set();

//     for (let row = 0; row < 9; row++) {
//         for (let col = 0; col < 9; col++) {
//             if (board[row][col].value === targetValue) {
//                 rowsWithTarget.add(row);
//                 colsWithTarget.add(col);
//                 boxesWithTarget.add(Math.floor(row / 3) * 3 + Math.floor(col / 3));
//             }
//         }
//     }

//     for (let box = 0; box < 9; box++) {
//         if (boxesWithTarget.has(box)) continue;

//         let hasPossibleCell = false;

//         const startRow = Math.floor(box / 3) * 3;
//         const startCol = (box % 3) * 3;

//         for (let row = startRow; row < startRow + 3; row++) {
//             for (let col = startCol; col < startCol + 3; col++) {
//                 const cellIsEmpty = board[row][col].value === 0;
//                 const rowIsAvailable = !rowsWithTarget.has(row);
//                 const colIsAvailable = !colsWithTarget.has(col);

//                 if (cellIsEmpty && rowIsAvailable && colIsAvailable) {
//                     hasPossibleCell = true;
//                 }
//             }
//         }

//         if (!hasPossibleCell) return false;
//     }

//     return true;
// };

const getBoxIndex = (row, col) => {
    return Math.floor(row / 3) * 3 + Math.floor(col / 3);
};


const hasViableHomes = (board, targetValue) => {
    const rowsWithTarget = new Set();
    const colsWithTarget = new Set();
    const boxesWithTarget = new Set();

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col].value === targetValue) {
                rowsWithTarget.add(row);
                colsWithTarget.add(col);
                boxesWithTarget.add(getBoxIndex(row, col));
            }
        }
    }

    const canPlaceTargetAt = (row, col) => {
        return (
            board[row][col].value === 0 &&
            !rowsWithTarget.has(row) &&
            !colsWithTarget.has(col) &&
            !boxesWithTarget.has(getBoxIndex(row, col))
        );
    };

    // Check every row that still needs this number
    for (let row = 0; row < 9; row++) {
        if (rowsWithTarget.has(row)) continue;

        let hasSpot = false;

        for (let col = 0; col < 9; col++) {
            if (canPlaceTargetAt(row, col)) hasSpot = true;
        }

        if (!hasSpot) return false;
    }

    // Check every column that still needs this number
    for (let col = 0; col < 9; col++) {
        if (colsWithTarget.has(col)) continue;

        let hasSpot = false;

        for (let row = 0; row < 9; row++) {
            if (canPlaceTargetAt(row, col)) hasSpot = true;
        }

        if (!hasSpot) return false;
    }

    // Check every box that still needs this number
    for (let box = 0; box < 9; box++) {
        if (boxesWithTarget.has(box)) continue;

        let hasSpot = false;

        const startRow = Math.floor(box / 3) * 3;
        const startCol = (box % 3) * 3;

        for (let row = startRow; row < startRow + 3; row++) {
            for (let col = startCol; col < startCol + 3; col++) {
                if (canPlaceTargetAt(row, col)) hasSpot = true;
            }
        }

        if (!hasSpot) return false;
    }

    return true;
};






















/*----------IN USE----------- */

// Creates an empty sudoku board
const createEmptyGrid = () => {
    return Array.from({ length: 9 }, () => Array(9).fill(0));
};

// Shuffles the elements within an array
const shuffle = (arr) => {
    const copy = [...arr];

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
};

// Determins if the board will be solvable if the specified num is located at the row/col provided
const isValidPlacement = (board, row, col, num) => {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num) return false;
        if (board[i][col] === num) return false;
    }

    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;

    for (let r = boxRow; r < boxRow + 3; r++) {
        for (let c = boxCol; c < boxCol + 3; c++) {
            if (board[r][c] === num) return false;
        }
    }

    return true;
};

// Completly fills a blank sudoku board
const fillBoard = (board) => {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] !== 0) continue;

            const nums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);

            for (const num of nums) {
                if (isValidPlacement(board, row, col, num)) {
                    board[row][col] = num;

                    if (fillBoard(board)) return true;

                    board[row][col] = 0;
                }
            }

            return false;
        }
    }
    return true;
};


// Builds a completion object fot a specific board
export const buildCompleteObj = (boardData) => {
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

    for (let i = 0; i < boardData.length; i++) {
        for (let j = 0; j < boardData[0].length; j++) {
            if (boardData[i][j].value !== 0) {
                completeObj[boardData[i][j].value] += 1;
                completeObj.remaining -= 1;
            }
        }
    }

    return completeObj;
};


const removals = {
    beginner: 30, // 51 givens
    easy: 40,     // 41 givens
    medium: 46,   // 35 givens
    hard: 54      // 27 givens
};


// Assembles board and completion tracking object to send to app
export const generateSudoku = (level) => {
    const solvedBoard = createEmptyGrid();

    fillBoard(solvedBoard);

    const cellsToRemove = removals[level];                  // Determins the amount of cells to remove based on dificulty level
    const puzzleBoard = solvedBoard.map(row => [...row]);

    const positions = shuffle(                              // generates 81 row and column options for removal
        Array.from({ length: 81 }, (_, i) => ({
            row: Math.floor(i / 9),
            col: i % 9,
        }))
    );

    for (let i = 0; i < cellsToRemove; i++) {               // Removes Specified amount of cells based on the shuffled array up to level difficulty removal
        const { row, col } = positions[i];
        puzzleBoard[row][col] = 0;
    }

    const resultBoard = puzzleBoard.map((row, rowIndex) =>  // map in necessary data for each cell
        row.map((value, colIndex) => ({
            value,
            isGiven: value !== 0,
            notes: Array(10).fill(false),
            solution: solvedBoard[rowIndex][colIndex],
        }))
    );

    const complete = buildCompleteObj(resultBoard);         // generate a completion object for the generated board

    return {puzzleBoard: resultBoard, completeObj: complete};
};