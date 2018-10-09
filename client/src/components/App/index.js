import React, { Component } from 'react';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Route from "react-router-dom/es/Route";
import Form from "../Form";
import Main from "../Main";
import Edit from "../Edit";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path='/employees' render={(props) => <Main {...props}/>}/>
                    <Route path='/create' render={(props) => <Form {...props}/>}/>
                    <Route path='/edit' render={(props) => <Edit {...props}/>}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
