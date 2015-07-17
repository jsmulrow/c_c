'use strict'; 

var mongoose = require('mongoose'),
	shortid = require('shortid'),
	crypto = require('crypto'),
	_ = require('lodash');

var db = require('../../db');

var Schema = mongoose.Schema;

// messages for communicating b/w users
var messageSchema = new Schema({
	title: String,
	content: String,
	author: {type: Schema.Types.ObjectId, ref: 'User'},
	recipient: {type: Schema.Types.ObjectId, ref: 'User'},
	createdAt: {type: Date, expires: '7d'}
});

module.exports = db.model('Message', messageSchema);