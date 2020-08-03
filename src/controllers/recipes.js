const API_KEY3 = process.env.API_KEY3;
const fetch = require('node-fetch');

exports.getRecipeByIngredients = async (req, res) => {
  const { ingredients } = req.params;
  const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY3}&ingredients=${ingredients}&number=2`;
  // const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredients}&diet=${diet}&intolerances=${intolerances}&addRecipeNutrition=true&number=1&apiKey=${API_KEY3}`;
  const fetchResponse = await fetch(apiUrl);
  const json = await fetchResponse.json();
  res.json(json);
};
