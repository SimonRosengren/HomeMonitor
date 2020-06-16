const express = require('express')
const router = express.Router();
const Humidity = require('../models/Humidity')

router.post('/', async (req, res, next) => {
    try {
        const hum = new Humidity({ date: Date.now(), humidity: req.body.humidity })
        const result = await hum.save();
        res.send(JSON.stringify(result))
    } catch (error) {
        next(error)
    }
})

// router.get('/', (req, res) => {
//     if (req.query.) {
//         Genre.find( {name: req.query.name} )
//             .then(result => res.send(result))
//         return;
//     }
//     Temperature.find()
//         .then(result => res.send(result))
//         .cathch(err => res.status(400).send(err))
// })

module.exports = router;




