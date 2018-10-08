import React, { Component } from 'react';
import HomePage from '../Display';
import Grid from "@material-ui/core/Grid/Grid";
import SearchAppBar from "../SearchBar";
import * as actions from '../../actions'
import connect from "react-redux/es/connect/connect";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Route from "react-router-dom/es/Route";
import Form from "../Form";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path='/employees' render={() =>
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
                    }/>
                    <Route path='/create' component={Form}/>
                </div>
            </BrowserRouter>
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
