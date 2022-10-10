const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Store = require("../models/store");
const Req = require("../models/requests");
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
    const shiftFrom = new Date(req.body.shiftFrom);
    const shiftTill = new Date(req.body.shiftTill);
    const storeName = req.body.storeName;
    var weekNumber = 4 * shiftFrom.getMonth() + ~~(shiftFrom.getDate() / 7) + 1;
    const sch = {
      weekNumber: weekNumber,
      shiftArray: [
        {
          shiftFrom: shiftFrom,
          shiftTill: shiftTill,
          shiftHours: shiftTill.getHours() - shiftFrom.getHours(),
          storeName: storeName,
        },
      ],
    };
    const sch1 = {
      shiftFrom: shiftFrom,
      shiftTill: shiftTill,
      shiftHours: shiftTill.getHours() - shiftFrom.getHours(),
      storeName: storeName,
    };

    // console.log(sch);

    if (!shiftFrom || !shiftTill) {
      return res.status(400).send({ Message: "Time not in required format!" });
    }
    // Send response in here
    var f = await User.findOne({ email: req.body.email });
    var flag = 0;
    for (let shift of f["shifts"]) {
      if (shift["weekNumber"] == weekNumber) {
        shift["shiftArray"].push(sch1);
        flag = 1;
      }
    }
    if (flag == 0) {
      f.shifts.push(sch);
    }
    f.totalShiftHours += shiftTill.getHours() - shiftFrom.getHours();
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
        const weekNumber = req.body.weekNumber;
        const shiftFrom = new Date(req.body.shiftFrom);
        const shiftTill = new Date(req.body.shiftTill);
        const storeName = req.body.storeName;
        const shiftId = req.body.shiftId;
        var newWeekNumber = 4*shiftFrom.getMonth()+~~(shiftFrom.getDate()/7)+1;
        const sch = {
          weekNumber: newWeekNumber,
          shiftArray:[{
          "shiftFrom": shiftFrom,
          "shiftTill": shiftTill,
          "shiftHours": shiftTill.getHours()-shiftFrom.getHours(),
          "storeName": storeName}]
        };
        const sch1 = {
          "shiftFrom": shiftFrom,
          "shiftTill": shiftTill,
          "shiftHours": shiftTill.getHours()-shiftFrom.getHours(),
          "storeName": storeName
        }
        
        if (!shiftFrom || !shiftTill) {
            return res.status(400).send({Message: "Time not in required format!"});
        }
        var f = await User.findOne({email: req.body.email});
        for(let weekly of f["shifts"]){
            // console.log(shift["_id"] == shiftId);
            if(weekly["weekNumber"] == weekNumber){
              for(let shift of weekly["shiftArray"]){
                if(shift["_id"] == shiftId){
                  console.log(newWeekNumber);
                  // check if the new weekNumber is same as the current weeknumber
                  console.log(f["shifts"]);
                  if(newWeekNumber == weekNumber){       
                    // console.log("if yes, just update the shift");            
                    shift["shiftFrom"] = shiftFrom;
                    shift["shiftTill"] = shiftTill;
                    shift["storeName"] = storeName;
                    shift["shiftHours"] = shiftTill.getHours()-shiftFrom.getHours();
                  }else{
                    // console.log("if no, remove the shift from the week, and add the shift into the user");
                    weekly["shiftArray"].pop(shift);

                    var flag = 0;
                    for(let matchShift of f["shifts"]){
                      console.log(newWeekNumber, "new");
                      console.log(matchShift["weekNumber"]);
                      if(matchShift['weekNumber'] == newWeekNumber){
                        console.log("pushing");
                        matchShift['shiftArray'].push(sch1);
                        flag=1;
                      }
                    }
                    if(flag==0){
                      f.shifts.push(sch);

                    }
                  }
                  break;               
                }
              }
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
    const shiftId = ObjectId(req.body.shiftId);
    const weekNumber = req.body.weekNumber;
    var f = await User.findOne({ email: req.body.email });
    for(let weekly of f["shifts"]){
      if(weekly["weekNumber"] == weekNumber){
        for(let shift of weekly["shiftArray"]){
          if(shift["_id"] == shiftId){
              shift["shiftForGrabsStatus"] = "Up for grabs";
              var reqs = new Req({
                offerer: req.body.email,
                grabbed: 0          });
              await reqs.save();
              console.log(reqs)
              break;               
          }
        }
      }
    }
    //Saving Req object to the db.
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
    // console.log(req.body);
    const shiftId = ObjectId(req.body.shiftId);
    const takerEmail = req.body.takerEmail;
    const weekNumber = req.body.weekNumber;
    var f = await User.findOne({ email: req.body.giverEmail });
    var sch = 0;
    for(let weekly of f["shifts"]){
      if(weekly["weekNumber"] == weekNumber){
        for(let shift of weekly["shiftArray"]){
          if(shift["_id"] == shiftId){
            shift["shiftForGrabsStatus"] = "Shift taken";
            var reqs = await Req.findOne({ shift: Object(shift) });
            reqs["grabbed"] = 1;
            reqs["taker"] = takerEmail;
            await reqs.save();
            break;
          }
        }
      }
    }
    var g = await User.findOne({ email: takerEmail });
    console.log(f);
    console.log(g);
    g.shifts.push(sch);
    
    //Saving Req object to the db.
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
    if (
      ff[req.body.indexOfShift1].storeName !=
      gg[req.body.indexOfShift2].storeName
    ) {
      return res
        .status(400)
        .send({ Message: "Shift exchange not authorized!" });
    }

    [
      ff[req.body.indexOfShift1].shiftFrom,
      gg[req.body.indexOfShift2].shiftFrom,
    ] = [
      gg[req.body.indexOfShift2].shiftFrom,
      ff[req.body.indexOfShift1].shiftFrom,
    ];

    [
      ff[req.body.indexOfShift1].shiftTill,
      gg[req.body.indexOfShift2].shiftTill,
    ] = [
      gg[req.body.indexOfShift2].shiftTill,
      ff[req.body.indexOfShift1].shiftTill,
    ];
    ff[req.body.indexOfShift1].shiftForGrabsStatus = "Not for grabs";
    gg[req.body.indexOfShift2].shiftForGrabsStatus = "Not for grabs";
    //send index instead of obj id
    await f.save();
    await g.save();
    res.status(200).send({ Message: "Done" });
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
    for (let shift of f["shifts"]) {
      if (shift["_id"] == shiftId) {
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

// POST-method
// Remove an employee from the store
router.post("/removeEmployeeFromStore", adminAuth, async (req, res) => {
  try {
    const { employeeEmail, storeName } = req.body;
    var user = await User.findOne({ email: employeeEmail });
    if (user != null) {
      for (let shift of user["shifts"]) {
        if (shift["storeName"] == storeName) {
          shift["shiftToggle"] = 1;
        }
      }
      await user.save();
      var store = await Store.findOne({ storeName: storeName });
      if (store != null) {
        for (let employee of store["employees"]) {
          console.log(employee.employeeEmail, employeeEmail);
          if (employee["employeeEmail"] === employeeEmail)
            employee.stillWorksForStore = false;
        }
        await store.save();
        res.status(200).send({ Message: "User removed" });
      } else {
        res.status(409).send({ Message: "Store not found" });
      }
    } else {
      res.status(409).send({ Message: "User does not work for the store" });
    }
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
