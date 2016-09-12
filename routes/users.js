var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/createuser', function(req, res, next) {
  res.render('createuser', { title: 'Create new User for the system' });
});


module.exports = router;
