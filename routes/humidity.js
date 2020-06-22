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

router.get('/', async (req, res, next) => {
    try {
        const date = req.query.date
        if (date) {
            const result = await Humidity.findOne({ date })
            res.send(result);
        }
        const result = await Humidity.find();
        res.send({ result })

    } catch (error) {
        next(error)
    }
})

router.get('/latest', async (req, res, next) => {
    try {
        let before = new Date(Date.now());
        before.setMinutes(before.getMinutes() - 2); // 2 minutes should always give atleast one entry
        console.log(before.getTime());

        const humidity = await Humidity.find(
            {
                date: { $gte: before.getTime() }
            })
        .sort({ date: 'desc' })
        .lean()
        .exec();
        
        res.send(humidity[0]);

    } catch (error) {
        next(error)
    }
})

module.exports = router;




