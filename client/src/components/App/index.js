import React, { Component } from 'react';
import * as actions from '../../actions'
import connect from "react-redux/es/connect/connect";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Route from "react-router-dom/es/Route";
import Form from "../Form";
import Main from "../Main";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path='/employees' render={(props) => <Main {...props}/>}/>
                    <Route path='/create' render={(props) => <Form {...props}/>}/>
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
