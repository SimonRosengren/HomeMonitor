const errorHandler = require('../middleware/errorHandler')
const tempRouter = require('../routes/temperature');
const soilMoistureRouter = require('../routes/soilMoisture')
const auth = require('../middleware/auth')
module.exports = (app, express) => {
    // Allow CORS
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, application/json, x-api-key');
        // intercept OPTIONS method
        if ('OPTIONS' == req.method) {
            res.send(200);
        }
        else {
            next();
        }
    });
    app.use(express.json())
    app.use(auth)
    app.use('/api/temperature', tempRouter)
    app.use('/api/soilmoisture', soilMoistureRouter)
    app.use(errorHandler)
}