const errorHandler = require('../middleware/errorHandler')
const temperatureRouter = require('../routes/temperature');
module.exports = (app, express) => {
    app.use(express.json())
    app.use('api/temperature', temperatureRouter)
    app.use(errorHandler)
}