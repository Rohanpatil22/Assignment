const express= require('express');
const mongoose= require('mongoose');

const app=express();
const PORT=3000;

const db="mongodb+srv://rohanpatil1797:AdsDcwJHEfPiYps4@cluster0.tn9rfaf.mongodb.net/"

app.get("/",(req,res)=>{
    res.send("App is working fine.");
})

app.use("/api/v1/",routes)
app.listen(PORT,async (error)=>{

    if(!error)
    {
        try{

            await mongoose.connect(db);
            console.log("Database connected.");

        }
        catch(err){
            console.log("Not connected to the database.",err);
        }

    }
    else{

        console.log("Something went wrong,",error);
    }
    console.log(`App is listening to ${PORT}`);
})