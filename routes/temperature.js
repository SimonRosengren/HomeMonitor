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

router.get('/', async (req, res, next) => {
    try {
        const date = req.query.date
        if (date) {
            const result = await Temperature.findOne({ date })
            res.send(result);
        }
        const result = await Temperature.find();
        res.send({ result })

    } catch (error) {
        next(error)
    }
})

router.get('/latest', async (req, res, next) => {
    try {
        let before = new Date(Date.now());
        before.setMinutes(before.getMinutes() - 2); // 2 minutes should always give atleast one entry

        const temperature = await Temperature.find(
            {
                date: { $gte: before.getTime() }
            })
        .sort({ date: 'desc' })
        .lean()
        .exec();
        
        res.send(temperature[0]);

    } catch (error) {
        next(error)
    }
})

module.exports = router;




