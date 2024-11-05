

var btn = document.getElementById("btn");

var div = document.querySelector("div");

// criando uma function para quando o botão for clicado
btn.addEventListener("click", function(){
    if(div.style.backgroundColor === "black"){
        btn.textContent = "Apagar a luz";
        div.style.backgroundColor = "white";
        
    }else {
        btn.textContent = "Acender a luz";
        div.style.backgroundColor = "black";
    }
});