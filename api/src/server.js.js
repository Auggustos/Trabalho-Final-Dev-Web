require("dotenv").config();


const routes = require('./routes')
const express = require('express');
const cors = require('cors');
const createDB = require('./createbd');
const Games = require('./models/Game')
const app = express();

const mongoose = require('mongoose');
const AppError = require('../errors/AppError')
//configurando o body parser para pegar POSTS mais tarde
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())



app.use(routes)

app.use((err, request, response, _next) => {
  if(err instanceof AppError){
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }

  console.log(err)
  return response.status(500).json({
    status: '500',
    message: 'Internal serrver error'
  })
})

//Acesso ao Banco de Dados
let url = 'mongodb://localhost:27017/consoles';
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));



Games.find({}).lean().exec(
    function(e, docs) {
        if (docs.length == 0) {
            createDB();
        }
    });

app.listen(3000);

