import React from "react";
// import { grid } from '@mui/system';
// import { Box } from "@material-ui/core";
// import Box from "@mui/material/Box";

// This is from testing MaterialUI
// import Item from './Item';
// import SudokuGridSubbox from './SudokuGridSubbox';
// import SudokuBox from './SudokuBox';

// 
import SudokuGridRow from './SudokuGridRow';


// function SudokuGrid() {
//     return (
//         <SudokuBox id="sudokuGrid">
//             <Item><SudokuGridSubbox /></Item>
//             <Item><SudokuGridSubbox /></Item>
//             <Item><SudokuGridSubbox /></Item>
//             <Item><SudokuGridSubbox /></Item>
//             <Item><SudokuGridSubbox /></Item>
//             <Item><SudokuGridSubbox /></Item>
//             <Item><SudokuGridSubbox /></Item>
//             <Item><SudokuGridSubbox /></Item>
//             <Item><SudokuGridSubbox /></Item>
//             <Item><SudokuGridSubbox /></Item>
//             <Item><SudokuGridSubbox /></Item>
//             <Item><SudokuGridSubbox /></Item>
//         </SudokuBox>
//     )
// }

function SudokuGrid() {
    return (
        <div id="sudokuGrid">
            <SudokuGridRow id="sudokuGridRow1" className="sudokuGridRow" />
            <SudokuGridRow id="sudokuGridRow2" className="sudokuGridRow" />
            <SudokuGridRow id="sudokuGridRow3" className="sudokuGridRow" />
        </div>
    );
}

function SudokuGrid2() {
    return (
        <div id="sudokuGrid">
            <div id="sudokuGridRow1" className="sudokuGridRow">
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
            <div id="sudokuGridRow2" className="sudokuGridRow">
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
            <div id="sudokuGridRow3" className="sudokuGridRow">
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
        </div>
    )
}

export default SudokuGrid;

