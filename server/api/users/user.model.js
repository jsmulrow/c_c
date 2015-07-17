'use strict'; 

var mongoose = require('mongoose'),
	shortid = require('shortid'),
	crypto = require('crypto'),
	Types = mongoose.Schema.Types;

var db = require('../../db');

var Schema = mongoose.Schema;

// store user data
var userSchema = new mongoose.Schema({
	name: String,
	email: String,
	college: String,
	username: String,
	password: String,
	requests: [{type: Schema.Types.ObjectId, ref: 'Request'}],
	appointments: [{type: Schema.Types.ObjectId, ref: 'Request'}]
	// messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

// for password auth
userSchema.methods.validPassword = function(password) {
	return this.password === password;
};

module.exports = db.model('User', userSchema);