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

userSchema.pre('findOne', function(next) {
    this.populate({
        path: 'role',
        model: 'Role'
    });
    next();
});

userSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    });
});

userSchema.pre('save', function (next) {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!this.email.match(mailFormat)) {
        return next('Incorrect email format');
    }
    next();
});

userSchema.pre('findOneAndUpdate', function(next) {
    if (this.getUpdate().password) {
        bcrypt.hash(user.password, 10, function (err, hash) {
            if (err) {
                return next(err);
            }
            this.getUpdate().password = hash;
            return next();
        });
    }
    next();
});

userSchema.pre('findOneAndUpdate', function(next) {
    var email = this.getUpdate().email;
    if (email) {
        var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/;
        if (!email.match(mailFormat)) {
            return next('Incorrect email format');
        }
        return next();
    }
    next();
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
    
