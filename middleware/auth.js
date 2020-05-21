const config = require('config')
const apiPassword = config.get('api.password')

module.exports = (err, req, res, next) => {
    const key = req.get('api-key');
    if (key === apiPassword) {
        next();
    } else {
        res.status(403).send("Get outta here!")
    }
}