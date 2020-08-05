const express = require('express');
const recipeController = require('../controllers/recipes');

const router = express.Router();

router.get('/recipes', recipeController.getRecipeByIngredients);
router.get('/:recipename', recipeController.getRecipeByName);

module.exports = router;
