const express = require('express');
const router = express.Router();
const ReviewsController = require('../src/controllers/ReviewsController')
const ensureAuthenticated = require('../middleware/ensureAuthenticated')

router.post('/', ensureAuthenticated, ReviewsController.create)

module.exports = router;
