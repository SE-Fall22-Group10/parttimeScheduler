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
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Employee", "Supervisor"],
    required: true,
  },      
  totalShiftHours:{
    type: Number,
    required: false,
    default: 0,
  },
  shifts :[{
    weekNumber:{ type: Number,
      required: false,
      default: 0},
    shiftArray:[{
      shiftFrom: {
        type: Date,
        required: false
      },
      shiftTill: {
        type: Date,
        required: false
      },
      storeName: {
        type: String,
        required: false
      },
      shiftHours: {
        type: Number,
        required: false
      },
      shiftForGrabsStatus: {
        type: String,
        required: true,
        default: "Not for grabs",
        enum: ["Not for grabs", "Up for grabs", "Shift taken"]
      }}
    ]
    }   ]   
    
});

module.exports = mongoose.model("user", UserSchema);
