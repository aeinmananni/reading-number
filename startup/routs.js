const express = require("express");
const ReadNumber = require("./readnumber");


module.exports = (app)=>{
app.use(express.json());
app.use("/api/number" , ReadNumber);

}