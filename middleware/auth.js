const apiPassword = process.env.API_PASSWORD

module.exports = (err, req, res, next) => {
    const key = req.get('x-api-key');
    if (key === apiPassword) {
        next();
    } else {
        res.status(403).send("Get outta here!")
    }
}