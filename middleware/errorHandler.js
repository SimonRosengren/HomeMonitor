module.exports = (err, req, res, next) => {
    //log err
    console.log(err)
    res.status(500).send("Something went åt helvete")
}