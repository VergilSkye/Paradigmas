import { Router } from 'express';
import facets from '../api/index'

export default ({ config, db }) => {
	let routes = Router();

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
