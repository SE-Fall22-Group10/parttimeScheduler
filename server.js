const express = require('express')
var app = express()
require('dotenv').config()
require('./app/db/mongoose')
var PORT = process.env.PORT || 5000
var userRouter = require('./app/routes/user')
const bodyParser = require('body-parser')
var auth = require('./app/middleware/authentication')
var adminAuth = require('./app/middleware/adminAuth')
const cors = require('cors')
const session = require('express-session')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

// Middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(session({secret: process.env.EXPRESS_SESSION_SECRET, saveUninitialized: true, resave: true}))

// Route for the Main page
app.get('/', auth, (req, res) => {
    res.send("Hello There!")
})

// Setting up Routers
app.use(userRouter)

// Error Page
app.get('*', (req, res) => {
    res.send('Error. This link does not exist')
})

// Runs Cron Job
app.listen(PORT, () => {
    console.log(`Server is on Port : ${PORT}`)
})