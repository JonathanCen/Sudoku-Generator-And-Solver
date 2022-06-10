import React from "react";
import Grid from '@mui/material/Grid';
import AppTitle from "./AppTitle";
import SudokuGrid from "./SudokuGrid";
import ButtonContainer from './ButtonContainer';
import ContactInfo from "./ContactInfo";

function App() {
    return (
        <Grid container spacing={10}>
            <Grid item xs={12}> <AppTitle /> </Grid>
            <Grid item xs={12} align="center"> <SudokuGrid /> </Grid>
            <Grid item xs={12} align="center"> <ButtonContainer /> </Grid>
            <Grid item xs={12} align="center"> <ContactInfo /> </Grid>
        </Grid>
    );
}

export default App;