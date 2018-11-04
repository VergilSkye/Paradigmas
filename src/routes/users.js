const express = require('express');
const router = express.Router();
const passportService = require('../config/passport');
const passport = require('passport');

const user =  require('../controller/UserController');

const requireAuth = passport.authenticate('jwt', { session: false });  


// Register new users
router.post('/register',(req, res)=> {
    user.register(req,res);
});

router.get('/',(req, res)=> {           
    user.find(req,res);    
});

// Authenticate the user and get a JSON Web Token to include in the header of future requests.
router.post('/auth', (req, res) => {
    user.auth(req,res);
});

// Example of required auth: protect dashboard route with JWT
router.get('/dashboard', requireAuth, (req, res)=> {
    res.send('It worked! User id is: ' + req.user._id + '.' + req.user);
});
router.get('/me', requireAuth, (req, res)=> {
    res.send(req.user);
});

module.exports = router;