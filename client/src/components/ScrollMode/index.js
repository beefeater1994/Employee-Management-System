import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import * as actions from '../../actions'
import Scrolling from "../Display/Scrolling";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
    }
    componentDidMount() {
        this.props.getEmployees();
    }

    profileHandler = (el) => {
        this.props.history.push(`/employees/${el._id}`);
        this.props.getOneEmployee(el._id);
    };

    deleteHandler = (id) => {
        this.props.resetScrollCount();
        this.props.deleteEmployee(id);
    };

    modeChangeHandler = () => {
        this.props.goToTableMode()
        this.props.resetScrollCount();
    };

    render() {
        if (this.props.employees.isFetching) {
            return <div>Getting data</div>
        }
        return (
            <div>
                <div className="ui fixed borderless inverted menu">
                    <div className="ui container">
                        <a className="header item">Employee Management System</a>
                        <div className="right menu">
                            <div className="ui buttons">
                                <button className="ui button" onClick={this.modeChangeHandler}>
                                    <i className="icon paper plane outline"></i>
                                    Switch Mode
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
                    <div className="ui container">
                        <Scrolling
                        profileHandler={this.profileHandler}
                        deleteHandler={this.deleteHandler}
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getEmployees: () => {
            dispatch(actions.getAllEmployees());
        },
        deleteEmployee: (id) => {
            dispatch(actions.deleteEmployee(id));
        },
        getOneEmployee: (id) => {
            dispatch(actions.getOneEmployee(id));
        },
        resetScrollCount: ()=> {
            dispatch({type: "RESET_SCROLL_COUNT"});
        },
        goToTableMode: ()=> {
            dispatch({type: "TABLE_MODE"});
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);