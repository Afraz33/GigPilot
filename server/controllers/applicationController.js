const asyncHandler = require('express-async-handler')
const applications = require('../models/applicationModel')

const fs = require('fs');
const multer = require('multer');

const storage = multer.diskStorage({
    destination:(req , file , cb)=>{
        
        cb(null , './content')
    },
    filename:(req , file , cb)=>{
        cb(null ,Date.now()+file.originalname)
    }
})


const filter = (req , file , cb)=>{
    if(file.mimetype == 'application/pdf'){
        cb(null , true)
    }else{
        cb(new Error("UnSupported file") , false)
    }
}


const upload = multer({
   storage:storage,
   fileFilter:filter,
    limits:1024*1024*10
})

const setApplication = async (req, res) => {
    //   console.log(req.body);
    try {
        const { applicantName, applicantEmail, userId, jobId, coverLetter } = req.body;
       
        
        const newApplication = new applications({
            applicantName:applicantName,
            applicantEmail:applicantEmail,
            userId:userId,
            jobId:jobId,
            coverLetter:coverLetter,
            resume: req.files.map(file => file.path)
        });
        await newApplication.save();
        console.log(newApplication);
        res.status(200).json({ "message": 'New application has been created', newApplication: newApplication });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}
  module.exports = { setApplication, upload };