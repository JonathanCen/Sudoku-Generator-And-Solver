import React from "react";
import Typography from "@mui/material/Typography";

function AppTitle() {
    return (
        <Typography
            component="h4"
            variant="h4"
            id="app-title-container"
        >
            <a id="app-title" href="http://127.0.0.1:8000/">Sudoku Generator and Solver</a>
        </Typography>
    )
}

export default AppTitle