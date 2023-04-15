const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: { 
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,    
    },
    role: {
        type: String,
        required: true,
    },
});


module.exports = mongoose.model("students", studentSchema)