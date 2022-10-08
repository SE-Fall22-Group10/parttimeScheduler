const express = require("express");
const router = express.Router();
const User = require("../models/user");
var authenticateToken = require("../middleware/authenticateToken");
var adminAuth = require("../middleware/adminAuth");
const auth = require("../middleware/authentication");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");

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
      storeName: storeName,
    };
    // console.log(sch);

    if (!shiftFrom || !shiftTill) {
      return res.status(400).send("Time not in required format!");
    }
    // Send response in here
    var f = await User.findOne({ email: req.body.email });
    f.shifts.push(sch);
    await f.save();
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

// POST-method
// update shift details for a user
router.post("/updateShift", async (req, res) => {
    try{
        const shiftFrom = Date.parse(req.body.shiftFrom);
        const shiftTill = Date.parse(req.body.shiftTill);
        const storeName = req.body.storeName;
        const shiftId = req.body.shiftId;
        const sch = { 
            shiftFrom: shiftFrom, 
            shiftTill: shiftTill,
            storeName: storeName
        };
        
        if (!shiftFrom || !shiftTill) {
            return res.status(400).send("Time not in required format!");
        }
        var f = await User.findOne({email: req.body.email});
        for(let shift of f["shifts"]){
            // console.log(shift["_id"] == shiftId);
            if(shift["_id"] == shiftId){
                shift["shiftFrom"] = shiftFrom;
                shift["shiftTill"] = shiftTill;
                shift["storeName"] = storeName;
                break;               
            }
        }
        f.save()
        res.status(200).send(f);
    }catch (e) {
        if (e.code === 11000) {
            res.status(409).send({ Message: "Shift not found" });
        } else {
        console.log(e);
        res.status(400).send(e);
        }
    }
});

//POST-method
//Offer Shift to Bidders or Traders
router.post("/offerShift", async (req, res) => {
  try {
    console.log(req.body);
    const shiftId = req.body.shiftId;
    var f = await User.findOne({ email: req.body.email });
    for(let shift of f["shifts"]){
      // console.log(shift["_id"] == shiftId);
      if(shift["_id"] == shiftId){
          shift["shiftToggle"] = 1;
          break;               
      }
  }
    //send index instead of obj id
    await f.save();
    res.status(200).send(f);
  } catch (e) {
    if (e.code === 11000) {
      res.status(409).send({ Message: "Shift not found" });
    } else {
      console.log(e);
      res.status(400).send(e);
    }
  }
});

//POST-method
//Apply for bidding
router.post("/applyBid", async (req, res) => {
  try {
    console.log(req.body);
    const shiftId = req.body.shiftId;
    const takeremail = req.body.takeremail;
    var f = await User.findOne({ email: req.body.email });
    var sch = 0;
    for(let shift of f["shifts"]){
      // console.log(shift["_id"] == shiftId);
      if(shift["_id"] == shiftId){
          sch = {
           shiftFrom: shift["shiftFrom"],
           shiftTill: shift["shiftTill"],
           storeName: shift["storeName"],  
          };
          f["shifts"].pop(shift);
          break;               
      }
  }
  var g = await User.findOne({ email: takeremail});
  console.log(f);
  console.log(g);
  g.shifts.push(sch);
    //send index instead of obj id
    await f.save();
    await g.save();
    console.log(f);
    console.log(g);
    res.status(200).send(f);
  } catch (e) {
    if (e.code === 11000) {
      res.status(409).send({ Message: "Shift not found" });
    } else {
      console.log(e);
      res.status(400).send(e);
    }
  }
});

//POST-method
//Trade shifts with another employee
router.post("/tradeShift", async (req, res) => {
  try {
    var f = await User.findOne({ email: req.body.email1 });
    var g = await User.findOne({ email: req.body.email2 });
    var ff = f.shifts;
    var gg = g.shifts;
    if (ff[req.body.indexOfShift1].storeName != gg[req.body.indexOfShift2].storeName) {
      return res.status(400).send("Shift exchange not authorized!");
    }

    [ff[req.body.indexOfShift1].shiftFrom, gg[req.body.indexOfShift2].shiftFrom] = [gg[req.body.indexOfShift2].shiftFrom,ff[req.body.indexOfShift1].shiftFrom];
    
    [ff[req.body.indexOfShift1].shiftTill, gg[req.body.indexOfShift2].shiftTill] = [gg[req.body.indexOfShift2].shiftTill,ff[req.body.indexOfShift1].shiftTill];
    ff[req.body.indexOfShift1].shiftToggle = 0;
    gg[req.body.indexOfShift2].shiftToggle = 0;
    //send index instead of obj id
    await f.save();
    await g.save();
    res.status(200).send("done");
  } catch (e) {
    if (e.code === 11000) {
      res.status(409).send({ Message: "Shift not found" });
    } else {
      console.log(e);
      res.status(400).send(e);
    }
  }
});

//DELETE-method
//remove shift
router.delete("/removeShift", async (req, res) => {
  try {
    console.log(req.body);
    const shiftId = req.body.shiftId;
    var f = await User.findOne({ email: req.body.email });
    for(let shift of f["shifts"]){
      if(shift["_id"] == shiftId){
          f["shifts"].pop(shift);
          console.log(shift);
          break;               
      }
  }
    //send index instead of obj id
    await f.save();
    res.status(200).send(f);
  } catch (e) {
    if (e.code === 11000) {
      res.status(409).send({ Message: "Shift not found" });
    } else {
      console.log(e);
      res.status(400).send(e);
    }
  }
});

module.exports = router;
