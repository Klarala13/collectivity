const express = require('express');
const router = express.Router();
const { welcomeMessage } = require('../controllers/messageController')

router.get('/', welcomeMessage);

module.exports = router;
