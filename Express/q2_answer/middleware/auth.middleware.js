
const verifiedCredentials=async(req,res,next)=>{

    const loginCredits=new mongoose.Schema({loginId:String,pass:String})
    mongoose.Models({});
    const loginModels=mongoose.Model("LoginData",loginCredits);
    const userID="rohan@123";
    const userPass="Test@123";

    // const UserCredentials= await loginModels.find({logonId})


    next();


}

export default verifiedCredentials;