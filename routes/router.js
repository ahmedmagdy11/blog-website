const express = require("express");
const Blog = require("../models/blogs");
const router = express();

router.get("/blogs", async (req, res) => {
  try {
    const doc = await Blog.find().exec();
  } catch (err) {
      res.sendStatus(500);
  }
  res.send(doc);
});


router.post("/add",(req,res)=>{
    const Data = {
        title:req.body.title,
        blog:req.body.blog,
        date: Date.now().toISOstring()
    }
   try{
    const doc = await Blog.create(Data)
   } catch(err){
    console.log(err);
    res.sendStatus(500);
   }
})

module.exports = router;
