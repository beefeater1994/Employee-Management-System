const init = require('./Configuration');
const bodyParser = require('body-parser');
const Employee = require('./Models/Employee');
const express = require('express');
const PORT = 4000;

// Connect to database
init();
// Express instance App
const app = express();
app.use(bodyParser.json("reviver"));

// Find all employees
app.get('/employees', (req, res) => {
    Employee.find({}, function(err, users) {
        if (err) throw err;
        res.status(200).json(users);
    });
});

app.listen(PORT, () => {
    console.log(`Express Server is running on port ${PORT}`);
});



