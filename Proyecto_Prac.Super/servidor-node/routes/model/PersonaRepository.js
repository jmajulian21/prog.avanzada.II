var ds = require("./config/config");

/*data.personas.push({
    id_persona: itemP.id,
    nombre: pers.nombre,
    apellido: pers.apellido,
    tipoDoc: parseInt(pers.tipoDoc) || null,
    nroDoc: pers.nroDoc,
    fechNacimiento: pers.fechNacimiento,
    sexo: pers.sexo,
    direccion: pers.direccion,
    piso: pers.piso,
    codPostal: parseInt(pers.codPostal) || null,
    localidad: pers.localidad,
    telefono: pers.telefono,
    celular: pers.celular,
    email: pers.email
  })*/

function add(persona) {
    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                var sql = 'INSERT INTO UTN_PRACTICA.PERSONA(ID_PERSONA,NOMBRE) VALUES (\''+persona.id+'\',\''+persona.nombre+'\')';
                console.log(sql);
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
module.exports = { add };

