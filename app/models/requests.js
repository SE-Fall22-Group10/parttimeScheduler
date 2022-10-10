const mongoose = require("mongoose");
const { Schema } = mongoose;

const RequestsSchema = new Schema({
    offerer: { type: String, required: true, text: true },
    grabbed: { type: Number, required: false, enum: [0,1],default:0 },
    storeName: { type: String, required: false, text: true,default:"" },
    taker: { type: String, required: false, text: true },
    weekNumber: { type: Number, required: false,default:0 },
    shift: { type: Object, required: false, text: true}
});

module.exports = mongoose.model("requests", RequestsSchema);
