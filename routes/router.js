const express = require("express");
const Blog = require("../models/blogs");
const router = express();

router.get("/blogs", async (req, res) => {
  try {
    const doc = await Blog.find().exec();
    res.send(doc);
  } catch (err) {
    res.sendStatus(500);
  }
  
});

router.post("/add", async (req, res) => {
  console.log(req.body);
  const createdAT = new Date().toISOString();
  const Data = {
    title: req.body.title,
    blog: req.body.blog,
    createdAt: createdAT,
  };
  try {
    const doc = await Blog.create(Data);
    console.log(doc);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
  res.sendStatus(200);
});

module.exports = router;
