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
  shifts : Array
});

module.exports = mongoose.model("user", UserSchema);
