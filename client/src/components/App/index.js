import React, { Component } from 'react';
import HomePage from '../Display';
import Details from '../Details';
import Report from '../Report';
import Grid from "@material-ui/core/Grid/Grid";
import PrimarySearchAppBar from "../Display/SearchBar";

class App extends Component {
    render() {
        return (
            <Grid container justify="center" alignItems="center" width='100%'>
                <PrimarySearchAppBar />
                <HomePage  />
            </Grid>
        )
    }
}

export default App;
