
// selecionando o elemento pai
var Elemento = document.getElementById("divPai");

// selecionando o elemento filho
var paragrafo = document.getElementById("paragrafo");

// removendo o elemento filho do elemento pai
Elemento.removeChild(paragrafo);


// removendo elemento pai
var Elemento2 = document.getElementById("divPai2");

Elemento2.remove();