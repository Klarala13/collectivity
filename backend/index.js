const express = require('express');
const router = express.Router();
const { welcomeMessage } = require('./controllers/messageController')

router.get('/', welcomeMessage);
console.log("Welcome to Collectivity! App running on localhost")

module.exports = router;
