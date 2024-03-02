// 1. Crie uma array com os anos que o Brasil ganhou a copa (1958, 1962, 1970, 1994 e 2002).
var TitulosBrasil = ['1958', '1962', '1970', '1994', '2002'];

console.log('Titulos do Brasil ' + TitulosBrasil);

// 2. Interaja com a array utilizando um loop para mostrar no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`.
for(i=0; i < TitulosBrasil.length; i++){
    console.log(`O brasil ganhou a copa de ${TitulosBrasil[i]}`);
}


// 3. Interaja com um loop nas frutas abaixo e pare ao chegar em Pera.
// var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
for(i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
    if(frutas[i] == 'Pera'){
        break;
    }
}

// 4. Coloque a última fruta da array acima em uma variável, sem remover a mesma da array.
var ultimafruta = frutas[4];
console.log(ultimafruta);

var ultima = frutas[frutas.length - 1];
console.log(ultima);