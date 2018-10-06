const mongoose = require('mongoose');
const init = () => {
    const db = mongoose.connection;
    mongoose.connect('mongodb://127.0.0.1:27017/Employee');
    db.once('open', function() {
        console.log('mongodb connected.');
    });
};

module.exports = init;