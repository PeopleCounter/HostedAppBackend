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

app.post('/guest', async (req, res) => {
    console.log(process.env.DATABASE)
    console.log(req.body)
    if (req.body.passkey != "18bc8b13c1958ece155ba87ba131bb834cb2764982a034d682f328ee8cd2d00a") {
        console.log("Not Matching")
        console.log(typeof ("18bc8b13c1958ece155ba87ba131bb834cb2764982a034d682f328ee8cd2d00a"))
        console.log(req.body.passkey)
        console.log(typeof (req.body.passkey))
    }
    console.log(req.body.passkey == "18bc8b13c1958ece155ba87ba131bb834cb2764982a034d682f328ee8cd2d00a")
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