import React from 'react';
import SudokuGridSubBox from './SudokuGridSubBox';

function SudokuGridRow(props) {
    return (
        <div id={props.id} className={props.className} >
            <SudokuGridSubBox className="sudokuGridSubBox" />
            <SudokuGridSubBox className="sudokuGridSubBox" />
            <SudokuGridSubBox className="sudokuGridSubBox" />
        </div>
    );
}

export default SudokuGridRow