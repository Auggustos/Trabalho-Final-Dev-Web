let User = require('../src/models/User');
let {compare} = require('bcryptjs')
let {sign} = require('jsonwebtoken')
let authConfig = require('../src/config/auth')
let AppError = require('../errors/AppError')

module.exports = class AuthenticateUserService {


  async execute({
    email,
    senha
  }) {

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

