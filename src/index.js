//libs
const express = require('express');
const http = require('http');
const path = require('path');
var favicon = require('serve-favicon');
const session = require('express-session');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');


//config
const CONFIG = require('./config/config');

//db
const db = require('./db/db.js');

//routes
const animals = require('./routes/animals.js');
const users = require('./routes/users.js');
const locals = require('./routes/locals.js');


let app = express();

app.server = http.createServer(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

//Adicionando porta
const PORT = process.env.PORT || 7500;
// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: ["Link"]
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({
	limit: "100kb",
}));



// Init passport
app.use(passport.initialize());
require('./config/passport.js')(passport);

app.use("/v1", (req, res) => {
	res.send('Api page');
});

//Using routes
app.use('/animals', animals);
app.use('/users', users);
app.use('/locals',locals);

// Use the session middleware
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
app.get('/don', function(req, res, next) {
  if (req.session.views) {
    req.session.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + req.session.views + '</p>')
    res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    req.session.views = 1
    res.end('welcome to the session demo. refresh!')
  }
})
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



