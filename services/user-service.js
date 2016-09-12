var User = require("../models/user");

exports.addUser = function(user, next){
  
  var newUser = new User({
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        userId: user.userId,
        password: user.password,
        phone: user.phone,
        email: user.email
  });  
  
  newUser.save(function(err){
    if(err){
      return next(err);
    }
    next(null);
  });
};