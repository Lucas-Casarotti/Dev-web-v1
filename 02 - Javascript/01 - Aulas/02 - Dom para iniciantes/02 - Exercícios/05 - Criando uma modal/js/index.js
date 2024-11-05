var btn = document.getElementById("btnQRCode");
var modal = document.getElementById("divModal");
var btnClose = document.getElementById("btnFecharDiv");


btn.addEventListener("click", function() {
    modal.style.display = "block";
});

btnClose.addEventListener("click", function(){
    modal.style.display = "none";
});

function Copiar(){
    var texto = document.getElementById("CD_Pix").innerText;
    navigator.clipboard.writeText(texto);
    alert("Copia e cola disponível na área de transferência (CTRL + V)");
}