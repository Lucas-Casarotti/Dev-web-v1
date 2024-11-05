
// Estrutura de condição

var num1 = 10;
var num2 = 20;
var num3 = 30;

// com operador && (AND), todas as condições precisam ser verdadeiras
if(num1 > num2 && num3 > num2){
    console.log(true);
}
else {
    console.log(false);
}

console.log("Resultado de (5 - 5) && (10 + 10)");   // 5 - 5 = 0, 0 retorna false
if((5 - 5) && (10 + 10)){
    console.log("Vardeiro");
}
else {
    console.log("Falso");
}

console.log("Resultado de (5 - 10) && (10 + 10)"); // 5 - 10 = -5, mesmo sendo um valor negativo retorna true
if((5 - 10) && (10 + 10)){
    console.log("Vardeiro");
}
else {
    console.log("Falso");
}

// se as duas condições forem verdadeiras, sempre retorna a última
var teste = 'gato' && 'cão';
if (teste){
    console.log(teste);
}
// se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos
var teste2 = 5 - 5 && 10 + 10;
if (teste){
    console.log(teste2);
}

// ----------------------------------------------------------------------------------------------



// com operador || (OR), apenas uma das condições precisa ser verdadeira

if(num1 > num2 || num3 > num2){
    console.log(true);
}
else {
    console.log(false);
}




// sempre retorna o primeiro valor true que encontrar
var cond = '10' || false;

if(cond){
    console.log(cond);
}

var cond2 = (10 - 10) || (10 + 10) || (1 + 1);

if(cond){
    console.log(cond2);
}