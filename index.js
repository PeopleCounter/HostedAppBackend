require('dotenv').config()
require('./dbConnection')
const { data } = require('./model/guestData')
const { pincode } = require('./model/validOTP')
const { guest } = require('./model/guestEntries')
const cors = require('cors')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Connected At Port ${PORT}`) })
app.use(cors({ origin: '*' }))
app.use(express.json())

app.post('/guest', async (req, res) => {
    if (req.body.passkey == process.env.ACCESSKEY) {
        try {
            const data_add = new data({
                name: req.body.name,
                number: req.body.number,
            })
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
    }
    else {
        res.status(403).send()
    }
})

app.get('/log/getGuestUsers', async (req, res) => {
    if (req.body.passkey == process.env.ACCESSKEY) {
        try {
            let result = await guest.find()
            res.status(200).json(result)
        }
        catch (err) {
            console.log(err)
            res.status(500).send()
        }
    }
    else {
        res.status(403).send()
    }
})