const express = require('express')
const router = express.Router();

// const Joi = require('@hapi/joi')
// const schema = Joi.object({
//     name: Joi.string()
//         .min(3)
//         .max(15)
//         .required()
// })

router.delete('/', async (req, res, next) => {
    const name = req.query.name;
    if (!name) return res.status(400).send('Name required')

    try {
        const result = await Genre.deleteMany({ name })
        res.send(result)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    const validationResult = validate(req)
    if (validationResult.error) return res.status(400).send(validate.error)
    
    try {
        const genre = new Genre({ name: req.body.name })
        const result = await genre.save();
        res.send(JSON.stringify(genre))
    } catch (error) {
        next(error)
    }
})

router.get('/', (req, res) => {
    if (req.query.name) {
        Genre.find( {name: req.query.name} )
            .then(result => res.send(result))
        return;
    }
    Genre.find()
        .then(result => res.send(result))
        .cathch(err => res.status(400).send(err))
})
// const validate = req => {
//     return schema.validate(req.body)
// }
module.exports = router;




