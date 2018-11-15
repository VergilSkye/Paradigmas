const { ObjectID } = require('mongodb');
const Animal = require('../db/models/animals');
const _ = require('lodash');



let AnimalController = {};
//Find All animals
AnimalController.list = ((req, res) => {
	Animal.find().then((Animal) => {
		res.send({
			Animal
		});
	}, (e) => {
		res.status(400).send(e);
	})
})
//Show a specific animal with id
AnimalController.show = ((req, res) => {
	const id = req.params.id;
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	Animal.findById(id).then((Animal) => {
		if (!Animal) {
			res.status(404).send();
		}
		res.send({
			Animal
		});
	}).catch((e) => {
		res.status(400).send(e);
	});
});
//I don't know
AnimalController.create = ((req, res) => {
	res.render("Algo");
})
// Create a new animal
AnimalController.save = ((req, res) => {
	const animal = new Animal({
		localizacao: req.body.localizacao,
		classe: req.body.classe,
		nome_cientifico: req.body.nome_cientifico,
		imagem_url: req.body.imagem_url,
		sexo: req.body.sexo,
		data_nascimento: req.body.data_nascimento,
		descricao: req.body.descricao,
		nutricao: req.body.nutricao,
		habitat: req.body.habitat,
		quantidade: req.body.quantidade,
		nomeIngles: req.bodynomeIngles,
	});
	animal.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	})

})
// Find All animals
AnimalController.find = ((req, res) => {
	const id = req.params.id;
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	Animal.findOne({ _id: id })
		.then((Animal) => {
			res.send({
				Animal
			})
		})
		.catch((e) => {
			res.status(400).send(e);
		})
})
//Update a animal with a id
AnimalController.update = ((req, res) => {
	const id = req.params.id;
	const body = _.pick(req.body,['localizacao', 'classe', 'nome_cientifico', 'imagem_url', 'sexo', 'data_nascimento', 'descricao', 'nutricao', 'habitat', 'quantidade', 'nomeIngles']);
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	Animal.findOneAndUpdate(id, {
		$set: body
	}, {
			new: true
		}).then((animal) => {
			if (!animal) {
				return res.status(404).send()
			}
			res.send({
				animal
			})
		}).catch((e) => {
			res.status(400).send(e);
		})
});
//Delete a animal
AnimalController.delete = ((req, res) => {
	const id = req.params.id;
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	Animal.findByIdAndRemove(id)
		.then((Animals) => {
			if (!Animals) {
				res.status(404).send();
			}
			res.send({
				Animals
			});
		}).catch((e) => {
			res.status(400).send(e);
		});
});

module.exports = AnimalController;

