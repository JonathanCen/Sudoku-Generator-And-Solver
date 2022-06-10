import React from "react";
import Input from '@mui/material/Input';
import TextField from "@mui/material/TextField";

const subBoxInputProps = {
    maxlength: 1,
    type: "text",
    pattern: "[0-9]*"
};

// Add disable functionality

function SudokuGridCol2(props) {
    const { className } = props;
    return (
        <input class="sudokuGridSubBox">
        </input>

        // <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxlength: 1 }}>

        // </TextField>
    );
}

export default SudokuGridCol2;