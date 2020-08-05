const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

const recipesRouter = require('./routes/recipes');
const moreDetailsRouter = require('./routes/moreDetails');
const randomRouter = require('./routes/random');
const wineRouter = require('./routes/winePairing');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/', recipesRouter);
app.use('/moreDetails', moreDetailsRouter);
app.use('/random', randomRouter);
app.use('/wine', wineRouter);

module.exports = app;
