const mongoose = require('mongoose')

const schema = mongoose.Schema({
    date: String,
    temperature: Number
})
const Temperature = mongoose.model('Temperature', schema);
module.exports = Temperature;