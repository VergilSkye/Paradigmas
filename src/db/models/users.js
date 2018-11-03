const mongoose = require('mongoose');
const validator = require('validator');

const UsuarioSchema = new mongoose.Schema({
  

    email: {
        type: String,
        require: true,
        lowercase: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6,
        trim: true,
    },

    adm: Boolean,
})

module.exports = mongoose.model('Usuario', UsuarioSchema)