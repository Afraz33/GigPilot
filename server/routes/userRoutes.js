const {signup, login} = require("../controllers/userController");


const userRoutes = require("express").Router();


userRoutes.post("/signup" , signup)


module.exports = userRoutes;
