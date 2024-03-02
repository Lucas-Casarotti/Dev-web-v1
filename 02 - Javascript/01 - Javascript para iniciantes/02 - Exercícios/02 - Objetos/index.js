
// 1. Crie um objeto com os seus dados pessoais, deve possuir pelo menos duas propriedades (nome e sobrenome).
var DadosPessoais = {
    nome: 'Lucas',
    sobrenome: 'Casarotti',
}

console.log(DadosPessoais);

//2. Crie um método no objeto anterior que mostre o seu nome completo.
DadosPessoais.NomeCompleto = function (){
    return `${this.nome} ${this.sobrenome}`;
}

console.log(DadosPessoais.NomeCompleto());

// 3. Modifique o valor da proriedade preco para 3000.
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco);

// 4. Crie um objeto de um cachorro que representa um labrador com a cor preta, 10 anos de idade e que late ao ver um homem.
var cachorro = {
    raca: 'Labrador',
    cor: 'preto',
    idade: 10,
    latir: function(pessoa){
        if(pessoa === 'homem'){
            return 'Latido';
        }else {
            return 'Não latiu';
        }
    }
}

console.log(cachorro.latir('homem'));