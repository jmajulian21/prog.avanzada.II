var express = require('express');
var data = require('../data/data');
var bodyParser = require("body-parser");
var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/alumnos/legajo', function (req, res) {
  var item = { legajo: (data.legajo + 1) };

  res.json(item);
});

router.get('/alumnos/:id', function (req, res) {
  var id = req.params.id;
  var datoAlumno = data.personas.find((item) => item.id_persona == id);
  var detalle = data.alumnos.find((item) => item.id_persona == id) || '';
  if (datoAlumno) {
    datoAlumno.detalle = detalle;
  }
  res.json({ datoAlumno });
});

router.post('/alumnos', function (req, res) {
  var pers = req.body.datoAlumno;
  try {
    var itemP = { id: (data.alumnos.length + 1) };
    var itemA = { id: (data.personas.length + 1) };

    data.personas.push({
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
    })

    data.alumnos.push({
      id_alumno: itemA.idAlumno,
      id_persona: itemP.idPerson,
      legajo: pers.detalle.legajo,
      egresadoDe: pers.detalle.egresadoDe,
      titulo: pers.detalle.titulo,
      promedio: parseInt(pers.detalle.promedio) || null
    });

    data.legajo = pers.detalle.legajo;

    res.json(itemP);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;