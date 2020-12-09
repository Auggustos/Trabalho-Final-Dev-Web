const express = require('express');
const multer = require('multer')
const multerConfig = require('../src/config/multer')
const router = express.Router();
const GamesController = require('../src/controllers/GamesController')
const ensureAuthenticated = require('../middleware/ensureAuthenticated')
/* GET users listing. */
const middleware = [ensureAuthenticated, multer(multerConfig).single("file")]
router.post('/', middleware, GamesController.create)
router.get('/', GamesController.index)
router.get('/:id', GamesController.show)
module.exports = router;
