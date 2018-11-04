let express = require('express');
let router = express.Router();
let local = require("../controller/LocalConntroller");

router.get('/',(req,res)=>{
	local.list(req,res);
});

router.get('/:id', (req,res)=>{
	local.show(req, res);
})

router.post('/',(req,res)=>{
	
	local.save(req,res);
	
})
router.patch('/:id',(req,res)=>{	
	local.update(req,res);
})
router.delete('/:id',(req,res)=>{
	local.delete(req,res)
})

module.exports= router;
