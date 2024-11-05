

// O que é Hosting em uma função?
// Hosting ou içamento, é um comportamento padrão do js que permite a execução da função antes das suas declarações.
//Exemplo:

retornaNome('Lucas', 'Casarotti');

function retornaNome(nome, sobrenome){
    console.log(`Olá, me chamo ${nome} ${sobrenome}`);
}