var express = require('express');
var router = express.Router();
var userService = require('../services/user-service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/createuser', function(req, res, next) {
  var vm = {
    title: 'Welcome to create user',

  };
  res.render('createuser', vm);
});
router.post('/persistuser', function(req, res, next) {

  userservice.addUser(req.body, function(err) {

    if (err) {


      var vm = {
        title: 'Create new User for the system',
        input: req.body,
        error: 'Something went wrong'
      };
      delete vm.input.password;
      return res.render('users/persistuser', vm);
    }

    res.redirect('/home');

  });
});


module.exports = router;
