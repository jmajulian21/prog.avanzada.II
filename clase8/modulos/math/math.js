module.exports = {
    suma,
    resta,
    multiplicacion,
    division
}
function suma(a,b,callback){
    callback(null,(a+b));
}
function resta(a,b,callback){
    callback(null,(a-b));
}
function multiplicacion(a,b,callback){
    callback(null,(a*b));
}
function division(a,b,callback){
    if(b==0){
        return callback("Error",null);
    }
    callback(null,(a/b));
}