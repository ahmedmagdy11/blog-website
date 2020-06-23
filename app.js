const express = require('express');
const mongoose = require('mongoose');
const app = express();



app.use(express.json());
app.use(express.urlencoded({extended:false}));


mongoose.connect('mongodb://localhost:27017/BlogsDB',{useNewUrlParser:true , useUnifiedTopology:true},(err)=>{
    if (err){
        console.log(err);
        throw new Error(err);
    }
    app.listen(5000,()=>{
        console.log(`app is listening on port ${5000}`);
    })
})