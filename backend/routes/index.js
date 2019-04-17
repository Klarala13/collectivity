const express = require("express");
const router = express.Router();
const { welcomeMessage } = require("../controllers/messageController");

router.get("/", welcomeMessage);
console.log("Welcome to Collectivity! App running on localhost 3000");

module.exports = router;
