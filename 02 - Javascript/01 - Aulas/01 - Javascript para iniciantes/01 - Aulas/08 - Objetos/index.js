// Objetos

// criando um objeto vazio
var teste = {};

console.log(typeof teste);

// objeto com propriedades
var pessoa = {
    nome: 'Lucas',
    idade: 24,
}

console.log(pessoa);


// objeto com propriedades e métodos
var calculo = {
    soma: function(n1, n2){
        return n1 + n2;
    },
    mult: function(n1, n2){
        return n1  * n2;
    },
}

console.log(calculo.soma(10, 10));
console.log(calculo.mult(10, 10));


// acessando propriedades de um objeto
var obj = {
    width: 300,
    height: 300,
    backgroudColor: 'black',
}

console.log(obj.backgroudColor);

// alterando o valor de uma propriedade
obj.backgroudColor = 'blue';
console.log(obj.backgroudColor);


// adicionando novas propriedades
obj.color = 'verde';
console.log(obj.color);


