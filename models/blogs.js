const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  blog: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  author: {
    type: String,
    required: true,
    default: "ahmed",
    ref: "user",
  },
});

const blog = mongoose.model("blog", BlogSchema);

module.exports = blog;
