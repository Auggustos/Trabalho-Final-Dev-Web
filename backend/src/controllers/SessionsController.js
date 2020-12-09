let AuthenticateUserService = require('../../services/AuthenticateUserService')
exports.create = async (req, res, next) => {
  try{
    const {email, senha} = req.body

    const authenticateUser = new AuthenticateUserService();

    const {user, token} = await authenticateUser.execute({email, senha})

    user.senha = undefined;

    return res.json({user, token})
  } catch (e){
    next(e)
  }


};
