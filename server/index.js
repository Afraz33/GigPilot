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
var bodyParser = require('body-parser')

app.use(bodyParser.text({ type: '/' }));
app.use(express.json())

app.use(cors());
app.use(express.urlencoded({extended:true}))

// app.use('/api/articles',require('./routes/articleRoutes'))
 app.use('/GigPilot',require('./routes/userRoutes'))
 
// app.use((error,req, res, next) => {
//     const message = error.field
//     return res.status(500).json({message})
// })
app.listen(port, ()=>{ console.log(`App listening on port ${port}`)

})