var basicAuth = require("basic-auth"),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Role = mongoose.model('Role');


function check_role(roleId, endpoint, method) {
    Role.findById(roleId, function(err, role) {
        if (err) {
            console.log(err);
            return false;
        } else {
            var role_method = 'rule_' + method.toLowerCase();
            for (var i = 0; i < role[role_method].length; i++) {
                console.log(role[role_method][i]);
            }
            return false;
        }
    });
}

exports.basic_auth = function(req, res, next) {
    function unauthorized(res) {
        res.set("WWW-Authenticate", "Basic realm=Authorization Required");
        return res.sendStatus(401);
    }
    function forbidden(res) {
        res.set("WWW-Authenticate", "Basic realm=Authorization Required");
        return res.sendStatus(403);
    }
    const user = basicAuth(req);
    if (!user || !user.name || !user.pass) {
        return unauthorized(res);
    }
    User.findOne({'name': user.name}, function(err, usr) {
        if (err) {
            return res.json(err);
        } else {
            usr.comparePassword(user.pass, function(err, okPass) {
                if (err) {
                    return res.json(err);
                } else if (okPass && check_role(usr.role, req.originalUrl.substring(1), req.method)) {
                    return next();
                } else if (okPass) {
                    return forbidden(res);
                } else {
                    return unauthorized(res);
                }
            });
        }
    });
};