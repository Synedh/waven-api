'usr strict';

var basicAuth = require("basic-auth"),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Role = mongoose.model('Role');


function unauthorized(res) {
    res.set("WWW-Authenticate", "Basic realm=Authorization Required");
    return res.sendStatus(401);
}

function forbidden(res) {
    res.set("WWW-Authenticate", "Basic realm=Authorization Required");
    return res.sendStatus(403);
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
                            role.checkRole(req.method, req.originalUrl.split('/')[1], function(err, allow) {
                                if (err) {
                                    return res.json(err);
                                } else if (allow) {
                                    return next();
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
