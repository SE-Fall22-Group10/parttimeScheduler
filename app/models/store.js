const mongoose = require("mongoose");
const { Schema } = mongoose;

const StoreSchema = new Schema({
    storeName: { type: String, required: true, text: true },
    supervisorEmail: { type: String, required: true, text: true },
    employees: [
        {
            employeeEmail: {
                type: String,
                required: true
            },
            stillWorksForStore: {
                type: Boolean,
                required: true
            }
        }
    ],
});

module.exports = mongoose.model("store", StoreSchema);
