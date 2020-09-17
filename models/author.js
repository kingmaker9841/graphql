const mongoose = require('mongoose');
const Authors = new mongoose.Schema({
    name: String,
    age : String
});

module.exports = mongoose.model('Authors', Authors);