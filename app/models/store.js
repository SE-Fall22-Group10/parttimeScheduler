const mongoose = require("mongoose");
const { Schema } = mongoose;

const StoreSchema = new Schema({
    storeName: { type: String, required: true, text: true },
    supervisorEmail: { type: String, required: true, text: true },
    employeeEmails: { type: [String], required: false, text: true },
});

module.exports = mongoose.model("store", StoreSchema);
