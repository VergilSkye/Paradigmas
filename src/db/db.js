let mongoose = require('mongoose');
require('dotenv').config({
	path: '../../.env'
})

const options = {
	useNewUrlParser: true,
	useCreateIndex: true,
	reconnectInterval: 500, // Reconnect every 500ms
	poolSize: 10,
	auth:{
		user:process.env.MUSER,
		password:process.env.MPASSWORD
	}
}

mongoose.connect(process.env.MONGODB_URI, options)
.then(()=>{
	console.log('Database connection successful');     
}, err=>{
	console.error.bind(console, 'connection error:'+err)
});

module.exports = {mongoose}


