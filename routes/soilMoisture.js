const express = require('express')
const router = express.Router();
const SoilMoisture = require('../models/SoilMoisture')

router.post('/', async (req, res, next) => {
    try {
        const moisture = new SoilMoisture({ platId: req.body.platId, moisture: req.body.moisture, date: req.body.date })
        await temp.save();
        res.send(JSON.stringify(moisture))
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





