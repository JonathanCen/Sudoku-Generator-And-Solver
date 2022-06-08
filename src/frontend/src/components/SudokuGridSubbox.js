import React from 'react';
import SudokuGridSubBoxRow from './SudokuGridSubBoxRow.js';

function SudokuGridSubBox(props) {
    return (
        <div className={props.className}>
            <SudokuGridSubBoxRow className="sudokuGridSubBoxRow" />
            <SudokuGridSubBoxRow className="sudokuGridSubBoxRow" />
            <SudokuGridSubBoxRow className="sudokuGridSubBoxRow" />
        </div>
    )
}

export default SudokuGridSubBox;