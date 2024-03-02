// evento mouseover
var titulo = document.querySelector("h1");

titulo.addEventListener("mouseover", function(){
    this.style.fontSize = "100px";
    this.style.background = "blue";
})

// evento mouseout
titulo.addEventListener("mouseout", function(){
    this.style.fontSize = "50px";
    this.style.background = "red";
})