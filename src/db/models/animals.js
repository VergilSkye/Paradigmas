let mongoose = require('mongoose');

let AnimalSchema = new mongoose.Schema({
    localizacao: {
        type: Schema.ObjectId,
        ref: 'Local',
        required: true
    },
    classe: String,
    nome_cientifico: {
        type: String,
        unique: true,
        required: true
    },
    nome_popular: Array,
    imagem_url: String,
    sexo: {
        type: String,
        enum: ['macho', 'femea'],
        required: true
    },
    data_nascimento: {
        type: Date,
        required: true
    },
    descricao: String,
    nutricao: String,
    habitat: String
})

module.exports = mongoose.model('Animal', AnimalSchema)