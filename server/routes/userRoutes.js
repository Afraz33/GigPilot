const {signup, login,DecodeUser,CheckIfEmployer} = require("../controllers/userController");
const{postJob} = require("../controllers/jobController");

const userRoutes = require("express").Router();


userRoutes.post("/signup" , signup)
userRoutes.post("/login" , login)


userRoutes.post("/viewJobForm" , DecodeUser , CheckIfEmployer, (req , res)=>{
    res.status(200).json({"Message":"View Job Form"})
})

userRoutes.post("/postJob" , DecodeUser , CheckIfEmployer, postJob)

module.exports = userRoutes;
