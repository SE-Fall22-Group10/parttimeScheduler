const mongoose = require("mongoose");
const { Schema } = mongoose;

const RequestsSchema = new Schema({
    offerer: { type: String, required: true, text: true },
    grabbed: { type: Number, required: false, enum: [0,1],default:0 },
    taker: { type: String, required: false, text: true,default:"" }
});

module.exports = mongoose.model("requests", RequestsSchema);
