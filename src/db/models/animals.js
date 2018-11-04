const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
    localizacao: {
        type: Schema.ObjectId,
        ref: 'Local',
        
    },
    classe: String,
    nome_cientifico: {
        type: String,        
        required: true
    },
    nome_popular: Array,
    imagem_url: String,
    sexo: {
        type: String,
        enum: ['macho', 'femea'],
        
    },
    data_nascimento: {
        type: Date,
        
    },
    descricao: String,
    nutricao: String,
    habitat: String,
    quantidade: Number,
    nomeIngles:String
})

module.exports = mongoose.model('Animal', AnimalSchema)