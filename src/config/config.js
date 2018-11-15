require('dotenv').config({
	path: '.env'
});

let CONFIG = {} //Make this global to use all over the application

const env = process.env.APP || 'dev';
if (env == 'dev') {
	CONFIG.app = 'dev';
	
	CONFIG.db = process.env.PROD_MONGODB
}
else if (env == 'test') {
	CONFIG.app = 'test';	
	CONFIG.db = process.env.TEST_MONGODB
}
CONFIG.port = process.env.PORT || 3000 

CONFIG.db_user = process.env.MUSER ;
CONFIG.db_passwrod=process.env.MPASSWORD;

CONFIG.jwt_encryption = process.env.JWT_ENCRYPTION || 'jwt_please_change';
CONFIG.jwt_expiration = process.env.JWT_EXPIRATION || '10000';


module.exports = CONFIG;