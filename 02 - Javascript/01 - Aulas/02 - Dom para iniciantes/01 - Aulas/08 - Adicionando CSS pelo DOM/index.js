// criando um elemento
var titulo = document.getElementsByTagName('h1')[0];
var titulo2 = document.getElementsByTagName('h1')[1];

// adicionando css pelo dom
titulo.style.color = "red";
titulo.style.fontSize = "120px";
titulo.style.background = "blue";

// adicionando em uma única linha
titulo2.style.cssText = "font-size: 100px; color: blue; background: red";