var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/consoles');

var gamesSchema = new mongoose.Schema({
    nome: String,
    resumo: String,
    desenvolvedor: String,
    genero: String,
    avaliacao: Number,
    console: String,
    url: String
}, { collection: 'games' });

module.exports = { Mongoose: mongoose, GamesSchema: gamesSchema }
