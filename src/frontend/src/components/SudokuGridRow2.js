import React from 'react';
import SudokuGridCol2 from './SudokuGridCol2';

function SudokuGridRow2(props) {
    return (
        <div id={props.id} className={props.className} >
            <SudokuGridCol2 className="sudokuGridSubBox" value="1.1" />
            <SudokuGridCol2 className="sudokuGridSubBox" value="1.2" />
            <SudokuGridCol2 className="sudokuGridSubBox" value="1.3" />
            <SudokuGridCol2 className="sudokuGridSubBox" value="1.4" />
            <SudokuGridCol2 className="sudokuGridSubBox" value="1.5" />
            <SudokuGridCol2 className="sudokuGridSubBox" value="1.6" />
            <SudokuGridCol2 className="sudokuGridSubBox" value="1.7" />
            <SudokuGridCol2 className="sudokuGridSubBox" value="1.8" />
            <SudokuGridCol2 className="sudokuGridSubBox" value="1.9" />
        </div>
    );
}

export default SudokuGridRow2