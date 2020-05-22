const apiPassword = process.env.API_PASSWORD

module.exports = (req, res, next) => {
    const key = req.get('x-api-key');

    if (key === apiPassword) {
        next();
    } else {
        res.status(403).send("Get outta here!")
    }
}


//char* request = "POST /api/soilmoisture HTTP/1.1\r\nHost: https://simon-rosengren-home-monitor.herokuapp.com\r\ncontent-type: application/json\r\nx-api-key: abcdefg123456789\r\n{\n\"plantId\": 1,\n\"moisture\": 600\n}";
