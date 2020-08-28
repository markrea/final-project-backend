const API_KEY = process.env.API_KEY;
const fetch = require('node-fetch');


exports.getRecipe = async (req, res) => {
  const apiUrl = `https://api.spoonacular.com/recipes/random?number=9&apiKey=${API_KEY}`;
  const fetchResponse = await fetch(apiUrl);
  const json = await fetchResponse.json();
  res.json(json);
};
