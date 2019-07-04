var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    user: 'utn_practica',
    password: 'zLFQCobhSLNxh6Ar'
});

module.exports={connection}