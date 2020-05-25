const express = require('express')
const router = express.Router();
const SoilMoisture = require('../models/SoilMoisture')

router.post('/', async (req, res, next) => {
    try {
        const moisture = new SoilMoisture({ plantId: req.body.plantId, moisture: req.body.moisture, date: Date.now() })
        await moisture.save();
        res.send(JSON.stringify(moisture))
    } catch (error) {
        next(error)
    }
})

router.get('/', async (req, res, next) => {
    try {
        const date = req.query.date
        if (date) {
            const result = await SoilMoisture.findOne( {date} )
            res.send(result);
        } 
        const result = await SoilMoisture.find();
        res.send( {result} )

    } catch (error) {
        next(error)
    }
})

module.exports = router;





