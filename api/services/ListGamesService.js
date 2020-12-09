const { userInfo } = require('os');
const Review = require('../src/models/Review');
const Game = require('../src/models/Game');
const User = require('../src/models/User');
module.exports = class ListGamesService {


  async execute(console) {


      const games = await Game
      .find({console}).populate({select: 'nota', path: 'reviews', model: Review})

      let averageGames = 0.0;
      games.forEach((game) => {
        game.reviews.forEach((review) => {
          if(review.nota) averageGames += review.nota
        })
        averageGames = averageGames / game.reviews.length
        game.avaliacao = averageGames
        game.reviews = undefined

        averageGames = 0.0 //zera média

      })

      games.sort((a,b) => parseFloat(b.avaliacao) - parseFloat(a.avaliacao))

      return games;

    }


}

