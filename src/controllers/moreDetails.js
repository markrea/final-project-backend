const API_KEY3 = process.env.API_KEY3;
const fetch = require('node-fetch');

exports.getMoreDetails = async (req, res) => {
  const { id } = req.params;
  const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY3}`;
  const fetchResponse = await fetch(apiUrl);
  const json = await fetchResponse.json();
  res.json(json);
};
