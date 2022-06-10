import React, { createContext, useState } from "react";

const SudokuContext = createContext();

const SudokuProvider = ({ children }) => {
    const [initialBoard, setInitialBoard] = useState(Array(9).fill(Array(9).fill(-1)));
    const [currentBoard, setCurrentBoard] = useState(Array(9).fill(Array(9).fill(-1)));

    const updateCurrentBoard = (board) => {
        setCurrentBoard(JSON.parse(JSON.stringify(board)));
    }

    const updateInitialBoard = (board) => {
        setInitialBoard(JSON.parse(JSON.stringify(board)));
    }

    return (
        <SudokuContext.Provider value={{ initialBoard, currentBoard, updateCurrentBoard, updateInitialBoard }}>
            {children}
        </SudokuContext.Provider>
    )
}

export { SudokuContext, SudokuProvider };