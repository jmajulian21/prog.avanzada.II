var ds = require("../../model/config/config");


function persona() {
    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                connection.query('select count(*)+1 as id from utn_practica.persona', function (err, rows, fields) {
                    try {
                        if (err) throw err;
                        connection.release();
                        resolve(rows[0].id);
                    } catch (e) {
                        console.log("Error: " + e)
                    }
                });

            });
    });
}
module.exports = { persona };

