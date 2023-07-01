
const express = require('express');
const mongoose= require('mongoose');


const app=express();
const PORT=3000;
const db="mongodb+srv://rohanpatil1797:AdsDcwJHEfPiYps4@cluster0.tn9rfaf.mongodb.net/post_data"
app.listen(PORT, async (error)=>{

    if(!error)
    {
        console.log("Server is successfully runnimg on PORT 3000");
       try{
       await mongoose.connect(db);
        console.log("databse connected");

        

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



const getData=async(req,res)=>{
          
         const post_Schema=new mongoose.Schema({text:String})
         mongoose.models = {};
         const post_Model=mongoose.model("Post",post_Schema)
        const all_post= await post_Model.find({});
          if(!all_post)
          {
            console.log("Something went wrong");
          }
          res.status(200).json({
            message:"Data fetched succesful",
            all_post
          });
          console.log("Success")
    
            
        } 
        

    app.get("/",(req,res)=>{
        res.send("Welcome to the backend developement")
    })
    app.get("/Post",getData)