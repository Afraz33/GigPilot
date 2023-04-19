const asyncHandler = require('express-async-handler')

const jobs = require('../models/jobModel')



// @desc Set Jobs
// @route POST /GigPilot/postJob
// @access Private
const postJob = asyncHandler (async(req, res)=>{
    
    if(!req.decoded.name || !req.body.jobTitle || !req.body.description || !req.body.jobType || !req.decoded.id){
        res.status(400)
        throw new Error('Please add a text field')
    }
    
    const job = await jobs.create({
       companyId: req.decoded.id,
       companyName: req.decoded.name,
       jobTitle: req.body.jobTitle,
       description: req.body.description,
       jobType: req.body.jobType,
            
    })
    res.status(200).json(job)
   
})

// @desc get Jobs
// @route POST /GigPilot/getJobs
// @access Private
const getJobs = asyncHandler (async(req, res,next)=>{
    const allJobs = await jobs.find()
       
    res.status(200).json(allJobs)
    
   
    
});


// @desc get specific Jobs
// @route POST /GigPilot/searchJob
// @access Private
const getSpecificJob = asyncHandler (async(req, res)=>{
    
    const job = await jobs.find({jobTitle:req.body.jobTitle})
       
    res.status(200).json(job)
    
   
    
});

module.exports = {postJob,getJobs,getSpecificJob}