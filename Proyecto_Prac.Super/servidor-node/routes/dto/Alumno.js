var express = require('express');
var data = require('../data/data');
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get('/alumnos/:id', function (req, res) {
  var id = req.params.id;
  var datoAlumno = data.personas.find((item) => item.id_persona == id);
  //var detalle = data.alumnos.find((item) => item.id_alumno == id);
  //datoAlumno.detalle = detalle;
  res.json({ datoAlumno });
});

router.post('/alumnos', function (req, res) {
  
  var pers = req.body.datoAlumno;
  console.log(req.body.datoAlumno.nombre);
  try {
    var item = { id: (data.personas.length + 1) };
    data.personas.push({
      id: item.id, nombre: pers.nombre, apellido: pers.apellido, tipoDoc: pers.tipoDoc,
      nroDoc: pers.nroDoc, fechNacimiento: pers.fechNacimiento, sexo: pers.sexo, direccion: pers.direccion,
      piso: pers.piso, codPostal: pers.codPostal, localidad: pers.localidad, telefono: pers.telefono, celular: pers.celular, email: pers.email
    })
    data.alumnos.push({ id: item.id, egresadoDe: pers.detalle.egresadoDe, titulo: pers.detalle.titulo, promedio: pers.detalle.promedio });
    res.json(item);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;