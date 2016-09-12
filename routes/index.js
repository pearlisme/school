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
/* GET Admin page. */
router.get('/admin', function(req, res, next) {
  // var date_on = new Date().format('m-d-Y h:i:s');
  var vm ={ title: 'Welcome to Admin page',
            user:'Adminstrator',
            id: 1201
           
  };
  res.render('admin',vm );
});



module.exports = router;
