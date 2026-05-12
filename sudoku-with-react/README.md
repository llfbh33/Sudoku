# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


npm install react-router-dom
npm install react-icons --save


## Sudoku App – Development Progress
- Built a responsive Sudoku board using HTML/CSS to validate layout and scaling across screen sizes
- Initialized a React application with Vite and integrated the board into a component-based structure
- Designed initial data models:
- testBoard for seed data
- boardCoordinates to represent grid structure
- Refactored board structure into nested arrays to align with grid rendering logic and enable efficient iteration with nested mapping
- Implemented dynamic board rendering using nested .map() loops to generate rows and cells
- Developed a responsive Number Picker component for user input
- Structured page layout with a parent SudokuPage component to manage and compose game elements
- Introduced React state management for:
    - Current board state
    - User-selected number
- Added interactive UI feedback:
- Highlighting selected numbers across both the board and number picker
- Designed squareCoordinates structure to support rendering and positioning of candidate notes within each cell
- Implemented conditional rendering of notes vs. cell values
- Ensured stable rendering by assigning unique keys across all nested mapped elements
- Built core interaction handlers:
    - cellChange for updating cell values (with logic for toggling values)
    - noteChange for adding/removing candidate notes
- Integrated interaction logic into the UI with conditional access based on game rules (e.g., preventing edits on given cells, switching between value and notes modes)
- Identified and debugging edge cases:
    - cellChange not updating correctly when notes are enabled
    - Preventing modification of pre-filled (given) cells
- Introduced a `valid` property on each cell to track correctness of user input
- Implemented dynamic validation logic to update cell validity in real time as users modify values
- Explored full-board validation on each interaction, but identified performance and complexity concerns
- Refactored validation strategy to compare user input against a predefined solution
- Redesigned cell data structure to include a `solution` property, enabling direct value-to-solution comparison and simplifying validation logic
- Implemented a centralized tracking object to monitor the count of each number (1–9) on the board and remaining placements
- Used this tracking to disable number selection when the maximum count is reached, improving UX and preventing invalid input
- Added board reset functionality to restore the game to its initial state
- Introduced a mistake tracking system:
    - Increments on incorrect user input
    - Triggers a reset prompt after 3 mistakes
    - Integrates with board reset logic to restart gameplay
- Refactored the board reset function to reset the current board or produce a new board
- Added a refresh button for users who are stuck
- Set the current number to change to the next available number is all nine values are present on the board
- Added help shaddows on horizontal and vertical cells
    - need to refactor, a little janky