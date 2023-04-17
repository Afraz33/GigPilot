const asyncHandler = require('express-async-handler')

const jobs = require('../models/jobModel')

// @desc Get articles
// @route GET /api/articles
// @access Private
// const getArticles = asyncHandler (async (req, res)=>{
//     const articles = await Article.find()
//     res.status(200).json(articles)
// })

// @desc Set articles
// @route POST /GigPilot/postJob
// @access Private
const postJob = asyncHandler (async(req, res)=>{
    console.log(req.decoded.name)
    console.log(req.body.description)
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


module.exports = {postJob}