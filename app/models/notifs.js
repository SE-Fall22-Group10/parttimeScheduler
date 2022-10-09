const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotifsSchema = new Schema({
    notifMessage: { type: String, required: true, text: true},
		storeName: { type: String, required: true, text: true}
});

module.exports = mongoose.model("notifs", NotifsSchema);
