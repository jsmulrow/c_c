var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index');
});

router.get('/cleaners', function(req, res, next) {
	res.render('cleaners');
});

router.get('/clients', function(req, res, next) {
	res.render('clients');
});

module.exports = router;