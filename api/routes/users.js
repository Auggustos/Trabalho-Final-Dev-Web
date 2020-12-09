let express = require('express');
let router = express.Router();
let UsersController = require('../src/controllers/UsersController')
let SessionsController = require('../src/controllers/SessionsController')

/* GET users listing. */
router.post('/', UsersController.create)
router.post('/login', SessionsController.create)

module.exports = router;
