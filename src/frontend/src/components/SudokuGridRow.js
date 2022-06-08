import React from 'react';
import SudokuGridSubBox from './SudokuGridSubBox';

function SudokuGridRow(props) {
    const { ...other } = props;
    return (
        <div {...other} >
            <div className="sudokuGridSubBox">
                <div className="sudokuGridSubBoxRows">
                    <div className="sudokuGridSubBoxCols">1.1</div>
                    <div className="sudokuGridSubBoxCols">1.2</div>
                    <div className="sudokuGridSubBoxCols">1.3</div>
                </div>
                <div className="sudokuGridSubBoxRows">
                    <div className="sudokuGridSubBoxCols">1.4</div>
                    <div className="sudokuGridSubBoxCols">1.5</div>
                    <div className="sudokuGridSubBoxCols">1.6</div>
                </div>
                <div className="sudokuGridSubBoxRows">
                    <div className="sudokuGridSubBoxCols">1.7</div>
                    <div className="sudokuGridSubBoxCols">1.8</div>
                    <div className="sudokuGridSubBoxCols">1.9</div>
                </div>
            </div>
            <div className="sudokuGridSubBox">
                <div className="sudokuGridSubBoxRows">
                    <div className="sudokuGridSubBoxCols">1.1</div>
                    <div className="sudokuGridSubBoxCols">1.2</div>
                    <div className="sudokuGridSubBoxCols">1.3</div>
                </div>
                <div className="sudokuGridSubBoxRows">
                    <div className="sudokuGridSubBoxCols">1.4</div>
                    <div className="sudokuGridSubBoxCols">1.5</div>
                    <div className="sudokuGridSubBoxCols">1.6</div>
                </div>
                <div className="sudokuGridSubBoxRows">
                    <div className="sudokuGridSubBoxCols">1.7</div>
                    <div className="sudokuGridSubBoxCols">1.8</div>
                    <div className="sudokuGridSubBoxCols">1.9</div>
                </div>
            </div>
            <div className="sudokuGridSubBox">
                <div className="sudokuGridSubBoxRows">
                    <div className="sudokuGridSubBoxCols">1.1</div>
                    <div className="sudokuGridSubBoxCols">1.2</div>
                    <div className="sudokuGridSubBoxCols">1.3</div>
                </div>
                <div className="sudokuGridSubBoxRows">
                    <div className="sudokuGridSubBoxCols">1.4</div>
                    <div className="sudokuGridSubBoxCols">1.5</div>
                    <div className="sudokuGridSubBoxCols">1.6</div>
                </div>
                <div className="sudokuGridSubBoxRows">
                    <div className="sudokuGridSubBoxCols">1.7</div>
                    <div className="sudokuGridSubBoxCols">1.8</div>
                    <div className="sudokuGridSubBoxCols">1.9</div>
                </div>
            </div>
        </div>
    );
}

export default SudokuGridRow