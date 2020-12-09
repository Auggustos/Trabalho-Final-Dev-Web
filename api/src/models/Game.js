var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var GameSchema = new Schema({
    nome: String,
    resumo: String,
    desenvolvedor: String,
    genero: String,
    avaliacao: Number,
    console: String,
    url: String,
    reviews: [{type: Schema.ObjectId, ref: 'Review'}] // assuming you name your model Task

});

module.exports = mongoose.model('Game', GameSchema)
