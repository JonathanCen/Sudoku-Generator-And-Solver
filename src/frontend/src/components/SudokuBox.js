import React from "react";
// import { grid } from '@mui/system';
// import { Box } from "@material-ui/core";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

function SudokuBox(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                display: "grid",
                columnGap: 0,
                rowGap: 0,
                gridTemplateColumns: "repeat(3, 1fr)"
            }}
            {...other}
        />
    )
}

SudokuBox.propTypes = {
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
        ),
        PropTypes.func,
        PropTypes.object
    ])
}



export default SudokuBox;