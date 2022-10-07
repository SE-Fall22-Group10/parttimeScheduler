const express = require('express')
const router = express.Router()
const Store = require('../models/store')
var authenticateToken = require('../middleware/authenticateToken')
var adminAuth = require('../middleware/adminAuth')
const auth = require('../middleware/authentication')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//GET-method
//Get all stores
router.get('/stores', adminAuth, async(req, res) =>{
    try{
        var stores = await Store.find()
        res.status(200).send(JSON.stringify(stores))
    } catch(e) {
        console.log(e)
        res.status(400).send(e)
    }
})

// POST-method
// Add a store
router.post('/addStore', adminAuth, async(req, res) =>{
    try{
        const {
            storeName,
            supervisorEmail
        } = req.body
        if(!storeName || !supervisorEmail){
            return res.status(400).send("Store Name or supervisor email cannot be empty!")
        }

        // Creating Store object.
        var store = new Store({
            storeName,
            supervisorEmail
        });
        
        //Saving Store object to the db.
        await store.save()
        res.status(201).send({ "Message": "Store Added" })
    } catch(e) {
        if(e.code === 11000){
            res.status(409).send({ "Message": "Store Already Exists" })
        }else{
            console.log(e)
            res.status(400).send(e)
        }
    }
})

module.exports = router