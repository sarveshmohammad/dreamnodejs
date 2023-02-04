const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    MoNumber:String
})
module.exports = new mongoose.model('person',studentSchema);