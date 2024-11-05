
// evento onload só é carregado quando toda a página já foi carregado, ou seja, o último evento
// criando um elemento e adicionando após o onload da página

var teste = document.createElement("h1");
teste.innerHTML = "Evento onload";
window.onload = function (){
    var div = document.getElementsByClassName("divPai")[0];
    div.appendChild(teste);
}