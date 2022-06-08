import React from 'react';
import SudokuGridSubBoxCol from './SudokuGridSubBoxCol';

function SudokuGridSubBoxRow(props) {
    return (
        <div className={props.className}>
            <SudokuGridSubBoxCol className="sudokuGridSubBoxCol">1.1</SudokuGridSubBoxCol>
            <SudokuGridSubBoxCol className="sudokuGridSubBoxCol">1.2</SudokuGridSubBoxCol>
            <SudokuGridSubBoxCol className="sudokuGridSubBoxCol">1.3</SudokuGridSubBoxCol>
        </div>
    );
}

export default SudokuGridSubBoxRow;