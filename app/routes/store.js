const express = require("express");
const router = express.Router();
const Store = require("../models/store");
var authenticateToken = require("../middleware/authenticateToken");
var adminAuth = require("../middleware/adminAuth");
const auth = require("../middleware/authentication");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//GET-method
//Get all stores
router.get("/stores", adminAuth, async (req, res) => {
  try {
    var stores = await Store.find();
    res.status(200).send(JSON.stringify(stores));
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

// GET-method
// Get all details of one store
router.post("/getStoreDetails", async (req, res) => {
  try {
    // var store = await Store.findOne({storeName: req.body.storeName})
    // res.status(200).send(JSON.stringify(store))
    var id = req.body.storeId;
    Store.findById(id, function (err, store) {
      if (err) {
        console.log(err);
        res.status(400).send({ Message: "Invalid storeId" });
      } else if (store == null) {
        res.status(409).send({ Message: "Store not found" });
      } else {
        res.status(200).send(store);
      }
    });
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

// POST-method
// Add a store
router.post("/addStore", adminAuth, async (req, res) => {
  try {
    const { storeName, supervisorEmail } = req.body;
    if (!storeName || !supervisorEmail) {
      return res
        .status(400)
        .send({ Message: "Store Name or supervisor email cannot be empty!" });
    }

    // Creating Store object.
    var store = new Store({
      storeName,
      supervisorEmail,
    });

    //Saving Store object to the db.
    await store.save();
    res.status(201).send({ Message: "Store Added" });
  } catch (e) {
    if (e.code === 11000) {
      res.status(409).send({ Message: "Store Already Exists" });
    } else {
      console.log(e);
      res.status(400).send(e);
    }
  }
});

// POST-method
// Add a employee to store
router.post("/addEmployeeToStore", adminAuth, async (req, res) => {
  try {
    const { employeeEmail } = req.body;
    if (!employeeEmail) {
      return res
        .status(400)
        .send({ Message: "Employee email cannot be empty!" });
    }
    var f = await Store.findOne({ storeName: req.body.storeName });
    console.log(f);
    var emailAlreadyExists = false;
    f.employees.forEach((employee) => {
      var email = employee.employeeEmail;
      console.log(email);
      if (email == employeeEmail) {
        emailAlreadyExists = true;
      }
    });
    if (!emailAlreadyExists) {
      f.employees.push({
        employeeEmail: employeeEmail,
        stillWorksForStore: true,
      });
      await f.save();
      res.status(200).send(f);
    } else {
      res.status(409).send({ Message: "User Already Exists" });
    }
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
