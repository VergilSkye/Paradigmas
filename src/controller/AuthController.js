let jwt = require('jsonwebtoken');
const crypto = require('crypto');
var User = require('../db/models/users');
let config = require('../config/config');

let AuthController = {};

function generateToken(user) {  
    return jwt.sign(user.toJSON(), config.jwt_encryption, {
      expiresIn: 10080 // in seconds
    });
  }

AuthController.register = ((req, res) => {
    if (!req.body.email || !req.body.password) {
        
        res.json({
            success: false,
            message: 'Please enter email and password.'
        });
    } else {
        let newUser = new User({
            email: req.body.email,
            password: req.body.password,
            admin: req.body.admin
        });

        // Attempt to save the user
        newUser.save(function (err) {
            if (err) {
                return res.json({
                    success: false,
                    message: 'That email address already exists.'
                });
            }
            res.json({
                success: true,
                message: 'Successfully created new user.'
            });
        });
    }
});

AuthController.find = ((req, res) => {
    
    User.find().then((User) => {
       
		res.send({
			User
		});
	}, (e) => {       
        
		res.status(400).send(e);
	})
})

AuthController.auth = ((req, res) => {
    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) throw err;

        if (!user) {
            res.send({
                success: false,
                message: 'Authentication failed. User not found.'
            });
        } else {
            // Check if password matches
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    // Create token if the password matched and no error was thrown
                    var token = generateToken(user);
                    res.status(200).json({
                        success: true,
                        message: 'Authentication successfull',
                        token
                    });
                } else {
                    res.status(501).send({
                        success: false,
                        message: 'Authentication failed. Passwords did not match.'
                    });
                }
            });
        }
    });
});

module.exports = AuthController;