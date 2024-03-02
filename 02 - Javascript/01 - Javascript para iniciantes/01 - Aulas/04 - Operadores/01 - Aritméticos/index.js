

// Operadores aritméticos

var soma = 10 + 10;
var subtracao = 10 - 5;
var multiplicacao = 10 * 10;
var divisao = 100 / 10

console.log("10 + 10  = " + soma);
console.log("10 - 5   = " + subtracao);
console.log("10 * 10  = " + multiplicacao);
console.log("100 / 10 = " + divisao);


// Operadores aritiméticos (string)

var soma2 = '10' + 10;              // 1010
var subtracao2 = '10' - 5;          // 5
var multiplicacao2 = '10' * '10';   // 100
var divisao2 = 'tenho 100' / 10     // NaN 


console.log(soma2);
console.log(subtracao2);
console.log(multiplicacao2);
console.log(divisao2);
console.log(isNaN(divisao2))

// incremento
var x = 10;
console.log(++x);