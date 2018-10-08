const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const Employee = require('../models/Employee');

// file upload destination folder
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/');
    },
    // file upload extension
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
// file upload variable
const upload = multer({
    storage: storage
});

// api function export
module.exports = function(app) {
    // Get all employees
    app.get('/employees', (req, res) => {
        Employee.find({}, function(err, users) {
            if (err) throw err;
            res.status(200).json(users);
        });
    });
    // Post a new employee
    app.post('/', upload.single('avatar'), (req, res) => {
        const employee = new Employee({
            name: req.body.name,
            title: req.body.title,
            avatar: req.file.filename,
        });
        employee.save((err, data) => {
            if (err) return res.send(err);
            res.send({ message: "Employee add success" });
        });
    });
};

