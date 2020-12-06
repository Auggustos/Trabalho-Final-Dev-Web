var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/consoles');

var reviewSchema = new mongoose.Schema({
    nome: String,
    nota: Number,
    opiniao: String,
}, { collection: 'review' });

module.exports = { Mongoose: mongoose, ReviewSchema: reviewSchema }