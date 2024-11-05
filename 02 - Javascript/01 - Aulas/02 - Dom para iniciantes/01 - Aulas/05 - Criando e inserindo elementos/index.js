
// criando um elemento
var elemento = document.createElement("p");

// adicionando texto ao elemento
elemento = document.createTextNode("Novo elemento");

// selecionando o elemento pai pelo ID
var elementoPai = document.getElementById("divPai");

// adicionando o novo parágrafo como um filho do elemento pai
elementoPai.appendChild(elemento);
