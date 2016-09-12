var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'School Login' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Welcome to SchoolMGMT' });
});
/* GET home page. */
router.get('/admin', function(req, res, next) {
  var vm ={ title: 'Adminstator' };
  res.render('admin',vm );
});



module.exports = router;
