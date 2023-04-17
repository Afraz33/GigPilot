const userModel = require("../models/userModel");
const users = require("../models/userModel")
const jwt = require("jsonwebtoken")


let signup = (req , res)=>{
    let {name , password ,email, contact,role  } = req.body;

    let User = new userModel({
        name,
        password,
        email,
        contact,
        role,
        
    })

      users.findOne({email:email}).then((user)=>{
        if(user){
        res.status(300).json({"Message":"User Already Exists"})}
        else{    
        User.save().then((user)=>{
        res.status(200).json({"Message":"User Created" , user:user})
    }).catch(err=>{
        res.status(500).json({"Message":"User Not Created" , err:err})
    })
}})
}



let login = (req , res)=>{
    let {email , password} = req.body;
     
    users.findOne({email:email}).then((user)=>{
        
       if(user && user.password == password){
            let token = jwt.sign({
                id:user._id,
                role: user.role,
                name:user.name,} , 
                process.env.SECRET_KEY, {
                    expiresIn: "24h"
                }
                )
            res.status(200).json({"Message":"Login Successfull" , user:user, token:token})
        }
        else{
            res.status(500).json({"Message":"Login Failed"})
        }
    }
    ).catch(err=>{
        res.status(500).json({"Message":"Login Failed" , err:err})
    }
    )
}

let DecodeUser = (req , res , next)=>{
    let token = req.body.token;
     
    jwt.verify(token , process.env.SECRET_KEY , (err , decoded)=>{
        if(!err){
            
            req.decoded = decoded;
            console.log(req.decoded)
            next();
        }else{
            res.status(403).json({token:token, message:"Not Authorized"})
        }
    }
    )
}

let CheckIfEmployer = (req , res , next)=>{
    
    if(req.decoded.role == "Employer"){
        next();
    }else{
        res.status(403).json({"Message":"Not Authorized as Employer"})
    }
}


module.exports = {
    signup,
    login ,
    DecodeUser,
    CheckIfEmployer
}