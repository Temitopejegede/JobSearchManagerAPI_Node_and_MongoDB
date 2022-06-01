const express = require("express");
const router = express.router();

const { login, register } = require("../controllers/auth");

router.pst("/register", register);
router.post("/login", login);

module.exports = router;
