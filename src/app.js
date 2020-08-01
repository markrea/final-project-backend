const express = require('express');
const fetch = require('node-fetch');
const dotenv = require('dotenv').config();

const API_KEY3 = process.env.API_KEY3;
const app = express();

app.get('/recipes/:ingredients', async (req, res) => {
  const { ingredients } = req.params;
  const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY3}&ingredients=${ingredients}&number=2`;
  const fetchResponse = await fetch(apiUrl);
  const json = await fetchResponse.json();
  res.json(json);
});

app.get('/recipes/:id/moreDetails', async (req, res) => {
  const { id } = req.params;
  const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY3}`;
  const fetchResponse = await fetch(apiUrl);
  const json = await fetchResponse.json();
  res.json(json);
});

app.get('/recipe/random', async (req, res) => {
  const apiUrl = `https://api.spoonacular.com/recipes/random?number=1&apiKey=${API_KEY3}`;
  const fetchResponse = await fetch(apiUrl);
  const json = await fetchResponse.json();
  res.json(json);
});

module.exports = app;
