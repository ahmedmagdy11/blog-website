const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const router = express();

router.post("/sign", async (req, res) => {
  try {
    const data = {
      username: req.body.username,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    };
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
