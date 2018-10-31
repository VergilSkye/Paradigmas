let mongoose = require('mongoose');
require('dotenv').config();

class Database {
	constructor() {
		this._connect()
	}

	_connect() {

		mongoose.connect(process.env.MONGODB_URI)
			.then(() => {
				console.log('Database connection successful')
			})
			.catch(err => {
				console.error('Database connection error')
			})
	}
}

module.exports = new Database()

// export default callback => {
// 	// connect to a database if needed, then pass it to `callback`:
// 	callback();
// }
