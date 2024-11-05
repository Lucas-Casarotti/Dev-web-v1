
// Função anônima é uma função sem nome

const showMessage = function(){
    return "Olá, mundo";
}

console.log(showMessage());

const showMessage2 = function(message, name){
    return message + name;
}

console.log(showMessage2("Olá, ", "Lucas"));