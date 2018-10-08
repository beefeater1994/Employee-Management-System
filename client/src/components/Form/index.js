import React from 'react'
import './formCSS.css';
import Button from "@material-ui/core/Button/Button";
import { Dropdown } from 'semantic-ui-react'

const options = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
];



const FormExampleForm = (props) => {
    const exposedCampaignOnChange = (e, {value}) => {
        e.persist();
        console.log(e.target.textContent);
    };
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
                                    <input type="text" name="name" placeholder="Name"/>
                                </div>
                                <div className="field">
                                    <label>Title</label>
                                    <input type="text" name="title" placeholder="Title"/>
                                </div>
                            </div>
                            <div className="two fields">
                                <div className="field">
                                    <label>Gender</label>
                                    <input type="text" name="gender" placeholder="Gender"/>
                                </div>
                                <div className="field">
                                    <label>Start Date</label>
                                    <input type="text" name="startDate" placeholder="Start Date"/>
                                </div>
                            </div>
                            <div className="two fields">
                                <div className="field">
                                    <label>Cell Phone</label>
                                    <input type="text" name="cell" placeholder="Cell Phone"/>
                                </div>
                                <div className="field">
                                    <label>Email</label>
                                    <input type="text" name="email" placeholder="Email"/>
                                </div>
                            </div>
                            <div className="two fields">
                                <div className="field">
                                    <label>Manager</label>
                                    <Dropdown placeholder='Select Friend' fluid selection  />
                                </div>
                                <div className="field">
                                    <label>Direct Reports</label>
                                    <Dropdown placeholder='Employees' fluid multiple selection options={options} onChange={exposedCampaignOnChange}/>
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
                                    <Button variant="outlined">
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

export default FormExampleForm