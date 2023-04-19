const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    applicantName: {
        type: String,
        required: true,
    },
    applicantEmail: {
        type: String,
        required: true,
    },
    jobId: {
        type: String,
        required: true,
    },
    userId: { 
        type: String,
        required: true,
    },
    coverLetter: {
        type: String,
        required: true,    
    },
    resume: {
        type: [String],
        required: true,
    },
   
});


module.exports = mongoose.model("applications", applicationSchema)