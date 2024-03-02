// Arrays
var videogames = ['PS1', 'PS2', 'PS3', 'PS4', 'PS5'];

// imprimindo um array
console.log(videogames);

// acessando elementos de um array
console.log(videogames[0]);
console.log(videogames[1]);
console.log(videogames[2]);
console.log(videogames[3]);
console.log(videogames[4]);

// métodos e propriedades de um array
console.log('-------------------');
console.log(videogames.pop()); // remove o último item do array e imprime ele;
console.log(videogames);


console.log('-------------------');
videogames.push('PS6'); // adiciona um novo item no final array
console.log(videogames);


console.log('-------------------');
console.log(videogames.length);  // imprime o tamanho do array


// imprimindo todos os itens do array com um for
for(i = 0; i < videogames.length; i++){
    console.log(videogames[i]);
}

console.log('-------------------')
// imprindo os itens do array até chegar no PS2
for(i = 0; i < videogames.length; i++){
    console.log(videogames[i]);
    if(videogames[i] == 'PS3'){
        break;
    }
}