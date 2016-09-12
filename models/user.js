var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    userName :String,
    UserId :Number,
    password:   String,
    phone:Number,
    email  :   String,
    created: {type: Date, default: Date.now}
});

var User = mongoose.model('User',userSchema);

module.exports = {
    User: User
};