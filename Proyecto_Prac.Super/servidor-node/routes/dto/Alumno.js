var express = require('express');
var bodyParser = require("body-parser");
var router = express.Router();
var seq = require("./utils/Secuencia");
var personaRepo = require("../model/PersonaRepository");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/*router.get('/alumnos/:id', function (req, res) {
  var id = req.params.id;
  var datoAlumno = data.personas.find((item) => item.id_persona == id);
  var detalle = data.alumnos.find((item) => item.id_persona == id) || '';
  if (datoAlumno) {
    datoAlumno.detalle = detalle;
  }
  res.json({ datoAlumno });
});*/

router.post('/alumnos', function (req, res) {
  seq.persona().then(function (idPeson) {
    var persona = {};
    persona.id = idPeson;
    persona.nombre = 'Julian';
    
    personaRepo.add(persona).then(function (result) {
      res.send(result);
    })
  });
});

module.exports = router;