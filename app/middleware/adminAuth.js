// Requiring JSONwebtoken
const jwt = require('jsonwebtoken')
const User = require('../models/user')

auth = (req, res, next) => {
    try{
        return next()
        const token = req.body.accessToken
        if(!token){
            // console.log(token)
            return res.status(400).send()
        }

    }catch(e){
        return res.status(500).send()
    }
}

module.exports = auth