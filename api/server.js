const express = require('express');
const cors = require('cors');
const createDB = require('./createbd');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
    //definindo as rotas
const router = express.Router();

//FUNÇÃO DE VERIFICAÇÃO DA PRÉ EXISTÊNCIA DA COLLECTION E DOS DADOS PARA POPULAR O SELECT
var db = require("./games");
var Games = db.Mongoose.model('games', db.GamesSchema, 'games');
Games.find({}).lean().exec(
    function(e, docs) {
        if (docs.length == 0) {
            createDB();
        }
    });


router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
router.get('/reviews', (req, res) => {
    var db = require("./reviews");
    var Review = db.Mongoose.model('review', db.ReviewSchema, 'review');
    Review.find({}).lean().exec(
        function(e, docs) {
            res.json(docs);
        });
});

router.get('/review/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    var db = require("./reviews");
    var Review = db.Mongoose.model('review', db.ReviewSchema, 'review');
    Review.find({ _id: id }).lean().exec(
        function(e, docs) {
            res.json(docs);
        });
});

router.get('/games', (req, res) => {
    var db = require("./games");
    var Games = db.Mongoose.model('games', db.GamesSchema, 'games');
    Games.find({}).lean().exec(
        function(e, docs) {
            res.json(docs);
        });
});

router.patch('/review/:id', (req, res) => {
    const id = req.params.id;
    const status = req.body.status;
    var db = require("./reviews");
    var Review = db.Mongoose.model('review', db.ReviewSchema, 'review');
    Review.findByIdAndUpdate(req.params.id, { isEnable: status }).lean().exec(
        function(e, docs) {
            res.json(docs);
        });
})

router.delete('/game/:id', (req, res) => {
    var db = require("./games");
    var Games = db.Mongoose.model('games', db.GamesSchema, 'games');
    Games.findByIdAndRemove({ _id: req.params.id }).lean().exec(
        function(e, docs) {
            res.json(docs);
        });
});


router.post('/game', (req, res) => {
    const nome = req.body.nome;
    const resumo = req.body.resumo;
    const desenvolvedor = req.body.desenvolvedor;
    const genero = req.body.genero;
    const avaliacao = req.body.avaliacao;
    const console = req.body.console;
    var db = require("./games");
    var Games = db.Mongoose.model('games', db.GamesSchema, 'games');
    var Games = new Games({ nome: nome, isEnable: true, resumo: resumo, desenvolvedor: desenvolvedor, genero: genero, avaliacao: avaliacao, console: console });
    food.save(function(err) {
        if (err) {
            console.log("Error! " + err.message);
            return err;
        } else {
            res.json(nome);
        }
    });
});

//DAQUI PRA BAIXO TEM QUE SUMIR
/*router.post('/order', (req, res) => {
    const nome = req.body.nome;
    const orders = req.body.orders;
    const fullPrice = req.body.fullPrice;

    var db = require("./order");
    var Orders = db.Mongoose.model('orders', db.OrderSchema, 'orders');
    var order = new Orders({ client: nome, products: orders, fullPrice: fullPrice });
    order.save(function(err) {
        if (err) {
            console.log("Error! " + err.message);
            return err;
        } else {
            res.json(nome);
        }
    });
});*/
app.use('/api', router); // requisições que chegam na raiz devem ser enviadas para o router
//inicia o servidor
app.listen(port);
console.log('API funcionando!');