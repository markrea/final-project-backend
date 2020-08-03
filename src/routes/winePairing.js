const express = require('express');
const winePairingController = require('../controllers/winePairing');

const router = express.Router();

router.get('/:ingredient', winePairingController.getWinePairing);

module.exports = router;
