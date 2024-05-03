const express = require("express");
const user = require("../controller/user");
const router = express.Router();

router.route("/register").post(user.registerUser);
router.route("/login").post(user.login);
module.exports = router;
