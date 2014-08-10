
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var server = http.createServer(app);

// mongodb
var mongoose = require('mongoose');
var mongoDBConnect = process.env.MONGOLAB_URI ||
	process.env.MONGOHQ_URL ||
	'mongodb://localhost/cruzaxalan';
mongoose.connect(mongoDBConnect);

// models
var models = require('./model/models');
models.generate();

// routes
var routes = require('./routes');
var isLoggedIn = routes.isLoggedIn;

// all environments
app.configure(function() {
	app.set('port', process.env.PORT || 5000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');

	//app.use(express.favicon(path.join(__dirname, 'public/img/favicon.ico')));
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser('your secret here'));
	app.use(express.session());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));

	// Error
	app.use(function(req, res, next){
		res.status(404);

		// respond with html page
		if (req.accepts('html')) {
			res.render('404');
			return;
		}

		// respond with json
		if (req.accepts('json')) {
			res.send({ error: 'Not found' });
			return;
		}

		// default to plain-text. send()
		res.type('txt').send('Not found');
	});
});

// development only
app.configure('development', function() {
	app.use(express.errorHandler());
});


/*********************************************************
**********************************************************
*
*	HTML pages/handlers
*
*********************************************************
*********************************************************/

app.get('/', isLoggedIn, routes.index);
app.get('/login', routes.login);					// login page
app.get('/register', routes.register);				// signup page
app.post('/loginUser', routes.loginUser);			// user login
app.post('/registerUser', routes.registerUser);		// user signup


app.get('/GettingToOrlando', isLoggedIn, routes.GettingToOrlando);	
app.get('/WeddingDay', isLoggedIn, routes.WeddingDay);
app.get('/SailingGuests', isLoggedIn, routes.SailingGuests); 
app.get('/NonSailingGuests', isLoggedIn, routes.NonSailingGuests);
app.get('/GuestsThatCouldntMakeIt', isLoggedIn, routes.GuestsThatCouldntMakeIt);


server.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});

