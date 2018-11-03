let mongoose = require('mongoose');

let LocalSchema = new mongoose.Schema({
    recinto: String,
    descricao: String,    
    imagem_url: String,

    localizacao: { 
        type: { type: String },
        coordinates: []
    }
})

LocalSchema.index({"localizacao":"2dsphere"});

module.exports = mongoose.model('Local', LocalSchema)