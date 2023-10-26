const express = require("express");
const router = express.Router();

const { createUsersController, loginUsersController, updateBioController } = require("../controllers/twitterController");

router.get("/login", loginUsersController);
router.post("/register", createUsersController);
router.patch("/home/:id", updateBioController);

module.exports = router;