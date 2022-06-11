import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { SudokuContext } from "./SudokuContext";

function BoardStatus(props) {
    const { boardStatus } = useContext(SudokuContext);

    return (
        <Typography
            component="h5"
            variant="h5"
            sx={{
                fontWeight: 300,
                fontSize: "25px"
            }}
        >
            {boardStatus}
        </Typography>
    )
}

export default BoardStatus;