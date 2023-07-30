const mongoose = require('mongoose')
const validPincode = new mongoose.Schema({
    pincode: Number,
})

const pincode = mongoose.model("validPincode", validPincode)

module.exports = { pincode }