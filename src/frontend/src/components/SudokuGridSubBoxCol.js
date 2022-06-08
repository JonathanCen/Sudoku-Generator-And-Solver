import React from "react";

function SudokuGridSubBoxCol(props) {
    return (<div className={props.className}>{props.children}</div>);
}

export default SudokuGridSubBoxCol;