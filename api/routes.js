const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./src/config/multer");

const Post = require("./src/models/Post");


routes.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
routes.get('/reviews', (req, res) => {
    var db = require("./reviews");
    var Review = db.Mongoose.model('review', db.ReviewSchema, 'review');
    Review.find({}).lean().exec(
        function(e, docs) {
            res.json(docs);
        });
});

routes.get('/review/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    var db = require("./reviews");
    var Review = db.Mongoose.model('review', db.ReviewSchema, 'review');
    Review.find({ _id: id }).lean().exec(
        function(e, docs) {
            res.json(docs);
        });
});

routes.get('/games', (req, res) => {
    var db = require("./games");
    var Games = db.Mongoose.model('games', db.GamesSchema, 'games');
    Games.find({}).lean().exec(
        function(e, docs) {
            res.json(docs);
        });
});

routes.post('/review', (req, res) => {
    console.log(req)
        /*  const status = req.body.status;
         var db = require("./reviews");
         var Review = db.Mongoose.model('review', db.ReviewSchema, 'review');
         Review.findByIdAndUpdate(req.params.id, { isEnable: status }).lean().exec(
             function(e, docs) {
                 res.json(docs);
             }); */
})

routes.delete('/game/:id', (req, res) => {
    var db = require("./games");
    var Games = db.Mongoose.model('games', db.GamesSchema, 'games');
    Games.findByIdAndRemove({ _id: req.params.id }).lean().exec(
        function(e, docs) {
            res.json(docs);
        });
});

//aqui
routes.post('/game', multer(multerConfig).single("file"), (req, res) => {

    const { originalname: name, size, key, location: url = "" } = req.file;

    const { nome, resumo, desenvolvedor, genero, avaliacao, console } = req.body

    var db = require("./games");
    var Games = db.Mongoose.model('games', db.GamesSchema, 'games');
    var Games = new Games({ nome: nome, isEnable: true, resumo: resumo, desenvolvedor: desenvolvedor, genero: genero, avaliacao: avaliacao, console: console, url: url });
    Games.save(function(err) {
        if (err) {
            console.log("Error! " + err.message);
            return err;
        } else {
            res.json(Games);
        }
    });
});

module.exports = routes