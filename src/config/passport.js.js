
let JwtStrategy = require('passport-jwt').Strategy;
let ExtractJwt = require('passport-jwt').ExtractJwt;
let User = require('../db/models/users');
let config = require('../config/config');


// Setup work and export for the JWT passport strategy
module.exports = function(passport) {
  let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt_encryption
  };

  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findOne({
      id: jwt_payload.id
    }, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }));
};

/*const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const bcrypt = require('bcrypt');




const { secret } = CONFIG.jwt_encryption;

const UserModel = require('../db/models/users');

passport.use(new LocalStrategy({
  usernameField: email,
  passwordField: password,  
}, async (username, password, done) => {
  try {
    const userDocument = await UserModel.findOne({username: username}).exec();
    const passwordsMatch = await bcrypt.compare(password, userDocument.passwordHash);

    if (passwordsMatch) {
      return done(null, userDocument);
    } else {
      return done('Incorrect Username / Password');
    }
  } catch (error) {
    done(error);
  }
}));

passport.use(new JWTStrategy({
    jwtFromRequest: req => req.cookies.jwt,
    secretOrKey: secret,
  },
  (jwtPayload, done) => {
    if (jwtPayload.expires > Date.now()) {
      return done('jwt expired');
    }

    return done(null, jwtPayload);
  }
));*/