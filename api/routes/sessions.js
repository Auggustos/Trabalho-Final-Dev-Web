let express = require('express');
let router = express.Router();
let SessionsController = require('../src/controllers/UsersController')

/* GET users listing. */
router.post('/', SessionsController.create)

module.exports = router;
