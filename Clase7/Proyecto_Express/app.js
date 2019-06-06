const express = require("express");
const app = express();
var bodyParser = require("body-parser");

app.get("/",(req,res) => {
    console.log(req.params);
    res.send("Hola soy Get")
});

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post('/user', function (req, res) {
    console.log(req.body)
    res.send();
});

app.listen(3003, () => {
    console.log("Iniciando servidor...");
});