const express = require("express");
const router = express.Router();
const { welcomeMessage } = require("../lib/controllers/messageController");

router.get("/", welcomeMessage);
console.log("Welcome to Collectivity! App running on localhost 4001");

module.exports = router;
