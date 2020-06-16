const express = require('express')
const router = express.Router();
const Temperature = require('../models/Temperature')

router.post('/', async (req, res, next) => {
    try {
        const temp = new Temperature({ date: Date.now(), temperature: req.body.temperature })
        const result = await temp.save();
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




