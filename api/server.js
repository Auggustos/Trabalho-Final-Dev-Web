require("dotenv").config();


const express = require('express');
const cors = require('cors');
const createDB = require('./createbd');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const routes = require('./routes')
//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.use('/', routes);

    //definindo as rotas

//FUNÇÃO DE VERIFICAÇÃO DA PRÉ EXISTÊNCIA DA COLLECTION E DOS DADOS PARA POPULAR O SELECT
var db = require("./games");
var Games = db.Mongoose.model('games', db.GamesSchema, 'games');
Games.find({}).lean().exec(
    function(e, docs) {
        if (docs.length == 0) {
            createDB();
        }
    });

app.listen(port);
console.log('API funcionando!');
