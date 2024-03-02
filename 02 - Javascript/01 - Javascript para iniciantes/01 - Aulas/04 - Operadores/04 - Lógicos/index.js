

// Operadores lógicos

var n1 = 10;
var n2 = 10;

// ambas condições devem ser verdadeiras
var OperadorAND = (n1 > 9 && n2 >= 10); 
console.log(OperadorAND);

// apenas uma das condições deve ser verdadeira
var OperadorOR = (n1 > 20 || n2 > 5);   
console.log(OperadorOR);


// se a operação for falsa ele retorna true
var OperadorNegacao = !(n1 > n2);    
console.log(OperadorNegacao);