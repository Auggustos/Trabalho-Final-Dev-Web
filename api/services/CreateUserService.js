let User = require('../src/models/User');
let {hash} = require('bcryptjs')
let AppError = require('../errors/AppError')
module.exports = class CreateUserService {


  async execute({
    nome,
    email,
    senha
  }) {
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

    }


}

