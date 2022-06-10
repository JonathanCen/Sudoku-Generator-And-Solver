import React from "react";
import AppTitle from "./AppTitle";
import SudokuGrid from "./SudokuGrid";
import ContactInfo from "./ContactInfo";
// import Grid from "@material-ui/core/Grid";
import Grid from '@mui/material/Grid';
import ButtonContainer from './ButtonContainer';

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