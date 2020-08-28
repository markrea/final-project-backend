const API_KEY = process.env.API_KEY;
const fetch = require('node-fetch');

exports.getWinePairing = async (req, res) => {
  const { ingredient } = req.params;
  const apiUrl = `https://api.spoonacular.com/food/wine/pairing?food=${ingredient}&apiKey=${API_KEY}`;
  const fetchResponse = await fetch(apiUrl);
  const json = await fetchResponse.json();
  res.status(200).json(json);
};
