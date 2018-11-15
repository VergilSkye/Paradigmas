const express = require('express');
const router = express.Router();
const user =  require('../controller/UserController');

const requireAuth = require('../Utils/utils').requireAuth;
const requireAdmin = require('../Utils/utils').requireAdmin;

router.get('/',requireAuth,(req,res)=>{
    
	user.list(req,res);
});

router.get('/:id',requireAuth, (req,res)=>{
	user.show(req, res);
});

router.post('/',requireAuth, requireAdmin,(req,res)=>{	
	user.save(req,res);
});
router.patch('/:id',requireAuth, requireAdmin,(req,res)=>{	
	user.update(req,res);
});

router.delete('/:id',requireAuth ,requireAuth, requireAdmin,(req,res)=>{
	user.delete(req,res);
});

module.exports= router;