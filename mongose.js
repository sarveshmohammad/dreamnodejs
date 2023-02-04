const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:String,
    class:String,
    address:String
})
module.exports = new mongoose.model('khan',studentSchema);