var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var data = require('../data/data');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'utn_practica',
  password: 'zLFQCobhSLNxh6Ar'
});


//Metodo del Express
router.get('/personas/:id', function (req, res) {
  var id = req.params.id;
  connection.connect();
 
  connection.query('SELECT * from utn_practica.persona where id_persona='+id, function (err, rows, fields) {
    try {
      if(err) throw err;
      res.json(rows);
    }catch(e){
      console.log("Error señor shulians: "+e)
    }
  });

  connection.end();

  
});


//POST : Crear elemento
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/personas', function (req, res) {
  var pers = req.body;
  var item = { id: (personas.length + 1) };
  personas.push({
    id: item.id, nombre: pers.nombre, apellido: pers.apellido, tipoDoc: pers.tipoDoc,
    nroDoc: pers.nroDoc, fechNacimiento: pers.fechNacimiento, sexo: pers.sexo, direccion: pers.direccion,
    piso: pers.piso, codPostal: pers.codPostal, localidad: pers.localidad, telefono: pers.telefono, celular: pers.celular, email: pers.email
  })

  res.json(result);
});

module.exports = router;
