var express = require('express');
var router = express.Router();
var data = require('../data/data');

//Metodo del Express
router.get('/carreras', function (req, res) {
  var resp = data.carreras;

  res.json(resp);
});

router.get('/carreras/:id', function (req, res) {
  var id = req.params.id;
  var resp = data.carreras.find((item) => item.id_carrera == id);

  res.json(resp);
});

router.get('/carreras/:id/cursos', function (req, res) {
  var id = req.params.id;
  var resp = [];
  for (var i = 0; i < data.asignaciones.length; i++){
    if (data.asignaciones[i].id_carrera == id){
      for (var j = 0; j < data.cursos.length; j++){
        if(data.cursos[j].id_curso == data.asignaciones[i].id_curso){
          resp.push(data.cursos[j]);
        }
      } 
    }
  }
  res.json(resp);
});

router.get('/carreras/:id/cursos/:id2/materias/:id3', function (req, res) {
  var fechas = [];
  var alumnos = [];
  var materia = data.materias.find(item => item.id_materia == req.params.id2);
  var asignacion = data.asignaciones.find(item => item.id_carrera = req.params.id & item.id_curso == req.params.id1 && item.id_materia == req.params.id2);
  var programa = data.programas.find(item => item.id_asignacion == asignacion.id_asignacion);
  var fecha_clases = data.fechas_clases.find(item => item.id_carrera == asignacion.id_carrera);

  var fecha_inicio = new Date(fecha_clases.fecha_inicio);
  fecha_inicio.setDate(fecha_inicio.getDate() + programa.id_dia_clase_1 - 1);

  for(i=0;i<15;i++){
    var fechaAR = new Date(fecha_inicio);
    fechaAR.setDate(fechaAR.getDate() + (7 *i));
    var item = {key:i+1,fecha:fechaAR.toLocaleDateString()}
    fechas.push(item);
  }

  for (var i = 0; i < data.alumnos_inscriptos.length; i++){
    if (data.alumnos_inscriptos[i].id_programa == programa.id_programa){
      var alumno = data.alumnos.find(item => item.id_alumno == data.alumnos_inscriptos[i].id_alumno);
      var persona = data.personas.find(item => item.id_persona == alumno.id_persona);
      persona.detalle = alumno;
      alumnos.push(persona);
    }
  }
  materia.fechas = fechas;
  materia.alumnos = alumnos;
  
  res.json(materia);
});

router.post('/carreras/:id/cursos/:id2/materias/:id3', function (req, res) {
  
  res.json({status: 'OK'});
});



module.exports = router;
