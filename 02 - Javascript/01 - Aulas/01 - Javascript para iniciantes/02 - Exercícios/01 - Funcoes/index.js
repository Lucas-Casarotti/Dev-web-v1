// 1. Crie uma função para verificar se um valor é Truthy.
function func01(valor){
    return !!valor;
}

func01('');

// 2. Crie uma função matemática que retorne o perímetro de um quadrado, lembrando: perímetro é a soma dos quatro lados do quadrado.
function func02(perimetro){
    return perimetro * 4;
}

func02(10);

// 3. Crie uma função que retorne o seu nome completo, ela deve possuir os parâmetros: nome e sobrenome.
function func03(nome, sobrenome){
    return `Olá, me chamo ${nome} ${sobrenome}`;
}

func02('Lucas', 'Matheus');

// 4. Crie uma função que retorne o tipo de dado do argumento passado nela (typeof).
function func04(tipo){
    return typeof tipo;
}

var teste = 2;
func04(teste);

// 5. Crie uma função que retorne se o número é ímpar ou par.
function func05(numero){
    if (numero % 2 == 0){
        return 'Número par';
    }else {
        return 'Número ímpar';
    }
}

func05(10);

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

// addEventListener('click', function(){
//     console.log('Lucas Matheus');
// });

var btn = document.getElementById("btn");

btn.addEventListener('click', function(){
    console.log('Botão clicado');
})