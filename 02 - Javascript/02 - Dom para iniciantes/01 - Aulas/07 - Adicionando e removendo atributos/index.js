var botao1 = document.getElementById("botao1");
var botao2 = document.getElementById("botao2");

botao1.addEventListener("click", function(){
    console.log("TESTE")
    if(botao2.textContent == "Habilitado"){
        // adicionando um atributo ao botão
        botao2.setAttribute("disabled", "disabled");
        botao2.textContent = "Desabilitado";
        botao1.textContent = "Habilitar"

    }else {
        // removendo um atributo
        botao2.removeAttribute("disabled");
        botao2.textContent = "Habilitado";
        botao1.textContent = "Desabilitar"
    }
});