const express = require('express');
const router = express.Router();
const animal = require("../controller/AnimalController.js");

router.get('/',(req,res)=>{
	animal.list(req,res);
});

router.get('/:id', (req,res)=>{
	animal.show(req, res);
});

router.post('/',(req,res)=>{	
	animal.save(req,res);
});

router.patch('/:id',(req,res)=>{	
	animal.update(req,res);
});

router.delete('/:id',(req,res)=>{
	animal.delete(req,res);
});

module.exports= router;
