let mongoose = require('mongoose');

let Sample = new mongoose.Schema({
    nome:String,
    numero:Number,
    sobre:String  
});



module.exports = mongoose.model('Sample', Sample);