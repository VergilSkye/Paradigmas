let express = require('express');
let router = express.Router();
let local = require("../controller/LocalConntroller");

router.get('/',(req,res)=>{
	local.list(req,res);
});

router.get('/show/:id', (req,res)=>{
	local.show(req, res);
})

router.post('/save',(req,res)=>{
	
	local.save(req,res);
	
})
router.post('/update/:id',(req,res)=>{	
	local.update(req,res);
})
router.post('/delete/:id',(req,res)=>{
	console.log("EEEEEEEEEE")
	local.delete(req,res)
})

module.exports= router;
