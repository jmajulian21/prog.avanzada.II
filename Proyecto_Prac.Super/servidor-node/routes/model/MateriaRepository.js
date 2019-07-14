function get(materia) {
    var id_materia = materia.id_materia;
    var materia = materia.materia ? '\''+materia.materia+'%\'': null ;


    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                var sql = 'SELECT * FROM UTN_PRACTICA.MATERIA WHERE 1=1 ';
                                                                      
                if(id_materia)
                  sql += 'AND ID_MATERIA = '+ id_materia +' ';

                if(id_materia)
                  sql += 'AND MATERIA LIKE \''+ materia +'%\'';

                
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