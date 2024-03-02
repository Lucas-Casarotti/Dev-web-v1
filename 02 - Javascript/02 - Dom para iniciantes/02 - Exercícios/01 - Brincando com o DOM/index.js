

// 1. Retorne o url da página atual utilizando o objeto window.
var href = window.location.href;
console.log(href);


// 2. Selecione o primeiro elemento da página que possua a classe 'ativo'.
var ElementoAtivo = document.querySelector('.ativo');
console.log(ElementoAtivo);

// 3. Retorne a linguagem do navegador.
var linguagem = window.navigator.language;
console.log(linguagem);

// 4. Retorne a largura da janela.
var janela1 = window.innerWidth; // representa a largura visível
var janela2 = window.innerWidth; // representa a largura total, incluindo barras, bordas, margens e etc...
console.log(janela1);

