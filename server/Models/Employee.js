const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const employeeSchema = new Schema({
    avatar: {type: String},
    name: {type: String, required: true},
    title: {type: String, required: true},
    gender: {type: String},
    level: {type: Number},
    cell: {type: String},
    email: {type: String},
    manager: {
        id: {type: String},
        name: {type: String}
    },
    direct_reports: [
        {
            id: {type: String},
            name: {type: String}
        }
    ],
});

const Employee = mongoose.model('employee', employeeSchema);

module.exports = Employee;