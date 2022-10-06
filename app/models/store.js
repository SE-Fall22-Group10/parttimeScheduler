const mongoose = require("mongoose");
const { Schema } = mongoose;

const StoreSchema = new Schema({
  store: {
    storeName: { type: String, required: true, text: true },
    supervisorId: { type: String, required: true, text: true },
    employees: { type: [String], required: false, text: true },
  },
});

module.exports = mongoose.model("store", StoreSchema);
