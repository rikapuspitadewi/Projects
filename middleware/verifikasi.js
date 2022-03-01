const jwt = require('jsonwebtoken');
const config = require('../config/secret');


function verifikasi(roles) {
    return function (req, rest, next) {
        // cek authorization header
        var tokenWithBearer = req.headers.authorization;
        // console.log(tokenWithBearer);
        if (tokenWithBearer) {
            var token = tokenWithBearer.split(' ')[1];
            console.log(token);
            // verifikasi
            jwt.verify(token, config.secret, function (err, decoded) {
                if (err) {
                    return rest.status(401).send({ auth: false, message: 'Token tidak terdaftar!' });
                } else {
                    if (decoded.rows[0].role == 2) {
                        req.auth = decoded;
                        next();
                    } else {
                        return rest.status(401).send({ auth: false, message: 'Gagal mengotorisasi role anda!' });
                    }
                }
            });
        } else {
            return rest.status(401).send({ auth: false, message: 'Token tidak tersedia!' });
        }
    }
}

module.exports = verifikasi;