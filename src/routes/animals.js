let express = require('express');
let router = express.Router();
let animal = require("../controller/AnimalController.js");

router.get('/',(req,res)=>{
	animal.list(req,res);
});

router.get('/show/:id', (req,res)=>{
	animal.show(req, res);
})

router.post('/save',(req,res)=>{
	animal.save(req,res);
})

module.exports= router;
