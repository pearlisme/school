var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/createstudent', function(req, res, next) {
  var vm ={
     title: 'Create new User for the system' 
  };
  res.render('createstudent', vm);
});


module.exports = router;
