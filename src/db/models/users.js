let mongoose = require('mongoose');

let UsuarioSchema = new mongoose.Schema({
    privilegio: {
        type: String,
        enum: ['gerente', 'funcionario'],
        required: true,
        default: 'funcionario'
    },
    login: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Usuario', UsuarioSchema)