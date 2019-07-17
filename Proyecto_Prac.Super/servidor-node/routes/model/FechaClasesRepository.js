var ds = require("./config/config");

function findBy(params) {
    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                var query = ' SELECT MAX(ID_FECHA_CLASE),FECHA_INICIO,FECHA_FIN '+
                                    ' FROM FECHA_CLASE '+
                                    ' WHERE ID_CARRERA = '+ params.id_carrera + ';';

                connection.query(query, function (err, rows, fields) {
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

module.exports = { findBy };