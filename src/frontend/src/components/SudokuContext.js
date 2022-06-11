import React, { createContext, useState } from "react";

const status = [
    // Default message
    "Generate or edit your own board!",

    // Generate board message
    "Generating board...",
    "Board generated!",

    // Solve sudoku
    "Solving board...",
    "Board solved!",

    // Editing board
    "Editing board...",
    "Checking board is solvable...",
    "Edited board is invalid! Please remove some entries!",
    "Board editted!",

    // Validate sudoku
    "Validating sudoku...",
    "Sudoku is incorrect!",
    "Sudoku is correct! Congrats!",

    // Clear board
    "Clearing board...",
    "Board cleared!"
]

const SudokuContext = createContext();

const SudokuProvider = ({ children }) => {
    // Store the inital board, and the updated board user makes in a seperate state
    const [edittingSudoku, setEdittingSudoku] = useState(false);
    const [generatingSudoku, setGeneratingSudoku] = useState(false);
    const [boardStatus, setboardStatus] = useState(status[0]);
    const [initialBoard, setInitialBoard] = useState(Array(9).fill(Array(9).fill(-1)));
    const [currentBoard, setCurrentBoard] = useState(Array(9).fill(Array(9).fill(-1)));

    // Allows components to update the state of the inital board
    const updateInitialBoard = (board) => {
        if (typeof (board) === "string") {
            board = JSON.parse(board);
        }
        setInitialBoard(JSON.parse(JSON.stringify(board)));
    }

    // Allows components to update the state of the current board
    const updateCurrentBoard = (board) => {
        if (typeof (board) === "string") {
            board = JSON.parse(board);
        }
        setCurrentBoard(JSON.parse(JSON.stringify(board)));
    }

    // Allow components to update the state of the board status
    const updateBoardStatus = (statusCode) => {
        setboardStatus(status[statusCode]);
    }

    // Allow components to update the edit board state
    const updateEdittingSudoku = () => {
        setEdittingSudoku(!edittingSudoku)
    }

    const updateGeneratingSudoku = () => {
        setGeneratingSudoku(!generatingSudoku)
    }

    return (
        <SudokuContext.Provider
            value={{
                generatingSudoku, updateGeneratingSudoku, edittingSudoku, updateEdittingSudoku,
                boardStatus, updateBoardStatus, initialBoard, currentBoard, updateCurrentBoard,
                updateInitialBoard
            }}>
            {children}
        </SudokuContext.Provider>
    )
}

export { SudokuContext, SudokuProvider };