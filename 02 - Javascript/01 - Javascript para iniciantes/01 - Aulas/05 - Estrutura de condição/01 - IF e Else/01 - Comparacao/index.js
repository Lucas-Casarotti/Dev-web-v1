

// Estrutura de condição
var idade = 22;

if (idade >= 18){
    console.log("Você pode dirigir");
}
else {
    console.log("Você não pode dirigir");
}

// Mesmo IF porém de forma abreviada
if (idade >=18) console.log("Você pode dirigir");
else console.log("Você não pode dirigir");

// negação, ou seja, se a operação for falsa cai no if
var n1 = 10;
var n2 = 5;

if (!n1 < n2){
    console.log("n1 não é menor que n2");
}
else {
    console.log("n1 é maior que n2");
}


var teste = "10";
var teste2 = 10;

// compara apenas o conteúdo
if (teste == teste2){
    console.log("teste é igual a teste2")
}
else {
    console.log("teste não é igual a teste2")
}
// compara o conteúdo e o tipo
if (teste === teste2){
    console.log("teste é igual a teste2")
}
else {
    console.log("teste não é igual a teste2")
}


// valores que retornam false 
//  0        = false
// ''        = false
// NaN       = false
// null      = false
// undefined = false

var v1 = 5 * 'teste 01';

if(v1){
    console.log(v1);
}
else {
    console.log("Nome não existe");
}

