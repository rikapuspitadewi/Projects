var express = require('express');
var auth = require('./auth');
// const verifikasi = require('./verifikasi');
var router = express.Router();
var verifikasi = require('./verifikasi');

// mendaftarkan menu registrasi
router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login);

// alamat yang perlu otoritasi
router.get('/api/v1/tersembunyi', verifikasi(2), auth.halamantersembunyi);

module.exports = router;