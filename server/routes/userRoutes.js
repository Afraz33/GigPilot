const {signup, login,DecodeUser,CheckIfEmployer, CheckIfStudent} = require("../controllers/userController");
const{postJob,getJobs,getSpecificJob} = require("../controllers/jobController");
const {setApplication, upload} = require("../controllers/applicationController");
const userRoutes = require("express").Router();

//signup for both student and employer
userRoutes.post("/signup" , signup)

//login for both student and employer
userRoutes.post("/login" , login)


//Student viewing job form
userRoutes.post("/viewJobForm" , DecodeUser , CheckIfEmployer, (req , res)=>{
    res.status(200).json({"Message":"View Job Form"})
})

//student viewing jobs
userRoutes.post("/viewJobs" , DecodeUser , CheckIfStudent, (req , res)=>{
    res.status(200).json({"Message":"View Jobs"})
})

//Employer posting a job
userRoutes.post("/postJob" , DecodeUser , CheckIfEmployer, postJob)

//get name of employer/student
userRoutes.post("/getName" , DecodeUser , (req , res)=>{
    res.status(200).json({name:req.decoded.name,email:req.decoded.email,id:req.decoded.id})
})

//students viewing jobs
userRoutes.post("/getJobs" , DecodeUser , CheckIfStudent, getJobs)

//students searching for a job
userRoutes.post("/searchJobs" , DecodeUser , CheckIfStudent, getSpecificJob)


//student applying for a job
userRoutes.post('/applyJob' , upload.array('resume') ,DecodeUser,CheckIfStudent, setApplication );


module.exports = userRoutes;
