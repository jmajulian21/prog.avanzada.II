var express = require('express');
var router = express.Router();
var data = require('../data/data');

//Metodo del Express
router.get('/carreras', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var resp = data.carreras;

  res.json(resp);
});

router.get('/carreras/:id', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var id = req.params.id;
  var resp = data.carreras.find((item) => item.id_carrera == id);

  res.json(resp);
});

router.get('/carreras/:id/cursos', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
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

router.get('/carreras/:id/cursos/:idCurso', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var idCarrera = req.params.id;
  var idCurso = req.params.idCurso;
  var idMateria = 1;//req.params.idMateria;

  var respAux = data.asignaciones.find((item) => item.id_carrera == idCarrera &&
                                              item.id_curso == idCurso &&
                                              item.id_materia == idMateria);

  var idAsignacion = respAux.id_asignacion;
  var resp = data.programas.find((item) => item.id_asignacion == idAsignacion);

  res.json(resp);
});

///materias/:idMateria/dictados

module.exports = router;
