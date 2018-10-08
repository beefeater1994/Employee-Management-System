// set up ========================
const express = require('express');
const app = express(); // create our app w/ express
const mongoose = require('mongoose'); // mongoose for mongodb
const morgan = require('morgan'); // log requests to the console (express4)
const bodyParser = require('body-parser'); // pull information from HTML POST (express4)
const methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
const exphbs = require('express-handlebars'); // template engine
const multer = require('multer'); // file upload
const favicon = require('serve-favicon'); // favicon
const path = require('path');

// database connect =================
require('./config/database');

// configuration =================

app.use(morgan('dev')); // log every request to the console
app.use(methodOverride('_method')); // put and delete
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json


// routes =========================

require('./routes/api')(app);

// port ======================================================================
const port = "4000";
app.listen(port);
console.log("Magic happens at " + port);