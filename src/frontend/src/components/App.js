import React from "react";
import AppTitle from "./AppTitle";
import SudokuGrid from "./SudokuGrid"
// import Grid from "@material-ui/core/Grid";
import Grid from '@mui/material/Grid';

function App() {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <AppTitle />
            </Grid>
            <Grid item xs={12} align="center">
                <SudokuGrid />
            </Grid>
        </Grid>
    );
}

export default App;