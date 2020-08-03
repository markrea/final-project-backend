const express = require('express');
const moreDetailsController = require('../controllers/moreDetails');

const router = express.Router();

router.get('/:id', moreDetailsController.getMoreDetails);

module.exports = router;
