import React, {Component} from 'react';
import Table from '../Display/index';
import connect from "react-redux/es/connect/connect";
import * as actions from '../../actions'
import Form from "semantic-ui-react/dist/commonjs/collections/Form/Form";
import './main.css';


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
    }

    changeHandler = (event) => {
        this.setState({input: event.target.value});
    };

    submitHandler = (event) => {
        console.log(this.state.input);
        this.props.setAndUseSearch(this.state.input);
        this.setState({input: ""});
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <div className="ui fixed borderless inverted menu">
                    <div className="ui container">
                        <a className="header item">Employee Management System</a>
                        <Form onSubmit={this.submitHandler}>
                            <div className="ui left icon input" >
                                <input type="text" placeholder="Search employees..." value={this.state.input} onChange={this.changeHandler}/>
                                <i className="users icon"></i>
                            </div>
                        </Form>
                        <div className="right menu">
                            <div className="ui buttons">
                                <button className="ui button" onClick={this.props.resetSearch}>
                                    <i className="icon user"></i>
                                    Show All Employee
                                </button>
                                <button className="ui button" onClick={() => this.props.history.push(`/create`)}>
                                    <i className="icon user"></i>
                                    Create New Employee
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui grid massive message">
                    <div>
                        <Table
                            employees={this.props.employees}
                            getEmployees={this.props.getEmployees}
                            search={this.props.search}
                        />
                    </div>
                </div>
                <div className="ui hidden divider"></div>
                <div className="ui container">
                    <div className="ui stackable grid">
                        <div className="row">
                            <div className="column">
                                <div className="ui divider"></div>
                                <footer>
                                    &copy; 2018 Eric Fan
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);