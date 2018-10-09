import React, {Component} from 'react'
import './formCSS.css';
import Button from "@material-ui/core/Button/Button";
import connect from "react-redux/es/connect/connect";
import * as actions from "../../actions";


class FormExampleForm extends Component{
    constructor(props) {
        super(props);
        this.state = this.props.employees.employee;
    }
    componentDidMount() {
        this.props.getAllEmployees();
    }

    changeHandler = (event) => {
        const tName = event.target.name;
        const tValue = event.target.value;
        if (tName === "name") {
            this.setState({ name: tValue });
        } else if (tName === "title") {
            this.setState({ title: tValue });
        } else if (tName === "cell") {
            this.setState({ cell: tValue });
        } else if (tName === "email") {
            this.setState({ email: tValue });
        }
    };

    submitHandler = () => {
        this.props.updateEmployee(this.state);
        this.props.resetEmployeeToEdit();
        this.props.history.push(`/employees`);
    };

    render() {
        return (
            <div>
                <div className="ui fixed borderless inverted menu">
                    <div className="ui container">
                        <a className="header item">Edit employee</a>
                        <div className="right menu">
                            <div className="ui form">
                                <div className="inline fields">
                                    <div className="field">
                                        <div className="ui green button" onClick={() => this.props.history.push(`/employees`)}>
                                            HOME
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui grid massive message">
                    <div className="ui container">
                        <div className="row">
                            <form className="ui form">
                                <div className="two fields">
                                    <div className="field">
                                        <label>Name</label>
                                        <label>{this.state.name}</label>
                                    </div>
                                    <div className="field">
                                        <label>Title</label>
                                        <label>{this.state.title}</label>
                                    </div>
                                </div>
                                <div className="two fields">
                                    <div className="field">
                                        <label>Cell Phone</label>
                                        <input type="text" name="cell" placeholder="Cell Phone" value={this.state.cell} onChange={this.changeHandler}/>
                                    </div>
                                    <div className="field">
                                        <label>Email</label>
                                        <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.changeHandler}/>
                                    </div>
                                </div>
                                <div className="fields">
                                <div className="three wide field">
                                    <label>Save</label>
                                    <Button variant="outlined" onClick={this.submitHandler}>
                                        Save
                                    </Button>
                                </div>
                            </div>
                            </form>
                        </div>
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
        // Action to get all the employees
        getAllEmployees: () => {
            dispatch(actions.getAllEmployees());
        },
        updateEmployee: (obj) => {
            dispatch(actions.updateEmployee(obj));
        },
        resetEmployeeToEdit: () => {
            dispatch(actions.resetEmployeeToEdit());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormExampleForm);