const API_KEY3 = process.env.API_KEY3;
const fetch = require('node-fetch');

exports.getRecipeByIngredients = async (req, res) => {
  const { ingredients } = req.query;
  const { diet } = req.query;
  const { intolerances } = req.query;
  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredients}&diet=${diet}&intolerances=${intolerances}&addRecipeNutrition=true&apiKey=${API_KEY3}&number=2`;
  const fetchResponse = await fetch(apiUrl);
  const json = await fetchResponse.json();
  res.status(200).json(json);
};

exports.getRecipeByName = async (req, res) => {
  const { query } = req.query;
  const { diet } = req.query;
  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&diet=${diet}addRecipeNutrition=true&apiKey=${API_KEY3}&number=2`;
  const fetchResponse = await fetch(apiUrl);
  const json = await fetchResponse.json();
  res.status(200).json(json);
}
