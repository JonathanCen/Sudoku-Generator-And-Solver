import React from 'react';

// // For Material UI
// import SudokuBox from './SudokuBox';
// import Item from './Item';

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

/*
// This is Using Material UI
function SudokuGridSubbox() {
    return (
        <SudokuBox className="sudokuBox">
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
            <Item>4</Item>
            <Item>5</Item>
            <Item>6</Item>
            <Item>7</Item>
            <Item>8</Item>
            <Item>9</Item>
        </SudokuBox>
    )
}
*/

export default SudokuGridSubBox;



/*
function SudokuGrid() {
    return (
        <div id="sudokuGrid">
            <div id="sudokuGridCol1" className="sudokuGridCol">
                <div className="sudokuGridSubBox">
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.1</div>
                        <div className="sudokuGridSubBoxRows">1.2</div>
                        <div className="sudokuGridSubBoxRows">1.3</div>
                    </div>
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.4</div>
                        <div className="sudokuGridSubBoxRows">1.5</div>
                        <div className="sudokuGridSubBoxRows">1.6</div>
                    </div>
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.7</div>
                        <div className="sudokuGridSubBoxRows">1.8</div>
                        <div className="sudokuGridSubBoxRows">1.9</div>
                    </div>
                </div>
                <div className="sudokuGridSubBox">
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.1</div>
                        <div className="sudokuGridSubBoxRows">1.2</div>
                        <div className="sudokuGridSubBoxRows">1.3</div>
                    </div>
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.4</div>
                        <div className="sudokuGridSubBoxRows">1.5</div>
                        <div className="sudokuGridSubBoxRows">1.6</div>
                    </div>
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.7</div>
                        <div className="sudokuGridSubBoxRows">1.8</div>
                        <div className="sudokuGridSubBoxRows">1.9</div>
                    </div>
                </div>
                <div className="sudokuGridSubBox">
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.1</div>
                        <div className="sudokuGridSubBoxRows">1.2</div>
                        <div className="sudokuGridSubBoxRows">1.3</div>
                    </div>
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.4</div>
                        <div className="sudokuGridSubBoxRows">1.5</div>
                        <div className="sudokuGridSubBoxRows">1.6</div>
                    </div>
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.7</div>
                        <div className="sudokuGridSubBoxRows">1.8</div>
                        <div className="sudokuGridSubBoxRows">1.9</div>
                    </div>
                </div>
            </div>
            <div id="sudokuGridCol2" className="sudokuGridCol">
                <div className="sudokuGridSubBox">
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.1</div>
                        <div className="sudokuGridSubBoxRows">1.2</div>
                        <div className="sudokuGridSubBoxRows">1.3</div>
                    </div>
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.4</div>
                        <div className="sudokuGridSubBoxRows">1.5</div>
                        <div className="sudokuGridSubBoxRows">1.6</div>
                    </div>
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.7</div>
                        <div className="sudokuGridSubBoxRows">1.8</div>
                        <div className="sudokuGridSubBoxRows">1.9</div>
                    </div>
                </div>
                <div className="sudokuGridSubBox">
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.1</div>
                        <div className="sudokuGridSubBoxRows">1.2</div>
                        <div className="sudokuGridSubBoxRows">1.3</div>
                    </div>
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.4</div>
                        <div className="sudokuGridSubBoxRows">1.5</div>
                        <div className="sudokuGridSubBoxRows">1.6</div>
                    </div>
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.7</div>
                        <div className="sudokuGridSubBoxRows">1.8</div>
                        <div className="sudokuGridSubBoxRows">1.9</div>
                    </div>
                </div>
                <div className="sudokuGridSubBox">
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.1</div>
                        <div className="sudokuGridSubBoxRows">1.2</div>
                        <div className="sudokuGridSubBoxRows">1.3</div>
                    </div>
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.4</div>
                        <div className="sudokuGridSubBoxRows">1.5</div>
                        <div className="sudokuGridSubBoxRows">1.6</div>
                    </div>
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.7</div>
                        <div className="sudokuGridSubBoxRows">1.8</div>
                        <div className="sudokuGridSubBoxRows">1.9</div>
                    </div>
                </div>
            </div>
            <div id="sudokuGridCol3" className="sudokuGridCol">
                <div className="sudokuGridSubBox">
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.1</div>
                        <div className="sudokuGridSubBoxRows">1.2</div>
                        <div className="sudokuGridSubBoxRows">1.3</div>
                    </div>
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.4</div>
                        <div className="sudokuGridSubBoxRows">1.5</div>
                        <div className="sudokuGridSubBoxRows">1.6</div>
                    </div>
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.7</div>
                        <div className="sudokuGridSubBoxRows">1.8</div>
                        <div className="sudokuGridSubBoxRows">1.9</div>
                    </div>
                </div>
                <div className="sudokuGridSubBox">
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.1</div>
                        <div className="sudokuGridSubBoxRows">1.2</div>
                        <div className="sudokuGridSubBoxRows">1.3</div>
                    </div>
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.4</div>
                        <div className="sudokuGridSubBoxRows">1.5</div>
                        <div className="sudokuGridSubBoxRows">1.6</div>
                    </div>
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.7</div>
                        <div className="sudokuGridSubBoxRows">1.8</div>
                        <div className="sudokuGridSubBoxRows">1.9</div>
                    </div>
                </div>
                <div className="sudokuGridSubBox">
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.1</div>
                        <div className="sudokuGridSubBoxRows">1.2</div>
                        <div className="sudokuGridSubBoxRows">1.3</div>
                    </div>
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.4</div>
                        <div className="sudokuGridSubBoxRows">1.5</div>
                        <div className="sudokuGridSubBoxRows">1.6</div>
                    </div>
                    <div className="sudokuGridSubBoxCols">
                        <div className="sudokuGridSubBoxRows">1.7</div>
                        <div className="sudokuGridSubBoxRows">1.8</div>
                        <div className="sudokuGridSubBoxRows">1.9</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
*/