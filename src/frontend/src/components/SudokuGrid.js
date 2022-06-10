import React, { useState, useContext } from "react";
import { SudokuContext } from "./SudokuContext";

/*
 * Initalize a blank board for the state.
 * This variable will hold the initial values of very newly generated board
 * -1 will represent blank
 * const initalSudokuBoard = Array(9).fill(Array(9).fill(-1))
 */
const initalSudokuBoard = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
];

// Initialize rows and cols
const arrRows = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const arrCols = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// Creates a deep copy of the input array
function createDeepCopy(arr) {
    return JSON.parse(JSON.stringify(arr));
}

function SudokuGrid(props) {
    // State to hold the state of the sudoku grid
    const [sudokuBoard, setSudokuBoard] = useState(createDeepCopy(initalSudokuBoard));
    const { updateCurrentBoard } = useContext(SudokuContext);

    // Changes the state of the board, whenever user tries to change a cell on the board
    function markCell(e, row, col) {
        const newValue = parseInt(e.target.value), newSudokuBoard = createDeepCopy(sudokuBoard);
        // If the newValue is within the accepted values, then assign it to the cell
        // Otherwise it will set it to a blank cell 
        newSudokuBoard[row][col] = (newValue === -1 || (newValue > 0 && newValue < 10)) ? newValue : -1;
        updateCurrentBoard(newSudokuBoard);
        setSudokuBoard(newSudokuBoard);
    }

    return (
        <table id="sudoku-grid">
            <tbody>
                {
                    arrRows.map((row, rowIndex) => {
                        return <tr id={`row-${row}`} key={rowIndex} >
                            {arrCols.map((col, colIndex) => {
                                return (
                                    <td className="cell-data" key={rowIndex + colIndex}>
                                        <input maxlength="1" className="cell-input"
                                            disabled={initalSudokuBoard[row][col] !== -1}
                                            value={sudokuBoard[row][col] !== -1 ? sudokuBoard[row][col] : ''}
                                            onChange={(e) => markCell(e, row, col)} />
                                    </td>
                                )
                            })}
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default SudokuGrid;

