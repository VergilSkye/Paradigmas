const mongoose = require('mongoose');

const LocalSchema = new mongoose.Schema({
    recinto: String,
    descricao: String,
    imagem_url: String,

    localizacao: {
        type: {
            type: String,          
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            
        }
    }
})

LocalSchema.index({ "localizacao": "2dsphere" });

module.exports = mongoose.model('Local', LocalSchema)