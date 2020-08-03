const express = require('express');
const recipeController = require('../controllers/recipes');

const router = express.Router();

router.get('/:ingredients', recipeController.getRecipeByIngredients);

module.exports = router;
