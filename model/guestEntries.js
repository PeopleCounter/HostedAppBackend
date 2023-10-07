const mongoose = require('mongoose')

const guestData = new mongoose.Schema({
    name: String,
    number: Number
})

const guest = mongoose.model("guestdata", guestData)

module.exports = { guest }