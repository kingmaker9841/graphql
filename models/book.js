const mongoose = require('mongoose');
const Books = new mongoose.Schema({
    name: String,
    genre: String,
    authorId: String
});

module.exports = mongoose.model('Books', Books);