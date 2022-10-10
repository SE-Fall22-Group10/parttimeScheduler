const express = require("express");
const router = express.Router();
const Store = require("../models/store");
const User = require("../models/user");
const Notif = require("../models/notifs");
const Reqs = require("../models/requests");
var authenticateToken = require("../middleware/authenticateToken");
var adminAuth = require("../middleware/adminAuth");
const auth = require("../middleware/authentication");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//POST-method
//Get all stores
router.post("/allNotifs", async (req, res) => {
  try {
    var notifs = await Notif.find();
    ans = []
    for(let note of notifs)
    {if(note['storeName']==req.body.storeName)
     ans.push(note)}
    res.status(200).send(ans);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

// POST-method
// Get all requests
router.post("/allRequests", adminAuth, async (req, res) => {
  try {
    var reqs = await Reqs.find();
    ans = []
    for(let r of reqs)
    {if(r['storeName']==req.body.storeName)
     ans.push(r)}
    res.status(200).send(ans);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

// POST-method
// Get open requests
router.post("/openrequests", async (req, res) => {
  try {
    var reqs = await Reqs.find();
    console.log(reqs);
    ans = [];
    for (let r of reqs) {
      if ((r["grabbed"] == 0 && r["storeName"]==req.body.storeName)) {
        ans.push(r)
      }
    }
    res.status(200).send(ans);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

// POST-method
// Get closed requests
router.post("/closedrequests", async (req, res) => {
    try {
      var reqs = await Reqs.find();
      ans = [];
      for (let r of reqs) {
        if ((r["grabbed"] == 1) && r["storeName"]==req.body.storeName) {
          ans.push(r)
        }
      }
      res.status(200).send(ans);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  });

module.exports = router;
