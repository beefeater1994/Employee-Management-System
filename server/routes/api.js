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
    app.post('/employees', upload.single('avatar'), (req, res) => {
        const employee = new Employee({
            name: req.body.name,
            title: req.body.title,
            gender: req.body.gender,
            level: req.body.level,
            cell: req.body.cell,
            email: req.body.email,
            manager: req.body.manager,
            direct_reports: req.body.dr,
            avatar: req.file === undefined ? "Icon" : req.file.filename,
        });
        employee.save((err, data) => {
            if (err) return res.send(err);
            console.log(`Create a new employee with id ${data._id}`);
            // Push the new employee into his/her manager's DRs, if manager exists.
            if (data.manager.id !== undefined) {
                Employee.findOneAndUpdate({_id: data.manager.id}, {$push:{direct_reports:data._id}}, (errManager) => {
                    if (err) {
                        console.log(`Putting new employee ${data._id} into his manager ${data.manager.id}'s DR failed!\n` + errManager);
                        return res.send(err);
                    }
                    console.log(`Putting new employee ${data._id} into his manager ${data.manager.id}'s DR succeed!`);
                    res.send({ message: "Employee add success" });
                });
            } else {
                console.log(`This employee has no manager.`);
                res.send({ message: "Employee add success" });
            }
        });
    });
    // Update a new employee
    app.put('/employees/:id', upload.single('avatar'), (req, res) => {
        let id = String(req.params.id);
        console.log(req.body);
        Employee.findOneAndUpdate({_id: id}, {
            cell: req.body.cell,
            email: req.body.email
        }, (err) =>{
            if (err) console.log(err);
            res.send('User successfully updated!');
        });
    });
    // Delete a new employee
    app.delete('/employees/:id', (req, res) => {
        let id = String(req.params.id);
        console.log(id);
        Employee.deleteOne({_id: id}, (err) =>{
            if (err) res.send(err);
            console.log("Deleted one employee with ID: " + id);
            // 1->M relationship, deleted the manager, the DRs have no manager anymore, update DRS
            Employee.updateMany({"manager.id": id}, { $set: { "manager" : "" } },(err, user) =>{
                if (err) res.send(err);
                console.log("Deleted this guy as manager.");
                // 1->M relationship, delete this guy as one dr, update the manager
                Employee.findOneAndUpdate({direct_reports: id}, { $pull: { direct_reports: id } },(err, user)=>{
                    if (err) res.send(err);
                    console.log("Delete this guy as a direct report");
                    console.log("Delete finished!");
                    res.send("Delete finished!")
                });
            });
        });
    });
};

