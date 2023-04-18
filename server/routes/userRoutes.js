const {signup, login,DecodeUser,CheckIfEmployer, CheckIfStudent} = require("../controllers/userController");
const{postJob,getJobs} = require("../controllers/jobController");

const userRoutes = require("express").Router();


userRoutes.post("/signup" , signup)
userRoutes.post("/login" , login)


userRoutes.post("/viewJobForm" , DecodeUser , CheckIfEmployer, (req , res)=>{
    res.status(200).json({"Message":"View Job Form"})
})

userRoutes.post("/viewJobs" , DecodeUser , CheckIfStudent, (req , res)=>{
    res.status(200).json({"Message":"View Jobs"})
})

userRoutes.post("/postJob" , DecodeUser , CheckIfEmployer, postJob)

userRoutes.post("/getName" , DecodeUser , (req , res)=>{
    res.status(200).json({name:req.decoded.name})
})


userRoutes.post("/getJobs" , DecodeUser , CheckIfStudent, getJobs, (req , res)=>{
   
   res.status(200)
   .json({"message":"These are jobs", jobs:req.jobs})
})
module.exports = userRoutes;
