const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/router");
const generateKey = require("./functions/generateKeys");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Acess-Control-Allow-Methods", "POST,GET,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers","content-type")
  if (req.method === "OPTIONS"){
      return res.sendStatus(200);
  }
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

mongoose.connect(
  "mongodb://localhost:27017/BlogsDB",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
      throw new Error(err);
    }
    app.listen(5000, () => {
      generateKey();
      console.log(`app is listening on port ${5000}`);
    });
  }
);
