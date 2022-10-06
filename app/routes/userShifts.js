const express = require("express");
const router = express.Router();
const User = require("../models/user");
var authenticateToken = require("../middleware/authenticateToken");
var adminAuth = require("../middleware/adminAuth");
const auth = require("../middleware/authentication");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//POST-method
//Add shift to user object
router.post("/addShift", async (req, res) => {
    try {
        console.log(req.body);
        const shiftFrom = Date.parse(req.body.shiftFrom);
        const shiftTill = Date.parse(req.body.shiftTill);
        const storeName = req.body.storeName;
        const sch = { 
            shiftFrom: shiftFrom, 
            shiftTill: shiftTill,
            storeName: storeName
        };
        // console.log(sch);

        if (!shiftFrom || !shiftTill) {
            return res.status(400).send("Time not in required format!");
            }
      // Send response in here
        var f =await User.findOne({email: req.body.email});
        f.shifts.push(sch);
        await f.save()
        res.status(200).send(f);
    } catch (e) {
        if (e.code === 11000) {
            res.status(409).send({ Message: "User Already Exists" });
        } else {
            console.log(e);
            res.status(400).send(e);
        }
    }
});

module.exports = router;