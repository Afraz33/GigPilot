const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config
const connectDB = require('./config/db')
// const upload = require("express-fileupload")


connectDB()
const app = express()
const port = process.env.PORT || 5000
let cors = require("cors");
// app.use(upload())
app.use(express.json())

app.use(cors());
app.use(express.urlencoded({extended:false}))

// app.use('/api/articles',require('./routes/articleRoutes'))
 app.use('/GigPilot',require('./routes/userRoutes'))
 

app.listen(port, ()=>{ console.log(`App listening on port ${port}`)

})