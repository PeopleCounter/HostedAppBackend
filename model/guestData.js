const mongoose = require('mongoose')
const guestData = new mongoose.Schema({
    name: String,
    number: Number,
})

const data = mongoose.model("guestData", guestData)

module.exports = { data }