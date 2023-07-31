require('dotenv').config()
const mongoose = require('mongoose')
const mongo = process.env.DATABASE
mongoose.connect(mongo, {
    dbName: "peoplecounter"
}).then(console.log("Database Connected")).catch("Database Not Connected")