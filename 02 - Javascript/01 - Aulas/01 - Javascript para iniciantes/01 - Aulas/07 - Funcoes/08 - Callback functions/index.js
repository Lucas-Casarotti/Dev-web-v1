
// exemplo de callback
// callback é quando passamos uma function para outra function como parametro e executar ela no código

function resultado(num){
    console.log("Resultado é: " + num);
}
function soma(a, b, callback){
    var op = a + b;
    callback(op);
}

function multiplicacao(a, b, callback){
    var op = a * b;
    callback(op);
}

soma(2,2, resultado);
multiplicacao(10, 10, resultado);
