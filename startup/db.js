const mongoose = require('mongoose')
const config = require('config')
const dbPassword = config.get('mongoDbPassword')

module.exports = async () => {
    try {
        console.log(dbPassword)
        await mongoose.connect(`mongodb://simon:${dbPassword}@ds151247.mlab.com:51247/homemonitor`, {
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
    } catch (error) {
        console.log(`Could not connect to db: ${error}`)
    }

}
