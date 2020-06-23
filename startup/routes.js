const graphqlHTTP = require('express-graphql')
const errorHandler = require('../middleware/errorHandler')
const tempRouter = require('../routes/temperature')
const soilMoistureRouter = require('../routes/soilMoisture')
const humidityRoter = require('../routes/humidity')
const schema = require('../gqlschema/gqlschema')
const auth = require('../middleware/auth')
module.exports = (app, express) => {

    app.use('/graphql', graphqlHTTP({
        schema,
        graphiql: true
    }))
    app.use(express.json())
    app.use('/api/temperature', tempRouter)
    app.use('/api/humidity', auth, humidityRoter)
    app.use('/api/soilmoisture', soilMoistureRouter)
    app.use(errorHandler)
}