import React, { createContext, useState } from "react";

const SudokuContext = createContext();

const SudokuProvider = ({ children }) => {
    // Store the inital board, and the updated board user makes in a seperate state
    const [initialBoard, setInitialBoard] = useState(Array(9).fill(Array(9).fill(-1)));
    const [currentBoard, setCurrentBoard] = useState(Array(9).fill(Array(9).fill(-1)));

    // Allows components to update the state of the inital board
    const updateInitialBoard = (board) => {
        if (typeof (board) === "string") {
            board = JSON.parse(board);
        }
        setInitialBoard(JSON.parse(JSON.stringify(board)), () => {
            console.log(currentBoard);
        });
    }

    // Allows components to update the state of the current board
    const updateCurrentBoard = (board) => {
        if (typeof (board) === "string") {
            board = JSON.parse(board);
            console.log(board)
        }
        setCurrentBoard(JSON.parse(JSON.stringify(board)));
    }

    return (
        <SudokuContext.Provider value={{ initialBoard, currentBoard, updateCurrentBoard, updateInitialBoard }}>
            {children}
        </SudokuContext.Provider>
    )
}

export { SudokuContext, SudokuProvider };