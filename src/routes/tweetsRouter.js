const express = require("express");
const router = express.Router();

const { updateTweetController, createTweetController } = require("../controllers/twitterController");

router.post("/home", createTweetController);
router.patch("/home/:id", updateTweetController);

module.exports = router;