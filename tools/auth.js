'usr strict';

var basicAuth = require("basic-auth"),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Role = mongoose.model('Role');


function unauthorized(res) {
    res.set("WWW-Authenticate", "Basic realm=Authorization Required");
    res.status(401);
    res.send({"error": "Unauthorized"});
}

function forbidden(res) {
    res.set("WWW-Authenticate", "Basic realm=Authorization Required");
    res.status(403);
    res.send({"error": "Forbidden"});
}

exports.basic_auth = function(req, res, next) {
    const user = basicAuth(req);
    if (!user || !user.name || !user.pass) {
        return unauthorized(res);
    }
    User.findOne({'name': user.name}, function(err, usr) {
        if (err) {
            return res.json(err);
        } else if (!usr) {
            return unauthorized(res);
        } else {
            usr.comparePassword(user.pass, function(err, okPass) {
                if (err) {
                    return res.json(err);
                } else if (okPass) {
                    Role.findById(usr.role, function(err, role) {
                        if (err) {
                            return next(err);
                        } else {
                            role.checkRole(req, function(err, allow) {
                                var method = req.method.toLowerCase();
                                var endpoint = req.originalUrl.split('/')[1];
                                if (err) {
                                    return res.json(err);
                                } else if (allow) {
                                    if (method == 'put' && endpoint == 'users' && usr.role._id != '5be0037405c01d7f864a53dc') {
                                        var splited = req.url.split('/');
                                        User.findById(splited[splited.length -1], function(err, user) {
                                            if (user.name != usr.name) {
                                                return forbidden(res);
                                            }
                                        });
                                    } else {
                                            return next();
                                    }
                                } else {
                                    return forbidden(res);
                                }
                            });
                        }
                    });
                } else {
                    return unauthorized(res);
                }
            });
        }
    });
};
