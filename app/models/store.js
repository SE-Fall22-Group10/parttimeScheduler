const mongoose = require('mongoose')
const { Schema } = mongoose

const StoreSchema = new Schema({
    storeName: { type: String, required: true, unique: true},
})

module.exports = mongoose.model('store', StoreSchema)