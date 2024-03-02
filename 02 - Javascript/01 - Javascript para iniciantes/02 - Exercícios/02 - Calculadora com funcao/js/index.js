
function Calcular(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    if((isNaN(n1)) || (isNaN(n2))){
        alert("Apenas números!");
    }
    else {
        var resultado = n1 + n2;
        alert(resultado);
    }
}
