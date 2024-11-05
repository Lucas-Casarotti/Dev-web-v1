
// selecionando o elemento
var elemento1 = document.querySelector('p');
console.log(elemento1);

var elemento2 = document.getElementById('nome2');
console.log(elemento2);


// alterando elemento com innerHTML
elemento1.innerHTML = 'Olá, meu nome é Messi';
console.log(elemento1);

// alterando com textContent
// textContent é mais utilizado e recomendado.
elemento2.textContent = 'Olá, me chamo Cristiano Ronaldo';
console.log(elemento2);