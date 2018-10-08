import React, {Component} from 'react'
import './formCSS.css';
import Button from "@material-ui/core/Button/Button";
import { Dropdown } from 'semantic-ui-react'
import connect from "react-redux/es/connect/connect";
import * as actions from "../../actions";

const genderOptions = [
    { key: 'male', text: 'Male', value: 'Male' },
    { key: 'female', text: 'Female', value: 'Female' }
];
const levelOptions= [
    { key: '1', text: '1', value: '1' },
    { key: '2', text: '2', value: '2' },
    { key: '3', text: '3', value: '3' },
    { key: '4', text: '4', value: '4' },
    { key: '5', text: '5', value: '5' },
    { key: '6', text: '6', value: '6' },
    { key: '7', text: '7', value: '7' },
    { key: '8', text: '8', value: '8' },
    { key: '9', text: '9', value: '9' },
];

class FormExampleForm extends Component{
    constructor(props) {
        super(props);
        this.state = {name: "", title: "", gender: "", level: "", cell: "", email: "", manager: {}, dr: []}
    }
    componentDidMount() {
        this.props.getEmployees();
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
        this.props.createEmployee(this.state);
        this.props.history.push(`/employees`);
    };
    managerHandler = (e, { value }) => this.setState({ manager: value });
    genderHandler = (e, { value }) => this.setState({ gender: value });
    levelHandler = (e, { value }) => this.setState({ level: value });
    drHandler = (e, {value}) => {
        this.setState({dr: value});
    };


    render() {
        const managerOptions = this.props.employees.data.filter(el => el.level < this.state.level).map(el => {
            return {
                key: el._id,
                text: el.name,
                value: {
                    id: el._id,
                    name: el.name
                }
            }
        });
        managerOptions.unshift({key: "none", text: "None", value: "None"});
        const drOptions = this.props.employees.data.filter(el => el.level > this.state.level).map(el => {
            return {
                key: el._id,
                text: el.name,
                value: el._id
            }
        });

        return (
            <div>
                <div className="ui fixed borderless inverted menu">
                    <div className="ui container">
                        <a className="header item">Create new employee</a>
                        <div className="right menu">
                            <div className="ui form">
                                <div className="inline fields">
                                    <div className="field">
                                        <div className="ui green button">
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
                                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.changeHandler}/>
                                    </div>
                                    <div className="field">
                                        <label>Gender</label>
                                        <Dropdown placeholder='Select Gender' fluid selection options={genderOptions}
                                                  onChange={this.genderHandler} value={this.state.gender}/>
                                    </div>
                                </div>
                                <div className="two fields">
                                    <div className="field">
                                        <label>Title</label>
                                        <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.changeHandler}/>
                                    </div>
                                    <div className="field">
                                        <label>Level</label>
                                        <Dropdown placeholder='Select Level' fluid selection options={levelOptions}
                                                  onChange={this.levelHandler} value={this.state.level}/>
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
                                <div className="two fields">
                                    <div className="field">
                                        <label>Manager</label>
                                        <Dropdown placeholder='Select Manager' fluid selection options={managerOptions} onChange={this.managerHandler} value={this.state.manager}/>
                                    </div>
                                    <div className="field">
                                        <label>Direct Reports</label>
                                        <Dropdown placeholder='Select Direct Reports' fluid multiple selection options={drOptions} onChange={this.drHandler}/>
                                    </div>
                                </div>
                                <div className="two fields">
                                    <div className="field">
                                        <input
                                            accept="image/*"
                                            style={{display:'none'}}
                                            id="outlined-button-file"
                                            multiple
                                            type="file"
                                        />
                                        <label htmlFor="outlined-button-file">
                                            <Button variant="outlined" component="span">
                                                Upload
                                            </Button>
                                        </label>
                                    </div>
                                    <div className="field">
                                        <Button variant="outlined" onClick={this.submitHandler}>
                                            Submit
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
        getEmployees: () => {
            dispatch(actions.getData());
        },
        createEmployee: (newEmployee) => {
            dispatch(actions.createData(newEmployee));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormExampleForm);