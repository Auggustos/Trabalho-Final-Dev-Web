const Game = require('../src/models/Game');

module.exports = class CreateGameService {


  async execute({
    nome,
    resumo,
    desenvolvedor,
    genero,
    avaliacao,
    console,
    url
  }) {



      const game = await new Game({
        nome,
        resumo,
        desenvolvedor,
        genero,
        avaliacao,
        console,
        url
      })

      return game.save().then(game => game)

    }


}

