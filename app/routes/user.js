const express = require('express')
const router = express.Router()
const User = require('../models/user')
var authenticateToken = require('../middleware/authenticateToken')
var adminAuth = require('../middleware/adminAuth')
const auth = require('../middleware/authentication')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//GET-method
//Get all users
router.get('/users', adminAuth, async(req, res) =>{
    try{
        var users = await User.find()
        res.status(200).send(JSON.stringify(users))
    } catch(e) {
        console.log(e)
        res.status(400).send(e)
    }
})


//POST-method
//Creating Employee logins - for supervisors
 router.post('/signup', async(req, res) =>{
    try{
        const {
            email,
            password,
            role
        } = req.body
        if(!email || !password || !role){
            return res.status(400).send("All fields have not been filled!")
        }

        // Encrypting Password and storing it.
        const salt = await bcrypt.genSaltSync()
        var hashedPassword = await bcrypt.hashSync(password, salt)

        // Creating User object.
        var user = new User({
            email,
            password: hashedPassword,
            role
        });
        
        //Saving User object to the db.
        await user.save()
        res.status(201).send()
    } catch(e) {
        if(e.code === 11000){
            res.status(409).send({ "Message": "User Already Exists" })
        }else{
            console.log(e)
            res.status(400).send(e)
        }
    }
})

//POST-method
//Employee login
router.post('/login', auth, async(req, res) =>{
    try{
        res.status(200).send()
    } catch(e) {
        console.log(e)
        res.status(400).send(e)
    }
})


module.exports = router