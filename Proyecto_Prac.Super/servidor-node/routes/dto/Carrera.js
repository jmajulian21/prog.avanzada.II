var express = require('express');
var router = express.Router();
var data = require('../data/data');

//Metodo del Express
router.get('/carreras', function (req, res) {
  var resp = data.carreras;

  res.json(resp);
});

router.get('/carreras/:id/cursos', function (req, res) {
  var id = req.params.id;
  var resp = [];

  for (var i = 0; i < data.asignaciones.length; i++){
    if (data.asignaciones[i].id_carrera == id){
      console.log(data.asignaciones[i].id_carrera);
      for (var j = 0; j < data.cursos.length; j++){
        if(data.cursos[j].id_curso == data.asignaciones[i].id_curso){
          resp.push(data.cursos[j]);
        } 
      } 
    }
  }

  res.json(resp);
});

router.get('/carreras/:id1/cursos/:id2/materias', function (req, res) {
  var id1 = req.params.id1;
  var id2 = req.params.id2;
  var resp = [];
  for (var i = 0; i < data.asignaciones.length; i++) {
    if (data.asignaciones[i].id_carrera = id1 && data.asignaciones[i].id_curso == id2) {
      for (var j = 0; j < data.materias.length; j++) {
        if (data.materias[j].id_materia == data.asignaciones[i].id_materia) {
          resp.push(data.materias[j]);
        }
      }
    }
  }
  res.json(resp);
});

router.get('/carreras/:id/cursos/:id2/materias/:id3', function (req, res) {
  var fechas = [];
  var alumnos = [];
  var materia = data.materias.find(item => item.id_materia == req.params.id3);
  var asignacion = data.asignaciones.find(item => item.id_carrera = req.params.id & item.id_curso == req.params.id2 && item.id_materia == req.params.id3);
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
    if (data.alumnos_inscriptos[i].id_asignacion == programa.id_asignacion){
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

router.post('/carreras/:id/cursos/:id2/materias/:id3/inscripcion', function (req, res) {
  var asignacion = data.asignaciones.find(item => item.id_carrera == req.params.id && item.id_curso == req.params.id2 && item.id_materia == req.params.id3);
  
  var itemI = { id: (data.alumnos_inscriptos.length + 1) };
  data.alumnos_inscriptos.push({id_alumnos_inscriptos:itemI.id, id_asignacion:asignacion.id_asignacion,id_alumno: req.body.id_alumno });
  res.json({status: 'OK'});
});



module.exports = router;
