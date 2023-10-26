const express = require("express");
const router = express.Router();

const { findTweetsController, createUsersController, loginUsersController, updateBioController } = require("../controllers/twitterController");

router.get("/home", findTweetsController);
router.get("/login", loginUsersController);
router.post("/register", createUsersController);
router.patch("/home/:id", updateBioController);

module.exports = router;