const express = require('express')
var app = express()
require('dotenv').config()
require('./app/db/mongoose')
var PORT = secrets.PORT || 8080
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

var userRouter = require('./app/routes/user')
var userShiftRouter = require('./app/routes/userShifts')
var storeRouter = require('./app/routes/store')
var requestsRouter = require('./app/routes/requests')

// Setting up Routers
app.use(userRouter)
app.use(userShiftRouter)
app.use(storeRouter)
app.use(requestsRouter)

// Error Page
app.get('*', (req, res) => {
    res.send('Error. This link does not exist')
})

// Runs Cron Job
app.listen(PORT, () => {
    console.log(`Server is on Port : ${PORT}`)
})