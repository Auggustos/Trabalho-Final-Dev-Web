let User = require('../models/Review');
let CreateReviewService = require('../../services/CreateReviewService')
exports.create = async (req, res, next) => {
  try{
    const {nota, opiniao, idGame} = req.body

    console.log(req.user)
    const idUsuario = req.user.id;

    const createReview = new CreateReviewService()

    const review = await createReview.execute({nota, opiniao, idGame, idUsuario})

    //user.senha = undefined;

    return res.json(review)
  } catch (e){
    next(e)
  }

};
