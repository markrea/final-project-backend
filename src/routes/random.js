const express = require('express');
const randomController = require('../controllers/random');

const router = express.Router();

router.get('/', randomController.getRecipe);

module.exports = router;
