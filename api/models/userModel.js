'use strict';
var mongoose = require('mongoose'),
    bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    }
});

userSchema.pre('save', function (next) {
    var user = this;
    if (user.isModified('password') || user.isNew) {
        bcrypt.hash(user.password, 10, function (err, hash) {
            if (err) {
                return next(err);
            }
            user.password = hash;
        });
    }
    if (user.isModified('email') || user.isNew) {

    }
    return next();
});
 
userSchema.methods.comparePassword = function (password, next) {
    bcrypt.compare(password, this.password, function (err, isMatch) {
        if (err) {
            return next(err);
        }
        next(null, isMatch);
    });
};

module.export = mongoose.model('User', userSchema);
    