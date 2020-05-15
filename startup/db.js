const mongoose = require('mongoose')
const config = require('config')
const dbPassword = config.get('mongoDb.mongoDbPassword')
const asyncHandler = require('../middleware/async')

module.exports = asyncHandler( async () => {
    await mongoose.connect(`mongodb+srv://simon:${dbPassword}@cluster0-tecp0.mongodb.net/MyMovies?retryWrites=true&w=majority`, {
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
})