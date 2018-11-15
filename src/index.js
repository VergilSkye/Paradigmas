//libs
const express = require('express');
const http = require('http');
const path = require('path');
const favicon = require('serve-favicon');
const session = require('express-session');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');


//config
const CONFIG = require('./config/config.js');

//db
const db = require('./db/db.js');

//routes
const animals = require('./routes/animals.js');
const auth = require('./routes/auth.js');
const locals = require('./routes/locals.js');
const user = require('./routes/users');


let app = express();

app.server = http.createServer(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

//Adicionando porta

const PORT = CONFIG.port;
// logger
app.use(morgan('dev'));

// Enable CORS from client-side
app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, PATCH,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// 3rd party middleware
app.use(cors({
	exposedHeaders: ["Link"]
}));
//cookie parser
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({
	limit: "100kb",
}));

// Init passport
app.use(passport.initialize());
require('./config/passport.js')(passport);
app.use('/'),(req,res) =>{
  res.send('Hello Express');
}

app.use("/v2", (req, res) => {
  res.send('Api page');
});

//Using routes
app.use('/v1/zoo/animals', animals);
app.use('/v1/zoo/auth', auth);
app.use('/v1/zoo/users', user);
app.use('/v1/zoo/locals',locals);

/**
 * Error handlers
 */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


app.listen(PORT, () => {
	console.log(`Started up at port ${PORT}`);
});


module.exports = app;



