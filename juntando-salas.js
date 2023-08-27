const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];

const salasUnificadas = salaJS.concat(salaPython);

console.log(salasUnificadas);


// Explicação

// Juntando as salas
// Haverá uma palestra sobre padrões de projetos para estudantes das salas de JavaScript e Python. Nossa missão é juntar ambas as salas em uma única lista que exiba o nome de todas as pessoas.

// Em resumo, temos duas listas e precisamos juntá-las.

// Unindo listas
// No VS Code, criaremos um arquivo chamado juntando-salas.js. Primeiramente, vamos declarar duas listas — uma com os nomes dos estudantes de JavaScript e outra com estudantes de Python:

// const salaJS = ["Evaldo", "Camis", "Mari"];
// const salaPython = ["Ju", "Leo", "Raquel"];

// Mais uma vez, teremos um método para nos auxiliar na junção dessas listas: o concat(), que vem da palavra "concatenar". Em programação, isso significa "juntar":

// const salaJS = ["Evaldo", "Camis", "Mari"];
// const salaPython = ["Ju", "Leo", "Raquel"];

// salaJS.concat();

// Dentro dos parênteses desse método, passaremos como parâmetro outra lista. No caso, salaPython:

// const salaJS = ["Evaldo", "Camis", "Mari"];
// const salaPython = ["Ju", "Leo", "Raquel"];

// salaJS.concat(salaPython);

// O método concat() não alterará nenhum dos arrays, ele retornará uma nova lista. Sabendo disso, vamos guardar o resultado numa constante chamada salasUnificadas:

// const salaJS = ["Evaldo", "Camis", "Mari"];
// const salaPython = ["Ju", "Leo", "Raquel"];

// const salasUnificadas = salaJS.concat(salaPython);

// Em seguida, usaremos um console.log() para exibir salasUnificadas:

// const salaJS = ["Evaldo", "Camis", "Mari"];
// const salaPython = ["Ju", "Leo", "Raquel"];

// const salasUnificadas = salaJS.concat(salaPython);

// console.log(salasUnificadas);

// Após salvar o arquivo, vamos executá-lo no terminal integrado:

// node juntando-salas.js

// [ 'Evaldo', 'Camis', 'Mari', 'Ju', 'Leo', 'Raquel' ]

// Como resultado, temos um novo array com todos os nomes — primeiro com estudantes de JavaScript e, depois, os de Python. Conseguimos juntar as duas listas com sucesso!

// Vale lembrar que a ordem em que informamos os arrays afeta a ordem em que os nomes aparecerão na lista final. Para demonstrar essa diferença, vamos inverter as referências na linha em que atribuímos o valor da constante salasUnificadas. Em vez de salaJS, colocaremos salaPython e, em lugar de salaPython, usaremos salaJS:

// const salaJS = ["Evaldo", "Camis", "Mari"];
// const salaPython = ["Ju", "Leo", "Raquel"];

// const salasUnificadas = salaPython.concat(salaJS);

// console.log(salasUnificadas);

// Após salvar as alterações, executaremos o arquivo no terminal:

// node juntando-salas.js

// [ 'Ju', 'Leo', 'Raquel', 'Evaldo', 'Camis', 'Mari' ]

// Agora, os nomes dos estudantes de Python aparecem antes dos de JavaScript.

// Vale reforçar mais uma vez que é importante nos atentarmos se o método retorna um novo array ou não.