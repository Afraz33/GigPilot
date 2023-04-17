const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    companyId: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    jobTitle: {
        type: String,
        required: true,
    },
    description: { 
        type: String,
        required: true,
    },
    jobType: {
        type: String,
        required: true,    
    },
   
});


module.exports = mongoose.model("jobs", jobSchema)