// mongoose model file
var mongoose = require('mongoose');

// start the db server
mongoose.connect('mongodb://localhost/college_cleaners');
mongoose.connection.on('error', console.error.bind(console, 'connection error'));
console.log('DB up and running');

// define data schemas
var Schema = mongoose.Schema;

// store requests for cleaning
var requestSchema = new Schema({
	title: String,
	author: {type: Schema.Types.ObjectId, ref: 'User'},
	dirtiness: {type: Number, min: 1, max: 10},
	payment: Number,
	times: [String],
	college: String,
	suite: String,
	numPeople: Number
});

// store user data
var userSchema = new Schema({
	name: String,
	email: String,
	college: String,
	username: String,
	password: String,
	activeRequests: [{type: Schema.Types.ObjectId, ref: 'Request'}],
	activeAppointments: String
	// messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

// messages for communicating b/w users
var messageSchema = new Schema({
	title: String,
	content: String,
	author: {type: Schema.Types.ObjectId, ref: 'User'},
	recipient: {type: Schema.Types.ObjectId, ref: 'User'},
	createdAt: {type: Date, expires: '7d'}
});

// for password auth
userSchema.methods.validPassword = function(password) {
	return this.password === password;
};

module.exports = {
	User: mongoose.model('User', userSchema),
	Request: mongoose.model('Request', requestSchema),
	Message: mongoose.model('Message', messageSchema)
};