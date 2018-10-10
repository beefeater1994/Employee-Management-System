import React, {Component} from 'react';
import * as actions from "../../actions";
import connect from "react-redux/es/connect/connect";
import Button from "@material-ui/core/Button/Button";
import EditIcon from "../Display/UI/EditIcon";

class Profile extends Component {
    componentDidMount() {
        this.props.getOneEmployee(this.props.match.params.id);
    }

    editHandler = (obj) => {
        this.props.setEmployeeToEdit(obj);
        this.props.history.push(`/edit/${obj._id}`);
    };


    render() {
        if (this.props.employees.profile === undefined) {
            return <div>Loading Data</div>
        } else {
            const profile = this.props.employees.profile;
            let avatarUrl = "";
            if (profile.avatar !== "Icon") {
                avatarUrl = "http://localhost:4000/" + profile.avatar;
            } else {
                if (profile.gender === "Male") {
                    avatarUrl = "http://localhost:4000/defaultMale.png";
                } else {
                    avatarUrl = "http://localhost:4000/defaultFemale.png";
                }
            }
            return (
                <div>
                    <div className="ui fixed borderless inverted menu">
                        <div className="ui container">
                            <a className="header item">{profile.name}'s Profile</a>
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
                        <div className="ui container ">
                            <div className="ui centered card ">
                                <div className="image">
                                    <img src={avatarUrl}/>
                                </div>
                                <div className="content">
                                    <a className="header">{profile.name}</a>
                                    <div className="meta">
                                        <span className="date">A {profile.gender} {profile.title}</span>
                                    </div>
                                    <div className="description">
                                        {profile.cell}
                                    </div>
                                    <div className="description">
                                       {profile.email}
                                    </div>
                                </div>
                                <div className="extra content">
                                    <a>
                                        <i className="user icon"></i>
                                        {profile.direct_reports.length} {profile.direct_reports.length < 2 ? "Direct Report" : "Direct Reports"}
                                    </a>
                                </div>
                                <Button variant="outlined" onClick={() => this.editHandler(profile)}>
                                    <EditIcon/>
                                    Edit
                                </Button>
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
            )
        }
        }
}
const mapStateToProps = state => {
    return {
        employees: state.employees,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getOneEmployee: (id) => {
            dispatch(actions.getOneEmployee(id));
        },
        setEmployeeToEdit: (obj) => {
            dispatch(actions.setEmployeeToEdit(obj));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);