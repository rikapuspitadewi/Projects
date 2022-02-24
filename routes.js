'use strict';

const { get } = require('express/lib/response');

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);
    
    app.route('/tampil')
        .get(jsonku.tampilseluruhmahasiswa);

    app.route('/tampil/:id')    
        .get(jsonku.tampilberdasarkanid);

    app.route('/tambah')
        .post(jsonku.tambahMahasiswa);
}