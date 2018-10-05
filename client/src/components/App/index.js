import React, { Component } from 'react';
import HomePage from '../HomePage';
import Details from '../Details';
import Report from '../Report';
import Grid from "@material-ui/core/Grid/Grid";

class App extends Component {
    render() {
        return (
            <Grid container justify="center" alignItems="center" width='100%'>
                <HomePage  />
            </Grid>
        )
    }
}

export default App;
