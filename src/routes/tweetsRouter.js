const express = require("express");
const router = express.Router();

const { findTweetsController, updateTweetController, createTweetController } = require("../controllers/tweetsController");

router.get("/home", findTweetsController);
router.post("/home", createTweetController);
router.patch("/home/:id", updateTweetController);

module.exports = router;