
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../db/models/users');
const config = require('./config');
<<<<<<< HEAD:src/config/passport.js
const LocalStrategy = require('passport-local');
=======
>>>>>>> bcfc516d4b56c4c73f3692c848fad07852845ba9:src/config/passport.js


// Setup work and export for the JWT passport strategy
module.exports = function(passport) {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt_encryption
  };
  

  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload._id, function(err, user) {
      if (err) { return done(err, false); }
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }));
};
