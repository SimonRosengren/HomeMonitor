const mongoose = require('mongoose')

const schema = mongoose.Schema({
    date: String,
    humidity: Number
})
const Humidity = mongoose.model('Humidity', schema);
module.exports = Humidity;