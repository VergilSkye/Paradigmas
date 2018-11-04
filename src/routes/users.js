
var express = require('express');
var router = express.Router();
const passport = require('passport');


let user =  require('../controller/UserController');


// Register new users
router.post('/register',(req, res)=> {
    user.register(req,res);
});

router.get('/',(req, res)=> {  
    console.log("primerio");
         
    user.find(req,res);
    
});

// Authenticate the user and get a JSON Web Token to include in the header of future requests.
router.post('/auth', (req, res) => {
    user.auth(req,res);
});

// Example of required auth: protect dashboard route with JWT
router.get('/dashboard', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    res.send('It worked! User id is: ' + req.user._id + '.');
});

module.exports = router;