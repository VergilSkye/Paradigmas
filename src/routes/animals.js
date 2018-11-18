const express = require('express');
const router = express.Router();
const animal = require("../controller/AnimalController.js");

const requireAuth = require('../Utils/utils').requireAuth;

router.get('/',(req,res)=>{
	animal.list(req,res);
});

router.get('/:id', (req,res)=>{
	animal.show(req, res);
});

router.post('/',requireAuth, (req,res)=>{	
	animal.save(req,res);
});

router.patch('/:id',requireAuth ,(req,res)=>{	
	animal.update(req,res);
});

router.delete('/:id',requireAuth ,(req,res)=>{
	animal.delete(req,res);
});

module.exports= router;
