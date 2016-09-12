var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/createstaff', function(req, res, next) {
  res.render('createstaff', { title: 'Create new User for the system' });
});


module.exports = router;
