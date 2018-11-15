// old const validator = require('validator');
// old const passportLocalMongoose = require('passport-local-mongoose');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const UsuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        index: true,
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
    admin: {
        type:Boolean,
        default:false
    },
    resetPasswordToken: { type: String },    
});

// Hash the user's password before inserting a new user
UsuarioSchema.pre('save', function(next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
      bcrypt.genSalt(10, function(err, salt) {
        if (err) {
          return next(err);
        }
        bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) {
            return next(err);
          }
          user.password = hash;
          next();
        });
      });
    } else {
      return next();
    }
  });
  
  // Compare password input to password saved in database
  UsuarioSchema.methods.comparePassword = function(pw, cb) {
    bcrypt.compare(pw, this.password, function(err, isMatch) {
      if (err) {
        return cb(err);
      }
      cb(null, isMatch);
    });
  };

module.exports = mongoose.model('Usuario', UsuarioSchema);


