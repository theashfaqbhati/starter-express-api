const mongoose = require('mongoose')

const studentschema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    address:String
})

module.exports = mongoose.model('student',studentschema)