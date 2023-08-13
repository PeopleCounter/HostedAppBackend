require('dotenv').config()
require('./dbConnection')
const { data } = require('./model/guestData')
const { pincode } = require('./model/validOTP')
const cors = require('cors')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Connected At Port ${PORT}`) })
app.use(cors({ origin: '*' }))
app.use(express.json())

console.log(process.env.DATABASE)
console.log(process.env.ACCESSKEY)

app.post('/guest', async (req, res) => {
    console.log(req.body)
    console.log(req.body.passkey)
    if (req.body.passkey == process.env.ACCESSKEY) {
        console.log("ACCESSKEY")
    }
    if (req.body.passkey == process.env.ACCESS) {
        console.log("ACCESS")
    }
    if (req.body.passkey == process.env.PASSKEY) {
        console.log("PASSKEY")
    }
    try {
        const data_add = new data({
            name: req.body.name,
            number: req.body.number,
        })
        console.log(req.body)
        await data_add.save()
        const pincode_add = new pincode({
            pincode: req.body.pincode
        })
        await pincode_add.save()
        res.status(200).send()
    }
    catch (err) {
        console.log(err)
        res.status(500).send()
    }
    res.status(200).send()
})