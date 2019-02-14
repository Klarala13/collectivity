const express = require('express');
const router = express.Router();
const { welcomeMessage } = require('../controllers/messageController')

/**
 * ROOM FOR IMPROVEMENT
 * TODO:
 * - Create a new controller file dedicated for sending message responses
 *   (or add a function to it if it already exists) and move the following
 *   route handler to that file
 */

/* GET home page. */
router.get('/', welcomeMessage);

module.exports = router;
