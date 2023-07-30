require('dotenv').config()
const mongoose = require('mongoose')
const mongo = process.env.DATABASE
mongoose.connect(mongo, {
    dbName: "guestEntry"
}).then(console.log("Database Connected")).catch("Database Not Connected")