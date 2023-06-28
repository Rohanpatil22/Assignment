// import mongoose from 'mongoose';
const express = require('express');
const mongoose= require('mongoose');


const app=express();
const PORT=3000;
const db="mongodb+srv://rohanpatil1797:AdsDcwJHEfPiYps4@cluster0.tn9rfaf.mongodb.net/"
app.listen(PORT, (error)=>{

    if(!error)
    {
        console.log("Server is successfully runnimg on PORT 3000");
       try{
        mongoose.connect(db);
        console.log("databse connected")
       } 
       catch(err){
        console.log("Not connected to databse",err);
       }
    }
    else
    {
        console.log("Error occured",error)
    }
      
    
});

app.get("/",(req,res)=>{
    res.send("Hello There. Enjoy the backend development!!!!");
})
