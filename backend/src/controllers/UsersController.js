let User = require('../models/User');
let UserCreateService = require('../../services/CreateUserService')
exports.create = async (req, res, next) => {
  try{
    const {nome, email, senha} = req.body

    const createUser = new UserCreateService()

    const user = await createUser.execute({nome, email, senha})

    user.senha = undefined;

    return res.json(user)
  } catch (e){
    next(e)
  }

};
