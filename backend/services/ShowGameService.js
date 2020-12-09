const { userInfo } = require('os');
const Review = require('../src/models/Review');
const Game = require('../src/models/Game');
const User = require('../src/models/User');
module.exports = class ShowGameService {


  async execute(id) {
      const game = await Game
      .findById(id).populate({
        path: 'reviews',
        select: ['opiniao' ,'nota'],
        model: 'Review',
        populate: {
          path: 'usuario',
          model: 'User',
          select: 'nome'
        }
      })


      return game;

    }


}

