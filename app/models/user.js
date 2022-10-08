const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate(value) {
      if (validator.isEmail(value) === false) {
        throw new Error("Email id incorrect or not in supported format!");
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Employee", "Supervisor"],
    required: true,
  },
  shifts : [
    { 
      shiftFrom: {
        type: Date,
        required: true
      },
      shiftTill: {
        type: Date,
        required: true
      },
      storeName: {
        type: String,
        required: true
      },
      shiftToggle: {
        type: Number,
        required: false,
        default: 0,
        enum: [0,1]
      },
      bidderList: {
        type: [String],
        required: false,
        default: []
      }
    }
  ]
});

module.exports = mongoose.model("user", UserSchema);
