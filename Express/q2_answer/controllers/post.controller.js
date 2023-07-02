const { default: mongoose } = require("mongoose")

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

export default getData;