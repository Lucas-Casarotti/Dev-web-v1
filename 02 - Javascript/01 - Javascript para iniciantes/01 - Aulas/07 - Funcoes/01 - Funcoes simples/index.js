
// Funções

function exemplo(){
    return 'Olá, isso é uma function';
}

function soma(n1, n2){
    return n1 + n2;
}

function multi(n1, n2) {
    return n1 * n2;
}

console.log(exemplo());

console.log(soma(10, 11));

console.log(multi(10, 10));


// uma função pode ou não retornar um valor

function teste1(){
    console.log("Olá");
}

function teste2(){
    return 'Olá';
}

console.log(teste1()); // retorna undefined e em seguida o 'Olá'
console.log(teste2()); // retorna o 'Olá'

teste1();             // retorna o 'Olá'
teste2();             // não retorna nada





