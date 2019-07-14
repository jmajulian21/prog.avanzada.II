
var ds = require("./config/config");

function get(carrera) {
    //var id_carrera = carrera.id_carrera ? carrera.id_carrera :null ;
    //var carrera = carrera.carrera ? '\''+carrera.carrera+'%\'': null ;


    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                var sql = 'SELECT * FROM UTN_PRACTICA.CARRERA WHERE 1=1 ';
                                                                      
                if(id_carrera)
                  sql += 'AND ID_CARRERA = '+ id_carrera +' ';

                if(carrera)
                  sql += 'AND CARRERA LIKE '+ carrera;

                
                connection.query(sql, function (err, rows, fields) {
                    try {
                        if (err) throw err;
                        connection.release();
                        resolve("OK");
                    } catch (e) {
                        reject("NOOK");
                    }
                });

            });
    });
}

module.exports = { get };