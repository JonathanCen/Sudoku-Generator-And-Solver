import React from "react";
import SudokuGridRow from './SudokuGridRow';

function SudokuGrid() {
    return (
        <div id="sudokuGrid">
            <SudokuGridRow id="sudokuGridRow1" className="sudokuGridRow" />
            <SudokuGridRow id="sudokuGridRow2" className="sudokuGridRow" />
            <SudokuGridRow id="sudokuGridRow3" className="sudokuGridRow" />
        </div>
    );
}

export default SudokuGrid;

