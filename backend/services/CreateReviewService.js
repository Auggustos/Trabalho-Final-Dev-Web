const Review = require('../src/models/Review');
const Game = require('../src/models/Game');
const User = require('../src/models/User');
const {compare} = require('bcryptjs')
const {sign} = require('jsonwebtoken')
const authConfig = require('../src/config/auth')
const AppError = require('../errors/AppError')
const {ObjectID} = require('mongodb');

module.exports = class CreateReviewService {


  async execute({
    nota,
    opiniao,
    idGame,
    idUsuario
  }) {

    if(!idGame){
      throw new AppError("O id do jogo é necessário", 400);
    }




    const newReview = await new Review({
      nota,
      opiniao,
      game: idGame,
      usuario: idUsuario
    })


    const game = await Game.findById({_id: idGame})
    const user = await User.findById({_id: idUsuario})
    console.log(user)
    const review = await newReview.save()
    game.reviews = game.reviews.concat(review._id)
    user.reviews = user.reviews.concat(user._id)
    await game.save();
    await user.save();

    return review


    /*


    const user = await User.findOne({email})

    if(!user){
      throw new AppError('Combinação de usuário / senha inválida.', 401)
    }

    // user.senha - senha criptografada
    // senha - senha não criptografada
    const passwordMatched = await compare(senha, user.senha);

    if (!passwordMatched) {
      throw new AppError('Combinação de usuário / senha inválida.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn
    })

    return {
      user,
      token
    }

    /*
      if(!nome || !email || !senha){
        throw new AppError('Preencha todos os campos obrigatórios!')
      }

      const checkEmailExists =  await User.findOne({email})

      if(checkEmailExists){
        throw new AppError('Email já está sendo utilizado');
      }

      const hashedPassword = await hash(senha, 8);

      const user = await new User({
        nome,
        email,
        senha: hashedPassword
      })

      return user.save().then(user => user)
*/
    }


}

