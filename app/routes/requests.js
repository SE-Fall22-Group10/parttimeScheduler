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

//GET-method
//Get all stores
router.get("/allnotifs", adminAuth, async (req, res) => {
  try {
    var notifs = await Notif.find();
    res.status(200).send(JSON.stringify(notifs));
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

// GET-method
// Get all requests
router.get("/allnotifs", adminAuth, async (req, res) => {
  try {
    var reqs = await Reqs.find();
    res.status(200).send(JSON.stringify(reqs));
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

// GET-method
// Get open requests
router.get("/openrequests", adminAuth, async (req, res) => {
  try {
    var reqs = await Reqs.find();
    console.log(reqs);
    ans = [];
    for (let req of reqs) {
      if ((req["grabbed"] == 0)) {
        ans.push(req)
      }
    }
    res.status(200).send(ans);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

// GET-method
// Get closed requests
router.get("/closedrequests", adminAuth, async (req, res) => {
    try {
      var reqs = await Reqs.find();
      ans = [];
      for (let req of reqs) {
        if ((req["grabbed"] == 1)) {
          ans.push(req)
        }
      }
      res.status(200).send(ans);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  });

module.exports = router;
