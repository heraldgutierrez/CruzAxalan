var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

// comparing _id
// var ObjectId = mongoose.Types.ObjectId;
// var id = new ObjectId('id string');
// OR
// var id = mongoose.Types.ObjectId('id string');

exports.generate = generate;

function generate() {
	var UserModel = user();
}

function user() {
	var USchema = new Schema({
		username	: String,
		password 	: String
	});

	USchema.pre('save', function(next) {
		var user = this;

		if(!user.isModified('password'))
			return next();

		bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
			if(err)
				return next(err);

			bcrypt.hash(user.password, salt, function(err, hash) {
				if(err)
					return next(err);

				user.password = hash;
				next();
			});
		});
	});

	USchema.methods.comparePassword = function(candidatePassword, cb) {
		bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
			if(err)
				return cb(err);
			cb(null, isMatch);
		});
	};

	return mongoose.model('Users', USchema);
}
