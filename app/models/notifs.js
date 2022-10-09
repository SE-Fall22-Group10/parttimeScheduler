const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotifsSchema = new Schema({
    notifMessage: { type: String, required: false, text: true, default:"" }
});

module.exports = mongoose.model("notifs", NotifsSchema);
