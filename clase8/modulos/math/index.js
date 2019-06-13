var express = require('express');
const math = require("./math");
var router = express.Router();


//var res = math.suma(2,3);
//Forma correcta de llamar una funcion, es la manera asicronica, por eso hay 3 formas.

//collback
/*var res = math.suma(2,3,(err,data)=>{
    if(err){
        console.log("Error");
    }
    res = data;
});*/


router.get('/sumas/:num1-:num2', function(req, res, next) {
    var num1 = Number(req.params.num1);
    var num2 = Number(req.params.num2);

    math.suma(num1,num2,(err,data) => {
        if(err){
            console.log("Error Suma");
        }
        math.resta(10,data,(err,data) => {
            if(err){
                console.log("Error Resta");
            }
            math.division(2,0,(err,data)=>{
                if(err){
                    console.log("Error Division");
                    res.send("Error Division");
                    return;
                }
                math.multiplicacion(20,data,(err,data)=>{
                    if(err){
                        console.log("Error Multiplicacion");
                    }
                    res.send("Resultado: "+ data);
                });
            });
        });
    });
});

module.exports = router;

