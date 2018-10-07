import React, { Component } from 'react';
import HomePage from '../Display';
import Details from '../Details';
import Report from '../Report';
import Grid from "@material-ui/core/Grid/Grid";
import SearchAppBar from "../SearchBar";
import * as actions from '../../actions'
import connect from "react-redux/es/connect/connect";

class App extends Component {
    render() {
        return (
            <Grid container justify="center" alignItems="center" width='100%'>
                <SearchAppBar
                    setAndUseSearch={this.props.setAndUseSearch}
                    resetSearch={this.props.resetSearch}
                />
                <HomePage
                    employees={this.props.employees}
                    getEmployees={this.props.getEmployees}
                    search={this.props.search}
                />
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        employees: state.employees,
        search: state.search
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // Action to get all the employees
        getEmployees: () => {
            dispatch(actions.getData());
        },
        setAndUseSearch: (text) => {
            dispatch(actions.setAndUseSearch(text));
        },
        resetSearch: () => {
            dispatch(actions.resetSearch());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
