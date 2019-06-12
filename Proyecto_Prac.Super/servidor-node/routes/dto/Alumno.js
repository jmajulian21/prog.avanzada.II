var express = require('express');
var router = express.Router();
var PersonaMap = require('./maps/PersonaMap.json');
var AlumnoMap = require('./maps/AlumnoMap.json');

var personas=[{id: 1, nombre: "Julian.M" , apellido: "Moreno" , tipoDoc: 1 , nroDoc: "37589654" , fechNacimiento: "null" , 
               sexo: "M" , direccion: "Lisandro de la torre 1273" , piso: null, codPostal: "1838", localidad: 1, telefono: "42969001", 
               celular: "1128802769", email: "julian.a.moreno@hotmail.com"}];

var alumnos=[{id:1,egresadoDe:"Escuela Secundaria N°12",titulo:"Bachiller en electronica",promedio:7}];

var trans1 = {mapping : { item : PersonaMap}};
var trans2 = {mapping : { item : AlumnoMap}};

router.get('/alumnos/:id', function(req, res) {
    var id = req.params.id;
    var resp = personas.find((item) => item.id == id);
    var resp1 = alumnos.find((item) => item.id == id);
    var result = nodeJsonTransformer.transform(resp, trans1);
    var result2 = nodeJsonTransformer.transform(resp1, trans2);

    res.send(result+result2);
  });
  
module.exports = router;