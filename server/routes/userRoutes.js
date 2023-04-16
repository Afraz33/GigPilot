const {signup, login,DecodeUser,CheckIfEmployer} = require("../controllers/userController");


const userRoutes = require("express").Router();


userRoutes.post("/signup" , signup)
userRoutes.post("/login" , login)


userRoutes.post("/viewJobForm" , DecodeUser , CheckIfEmployer, (req , res)=>{
    res.status(200).json({"Message":"View Job Form"})
})

module.exports = userRoutes;
