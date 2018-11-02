let mongoose = require('mongoose');

let LocalSchema = new mongoose.Schema({
    recinto: String,
    descricao: String,
    latitude: Number,
    longitude: Number,
    imagem_url: String
})

module.exports = mongoose.model('Local', LocalSchema)