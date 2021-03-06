const { ObjectID } = require('mongodb');
const Local = require('../db/models/local');
const _ = require('lodash');


let LocalController = {};
//Find All Locals
LocalController.list = ((req, res) => {
	
	Local.find().then((Local) => {
		res.send({
			Local
		});
	}, (e) => {
		res.status(400).send(e);
	})
	

})
//Show a specific Local with id
LocalController.show = ((req, res) => {
	const id = req.params.id;
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	Local.findById(id).then((Local) => {
		if (!Local) {
			res.status(404).send();
		}
		res.send({
			Local
		});
	}).catch((e) => {
		res.status(400).send(e);
	});
});
//I don't know
LocalController.create = ((req, res) => {
	res.render("Algo");
})
// Create a new Local
LocalController.save = ((req, res) => {

	const coordinates=[];
	const x = req.body.x || 0 ;
	const y = req.body.y || 0;
	

	const local = new Local({
		recinto: req.body.recinto,
		descricao: req.body.descricao,
		imagem_url: req.body.imagem_url,
		localizacao: {type:"Point", coordinates:[x,y] }
	});

	

	local.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	})

})

LocalController.find = ((req, res) => {
	const id = req.params.id;
	
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	Local.findOne({ _id: id })
		.then((Local) => {
			res.send({
				Local
			})
		})
		.catch((e) => {
			res.status(400).send(e);
		})
})

LocalController.update = ((req, res) => {
	const id = req.params.id;
	const coordinates=[];
	
	console.log(req.body.x + " EEEEEEEEEEEEE " + req.body.y)
	const body = _.pick(req.body,['recinto', 'descricao', 'imagem_url']);
	
	if(req.body.x != undefined && req.body.y !=undefined)
	{		
		body.localizacao ={type:"Point",coordinates:[req.body.x, req.body.y]}
	}		
	
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}	
	console.log(body.recinto + "eeeeeeeee")
	Local.findByIdAndUpdate(id, {$set:body}, {
			new: true
		}).then((Local) => {
			if (!Local) {
				return res.status(404).send()
			}
			res.send({
				Local
			})
		}).catch((e) => {
			res.status(400).send(e);
		})
});

LocalController.delete = ((req, res) => {
	const id = req.params.id;	
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	Local.findByIdAndRemove(id)
		.then((Locals) => {
			if (!Locals) {
				res.status(404).send();
			}
			res.send({
				Locals
			});
		}).catch((e) => {
			res.status(400).send(e);
		});

})

module.exports = LocalController;

