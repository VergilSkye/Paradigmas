//velho

const express = require("express");
const { router} = express.Router;
const { mongoose } = require("../db/db.js");
const Animal = require('./db/models/animals');
//import { Router } from 'express';
//import facets from '../api/index'
//import { Mongoose } from "mongoose";

router.get("/animals", (req, res)=>{
	Animal.find().then((Animal)=>{
		res.send({
			Animal
		});
	},(e)=>{
		res.status(400).send(e)
	})
})

export default ({ config, db }) => {
	//let routes = Router();

	routes.use(function timeLog(req,res,next) {
		console.log('Time', Date.now())
		next();
	})
	routes.get('/api/bird', (req, res) => {
		res.send('Birds home page');
	});

	routes.get('/api/about', (req, res)=> {
		res.send('About birds');
	});
	//example facets
	routes.get('/api/see', (req,res)=>{
		res.send('todo');
	})

	routes.post('/api/create', (req,res)=>{
		res.send('todo1')
	})

	// add middleware here

	return routes;
}
