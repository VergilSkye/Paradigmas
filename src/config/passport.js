
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../db/models/users');
const config = require('./config');
const LocalStrategy = require('passport-local');


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