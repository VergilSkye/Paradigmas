const mongoose = require('mongoose');
const config=require('../config/config.js');

const options = {
	useNewUrlParser: true,
	useCreateIndex: true,
	reconnectInterval: 500, // Reconnect every 500ms
	poolSize: 10,
	auth:{
		user:config.db_user,
		password:config.db_passwrod
	}
}
mongoose.Promise = global.Promise;
mongoose.connect(config.db, options)
.then(()=>{
	console.log('Database connection successful');     
}, err=>{
	console.error.bind(console, 'connection error:'+err)
});

module.exports = {mongoose}


