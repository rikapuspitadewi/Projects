'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API berjalan!", res)
};

// menampilkan seluruh data mahasiswa
exports.tampilseluruhmahasiswa = function(req,res) {
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fileds){
        if(error){
            connection.log(error);
        } else{
            response.ok(rows, res)
        }
    });
};