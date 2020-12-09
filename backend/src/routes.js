const {Router} = require('express')

const usersRouter = require('../routes/users')
const sessionsRouter = require('../routes/sessions')
const gamesRouter = require('../routes/games')
const reviewsRouter = require('../routes/reviews')

const routes = Router();

routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/games', gamesRouter)
routes.use('/reviews', reviewsRouter)

module.exports = routes;
