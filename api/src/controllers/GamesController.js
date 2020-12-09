let ListGamesService = require('../../services/ListGamesService')
let CreateGameService = require('../../services/CreateGameService')
let ShowGameService = require('../../services/ShowGameService')
exports.create = async (req, res, next) => {
  try{

    const {originalname: name, size, key, location: url = ""} = req.file;

    const {nome, resumo, desenvolvedor, genero, avaliacao, console} = req.body

    const createGame = new CreateGameService()

    const game = await createGame.execute({nome, resumo, desenvolvedor,
      genero, avaliacao, console, url})

    return res.json(game)
  } catch (e){
    console.log(e)
    next(e)
  }

};

exports.index = async (req, res, next) => {
  try{

    const listGames = new ListGamesService()

    const games = await listGames.execute()

    return res.json(games)
  } catch (e){
    console.log(e)
    next(e)
  }

};

exports.show = async (req, res, next) => {
  try{

    const {id} = req.params
    const showGame = new ShowGameService()

    const game = await showGame.execute(id)

    return res.json(game)
  } catch (e){
    console.log(e)
    next(e)
  }

};
