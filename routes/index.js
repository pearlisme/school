var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Welcome to SchoolMGMT' });
});


module.exports = router;
