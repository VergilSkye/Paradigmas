const { ObjectID } = require('mongodb');
const User = require('../db/models/users');
const _ = require('lodash');

let UserController = {};
//Find All Users
UserController.list = ((req, res) => {
	User.find().then((User) => {
		res.send({
			User
		});
	}, (e) => {
		res.status(400).send(e);
	})
})
//Show a specific user with id
UserController.show = ((req, res) => {
	const id = req.params.id;
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	User.findById(id).then((User) => {
		if (!User) {
			res.status(404).send();
		}
		res.send({
			User
		});
	}).catch((e) => {
		res.status(400).send(e);
	});
});
//I don't know
UserController.create = ((req, res) => {
	res.render("Algo");
})
// Create a new User
UserController.save = ((req, res) => {
	const user = new User({
        email: req.body.email,
        password: req.body.password,
        admin: req.body.admin
	});
	user.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	})

})
// Find All users
UserController.find = ((req, res) => {
	const id = req.params.id;
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	User.findOne({ _id: id })
		.then((User) => {
			res.send({
				User
			})
		})
		.catch((e) => {
			res.status(400).send(e);
		})
})
//Update a user with a id
UserController.update = ((req, res) => {
	const id = req.params.id;
	console.log(id);
	
	const body = _.pick(req.body,['email', 'admin','password']);
	console.log(body.descricao + body.quantidade)
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
    User.findById(id).
    then((user) => {
			if (!user) {
				return res.status(404).send()
            }
            user.password=req.body.password;
             
            user.save().then((doc) => {
                res.send(doc);
            }, (e) => {
                res.status(400).send(e);
            })
			
		}).catch((e) => {
			res.status(400).send(e);
		})
});
//Delete a user
UserController.delete = ((req, res) => {
	const id = req.params.id;
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	User.findByIdAndRemove(id)
		.then((Users) => {
			if (!Users) {
				res.status(404).send();
			}
			res.send({
				Users
			});
		}).catch((e) => {
			res.status(400).send(e);
		});
});

module.exports = UserController;

