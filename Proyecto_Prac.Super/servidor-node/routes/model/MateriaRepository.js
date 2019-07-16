var ds = require("./config/config");

function findAll() {
    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                var sql = 'SELECT * FROM MATERIA';
                                                            
                connection.query(sql, function (err, rows, fields) {
                    try {
                        if (err) throw err;
                        connection.release();
                        resolve(rows);
                    } catch (e) {
                        reject("NOOK");
                    }
                });

            });
    });
}

function findBy(params) {
    var id_carrera = params.id1;
    var id_materia = params.id2;
    
    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                var sql = 'SELECT * FROM MATERIA';
                                                            
                connection.query(sql, function (err, rows, fields) {
                    try {
                        if (err) throw err;
                        connection.release();
                        resolve(rows);
                    } catch (e) {
                        reject("NOOK");
                    }
                });

            });
    });
}

module.exports = { findAll, findBy};