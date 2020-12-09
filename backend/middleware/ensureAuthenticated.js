const { Request, Response, NextFunction } = require ('express');
const { verify } = require ('jsonwebtoken');
const authConfig = require ('../src/config/auth');
const AppError = require ('../errors/AppError');

module.exports = async (req, res, next) => {
  try {

  const authHeader = req.headers.authorization;

  if(!authHeader){
    throw new AppError('Token JWT não foi encontrado.', 401)
  }

  const [, token] = authHeader.split(' ')

    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded;

    req.user = {
      id: sub,
    };

    return next();
  } catch (err) {
      if(err instanceof AppError){
        next(err)
      }else{
        next(new AppError('Token JWT inválido', 401))
      }
  }
}
