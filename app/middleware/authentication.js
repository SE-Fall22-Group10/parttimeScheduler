const bcrypt = require('bcryptjs')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

userLogin = async(req, res, next) => {
    const {
        email,
        password,
        role
    } = req.body

    const user = await User.findOne({ email })
    if(!user){
        return res.status(404).send('Cannot Find User')
    }
    try{
        if(!await bcrypt.compare(password, user.password)){
            return res.status(400).send('Cannot Find User')
        }
        var accessTokenUser = {
            email: user.email,
            password: user.password
        }
        const accessToken = jwt.sign(JSON.stringify(accessTokenUser), secrets.JWT_SECRET_TOKEN)
        // req.session.accessToken = accessToken
        req.accessToken = accessToken
        // console.log(req.session)
        res.status(200)
        next()
    }catch(e){
        console.log(e)
        return res.status(500).send()
    }
}

module.exports = userLogin