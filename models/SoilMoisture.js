const mongoose = require('mongoose')

const schema = mongoose.Schema({
    plantId: String,
    moisture: Number,
    date: String
})
const SoilMoisture = mongoose.model('SoilMoisture', schema);
module.exports = SoilMoisture;