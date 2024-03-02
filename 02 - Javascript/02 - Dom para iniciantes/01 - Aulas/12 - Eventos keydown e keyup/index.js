// evento keydown é ativado quando uma tecla é pressionada
document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        alert("Apertou a tecla 'Enter'");
    }
})

// evento keyup é usado para quando uma tecla volta a posição normal, ou seja, quando para de pressionar uma tecla
document.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        alert("Soltou a tecla 'Enter'");
    }
})
