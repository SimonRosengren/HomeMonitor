const errorHandler = require('../middleware/errorHandler')
const tempRouter = require('../routes/temperature');
const soilMoistureRouter = require('../routes/soilMoisture')
const auth = require('../middleware/auth')
module.exports = (app, express) => {
    app.use(express.json())
    app.use(auth)
    app.use('/api/temperature', tempRouter)
    app.use('/api/soilmoisture', soilMoistureRouter)
    app.use(errorHandler)
}