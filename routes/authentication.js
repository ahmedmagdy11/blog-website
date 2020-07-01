const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const router = express();

router.post("/sign", async (req, res) => {
  try {
    const data = {
      username: req.body.username,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    };
    const found = await User.findOne({ email: data.email }).exec();
    if (found) {
      return res.sendStatus(409);
    }
    const doc = await User.create(data);
    console.log(doc);
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.post("login", async (req, res) => {
  const data = {
    email: req.body.email,
    password: req.body.password,
  };
  try {
    const doc = await User.find({ email: data.email }).exec();
    if (!doc) {
      return res.sendStatus(404);
    }
    const correctPassword = await bcrypt.compare(data.password, doc.password);
    if (correctPassword) {
      const Token = jwt.sign({ userID: doc._id }, process.env.TOKEN_SECRET, {
        expiresIn: "15m",
      });
      res.send({token:Token})
    }
  } catch (err) {}
});
module.exports = router;
