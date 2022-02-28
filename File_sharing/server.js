const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");




mongoose.connect(process.env.MONGO_URL, {useNewUrlparser : true} , () =>{
    console.log("mongodb is connected")
});








app.listen(PORT , () =>{
    console.log(`server is running at ${PORT}`)
})