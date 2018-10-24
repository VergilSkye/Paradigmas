let mongoose = require('mongoose');

const server = 'ds141043.mlab.com:41043'
const database = 'zoo'

class Database {
	constructor() {
		this._connect()
	}

	_connect() {
		mongoose.connect('mongodb://${server}/${database}')
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
