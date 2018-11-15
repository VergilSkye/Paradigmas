const express = require('express');
const router = express.Router();
const local = require("../controller/LocalConntroller");

const requireAuth = require('../Utils/utils').requireAuth;


router.get('/',(req,res)=>{
	local.list(req,res);
	
});

router.get('/:id', (req,res)=>{
	local.show(req, res);
});

router.post('/',requireAuth,(req,res)=>{	
	local.save(req,res);	
});

router.patch('/:id',requireAuth,(req,res)=>{	
	local.update(req,res);
});

router.delete('/:id',requireAuth,(req,res)=>{
	local.delete(req,res)
});

module.exports= router;
