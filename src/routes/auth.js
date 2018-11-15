const express = require('express');
const router = express.Router();
const passportService = require('../config/passport');
const passport = require('passport');

const userAuth =  require('../controller/AuthController');
const requireAuth = require('../Utils/utils').requireAuth;
const requireAdmin = require('../Utils/utils').requireAdmin;

// Register new userAuths
router.post('/register',requireAuth,requireAdmin,(req, res)=> {
    userAuth.register(req,res);
});

router.get('/',requireAuth,requireAdmin,(req, res)=> {           
    userAuth.find(req,res);    
});

// Authenticate the userAuth and get a JSON Web Token to include in the header of future requests.
router.post('/auth', (req, res) => {
    userAuth.auth(req,res);
});

// Example of required auth: protect dashboard route with JWT
router.get('/dashboard',requireAuth,(req, res)=>{ 
    res.send('It worked! User id is: ' + req.user._id + '.' + req.user); 
} );

router.get('/me', requireAuth,(req, res)=> {    
    res.send('It worked! User id is: ' + req.user._id + '.' + req.user);
    
    
});

router.get('/admin',requireAuth ,requireAdmin,(req, res)=> {    
    res.send('It worked! the Admin User id is: ' + req.user._id + '.' + req.user); 
    
});

module.exports = router;