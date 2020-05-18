const mongoose = require('mongoose')
const config = require('config')
const dbPassword = config.get('mongoDb.mongoDbPassword')

module.exports = async () => {
    await mongoose.connect(`mongodb://simon:${dbPassword}@ds119150.mlab.com:19150/homemonitor`, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    console.log("Connected to DB...")
    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('Connection to database has been closed.');
            process.exit(0);
        });
    });
}