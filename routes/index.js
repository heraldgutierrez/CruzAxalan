var mongoose = require('mongoose');
var UserModel = mongoose.model('Users');
/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index', {
		title	: 'Cruz-Axalan Wedding Information'
	});
};

exports.login = function(req, res) {
	res.render('login', {
		title	: 'Cruz-Axalan Wedding Information | Login'
	});
};

exports.register = function(req, res) {
	if(req.query.q != undefined && (req.query.q).toLowerCase() == 'jeanne') {
		res.render('register', {
			title	: 'Cruz-Axalan Wedding Information | Signup'
		});
	} else {
		res.redirect('/');
	}
};

exports.GettingToOrlando = function(req, res) {
	res.render('GettingToOrlando', {
		title	: 'Cruz-Axalan Wedding Information | Getting to Orlando'
	});
};

exports.WeddingDay = function(req, res) {
	res.render('WeddingDay', {
		title	: 'Cruz-Axalan Wedding Information | Wedding Day'
	});
};

exports.SailingGuests = function(req, res) {
	res.render('SailingGuests', {
		title	: 'Cruz-Axalan Wedding Information | Sailing Guests'
	});
};

exports.NonSailingGuests = function(req, res) {
	res.render('NonSailingGuests', {
		title	: 'Cruz-Axalan Wedding Information | Non-Sailing Guests'
	});
};

exports.GuestsThatCouldntMakeIt = function(req, res) {
	res.render('GuestsThatCouldntMakeIt', {
		title	: "Cruz-Axalan Wedding Information | Guests that Couldn't Make It"
	});
};



/*************************
	DB Related
*************************/
exports.isLoggedIn = function(req, res, next) {
	// if(!req.session.currentUser)
	// 	res.redirect('/login');
	// else
		next();
};

exports.loginUser = function(req, res) {
	var name = req.body.username;
	var pass = req.body.password;

	console.log('Attempting to login: ' + name);

	UserModel.findOne({ username : name },
		function(err, user) {
			if(err)
				throw err;

			if(user == null) {
				res.redirect('/login?warning=incorrect');
			} else {
				user.comparePassword(pass, function(err, isMatch) {
					if(err)
						throw err;

					if(isMatch) {
						req.session.currentUser = user;
						res.redirect('/');
					} else {
						res.redirect('/login?warning=incorrect');
					}
				});
			}
		}// end: function
	);// end: findOne
};

exports.registerUser = function(req, res) {
	var name = req.body.username;
	var pass = req.body.password;
	var verifyPass = req.body.verifyPassword;

	if(pass == verifyPass) {
		var newUser = new UserModel({
			username : name,
			password : pass
		});

		// need to check if the username already exists
		UserModel.findOne({ username : name },
			function(err, result_1) {
				// if(result == null) --> no users exists, okay to save new user
				if(result_1 == null) {
					// save new user
					newUser.save(function(err, result_2) {
						req.session.currentUser = newUser;

						console.log(name + ' has been added.');
						res.redirect('/');
					});
				} else {
					// reload home page with warning that username already exists
					console.log(name + ' already exists.');
					res.redirect('/register?warning=usernameExists');
				}
			}// end: function
		);// end: findOne
	} else {
		console.log('Password doesn\'t match verify password');
		res.redirect('/register?warning=verifyPassword');
	}
}; // end: signup