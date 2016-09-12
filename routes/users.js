var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/createuser', function(req, res, next) {

  var vm = {
    title: 'Create new User for the system',
    input: req.body,
    error: 'Some thing goes wrong'
  };
  delete vm.input.password;
  return res.render('createuser', vm);

  // var somethingGoesWrong = true;
  // if (somethingGoesWrong) {
  //   res.redirect('/home');
  // }
});


module.exports = router;
