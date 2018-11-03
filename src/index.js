require('dotenv').config({
	path: '.env'
});

const http = require('http');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const db = require('./db/db.js');
const animals = require('./routes/animals.js')
const index = require('./routes/index.js');


const config = require('./config.json');




let app = express();
//Adicionando porta
const PORT = 7500;
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

app.use("/v1",(req, res) => {
	res.send('Api page');
});

app.use('/',index);
app.use('/animals',animals);

/*app.use("/animals", (req, res)=>{
	Animal.find().then((Animal)=>{
		res.send({
			Animal
		});
	},(e)=>{
		res.status(400).send(e)
	})
})*/

//app.use("/api",middleware);


app.listen(PORT, () => {
    console.log(`Started up at port ${PORT}`);
});

module.exports={app}



