module.exports = {
    suma,
    resta,
    multiplicacion,
    division
}
function suma(a,b){
    return new Promise((resolve,reject) => {
        if(b = 0){
            reject("Error el segundo numero es igual 0");
            return;
        }
        resolve(a+b);
    });
}

function resta(a,b){
    return new Promise((resolve,reject) => {
        resolve(a-b);
    });
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