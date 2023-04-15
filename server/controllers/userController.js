const studentModel = require("../models/studentModel");
const students = require("../models/studentModel")
const jwt = require("jsonwebtoken")


let signup = (req , res)=>{
    let {name , password ,email, contact  } = req.body;

    let student = new studentModel({
        name,
        password,
        email,
        contact,
        
    })
    student.save().then((student)=>{
        res.status(200).json({"Message":"User Created" , student:student})
    }).catch(err=>{
        res.status(500).json({"Message":"User Not Created" , err:err})
    })
}



let login = (req , res)=>{
    let {name , password} = req.body;

    students.findOne({name:name}).then((user)=>{
        if(user.password == password){
            let token = jwt.sign({
                id:user._id,
                role: user.type} , 
                process.env.SECRET_KEY, {
                    expiresIn: "24h"
                }
                )
            res.status(200).json({"Message":"Login Successfull" , user:user, token})
        }else{
            res.status(500).json({"Message":"Login Failed"})
        }
    }
    ).catch(err=>{
        res.status(500).json({"Message":"Login Failed" , err:err})
    }
    )
}

module.exports = {
    signup,
    login 
}