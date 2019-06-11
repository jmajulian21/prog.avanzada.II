var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var nodeJsonTransformer = require('json-transformer-node');

//GET: Consultar elemento
var personas=[ 
    {id: 1, nombre: "Julian.M" , apellido: "Moreno" , tipoDoc: 1 , nroDoc: "37589654" , fechNacimiento: "null" , 
        sexo: "M" , direccion: "Lisandro de la torre 1273" , piso: null, codPostal: "1838", localidad: 1, telefono: "42969001", celular: "1128802769", email: "julian.a.moreno@hotmail.com"}]

var transformation = {
            mapping : {
                item : {
                    id : "id",
                    nombre : "nombre",
                    apellido : "apellido",
                    tipoDoc : "tipoDoc",
                    nroDoc : "nroDoc",
                    fechNacimiento : "fechNacimiento",
                    sexo : "sexo",
                    direccion: "direccion",
                    piso: "piso",
                    codPostal:"codPostal",
                    localidad:"localidad",
                    telefono:"telefono",
                    celular:"celular",
                    email:"email" 
                }
        }
};

//Metodo del Express
router.get('/personas/:id', function(req, res) {
  var id = req.params.id;
  var resp = personas.find((item) => item.id == id);
  var result = nodeJsonTransformer.transform(resp, transformation);

  res.send(result);
});


//POST : Crear elemento
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var transformation2 = {
        mapping : {
            item : {
                id : "id"
            }
    }
};

router.post('/personas', function(req, res) {
  var pers =req.body;
  var item = {id: (personas.length+1)};
  personas.push({ id: item.id, nombre: pers.nombre , apellido: pers.apellido, tipoDoc: pers.tipoDoc,
                  nroDoc: pers.nroDoc,fechNacimiento: pers.fechNacimiento,sexo: pers.sexo,direccion: pers.direccion,
                  piso: pers.piso,codPostal: pers.codPostal,localidad: pers.localidad,telefono: pers.telefono,celular: pers.celular,email: pers.email })
  var result = nodeJsonTransformer.transform(item, transformation2);
  res.send(result);
});

module.exports = router;
