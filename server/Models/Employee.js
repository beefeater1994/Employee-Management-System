const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const employeeSchema = new Schema({
    avatar: {type: String},
    name: {type: String, required: true},
    title: {type: String, required: true},
    gender: {type: String},
    startDate: {type: Date},
    cell: {type: String},
    email: {type: String},
    manager: {
        id: {type: Schema.Types.ObjectId},
        name: {type: String}
    },
    direct_reports: [
        {
            type: Schema.Types.ObjectId
        }
    ],
});

const Employee = mongoose.model('employee', employeeSchema);

module.exports = Employee;