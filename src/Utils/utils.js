const express = require('express');
const router = express.Router();
//const passportService = require('../config/passport');
const passport = require('passport');

const Util={};


function requireAdmin(request, response, next) {    
    if (!request.user.admin) {
        response.json({message: 'Permission denied.' });   
          
    }   
    else{
        next()
    }    
}
Util.requireAuth = passport.authenticate('jwt', { session: false });
Util.requireAdmin = requireAdmin;


module.exports = Util;