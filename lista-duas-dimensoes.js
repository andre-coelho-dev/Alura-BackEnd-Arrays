const alunos = ["João", "Juliana", "caio", "Ana"];

const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

console.log(`A aluna da posição 1 da lista de alunos é: ${
  listaDeAlunosEMedias[0][1]
}. A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}`);


// Explicação

// Lista com 2 dimensões
// Foram fornecidas duas listas para nós. A primeira contém os nomes de quatro estudantes e a segunda possui suas respectivas médias:

// 'João', 'Juliana', 'Caio', 'Ana'
// 10, 8, 7.5, 9
// Nosso objetivo é criar uma lista que contenha essas duas listas. Já adiantando: é possível uma lista conter outras listas. A seguir, vamos aprender como lidar com esse tipo de dado mais complexo.

// Listas dentro de listas
// No VS Code, vamos criar um arquivo chamado lista-duas-dimensoes.js. Começaremos declarando duas listas, uma com os nomes das pessoas estudantes e outra com suas notas:

// const alunos = ["João", "Juliana", "Ana", "Caio"];
// const medias = [10, 8, 7.5, 9];
// Em seguida, vamos declarar uma lista chamada listaDeAlunosEMedias, que conterá as listas alunos e medias. O primeiro elemento será a lista de estudantes e o segundo será a lista de médias:

// const alunos = ["João", "Juliana", "Ana", "Caio"];
// const medias = [10, 8, 7.5, 9];

// const listaDeAlunosEMedias = [alunos, medias];
// Depois, vamos usar um console.log() para imprimir listaDeAlunosEMedias e checarmos o resultado:

// const alunos = ["João", "Juliana", "Ana", "Caio"];
// const medias = [10, 8, 7.5, 9];

// const listaDeAlunosEMedias = [alunos, medias];

// console.log(listaDeAlunosEMedias);
// Após salvar o arquivo, vamos executá-lo no terminal integrado:

// node lista-duas-dimensoes.js
// [ [ 'João', 'Juliana', 'Ana', 'Caio' ], [ 10, 8, 7.5, 9 ] ]

// O retorno pode parecer um pouco estranho, mas está correto. Trata-se de uma lista cujo conteúdo são duas listas. Nas extremidades, abrimos e fechamos os colchetes do array "externo". Dentro dele, temos a lista de estudantes na primeira posição e a lista de médias na segunda posição.

// Acessando elementos
// Conseguimos criar uma lista que contém outras duas listas, mas como faremos para acessar elementos dentro delas? Por exemplo, como podemos selecionar Juliana, que está na posição 1 da lista alunos? Vamos descobrir, a seguir.

// Primeiramente, vamos alterar o que está sendo impresso com console.log(). Em vez da listaDeAlunosEMedias, usaremos uma template string:

// const alunos = ["João", "Juliana", "Ana", "Caio"];
// const medias = [10, 8, 7.5, 9];

// const listaDeAlunosEMedias = [alunos, medias];

// console.log(
//     `A aluna da posição 1 da lista de alunos é: ${}.`
// );
// Dentro das chaves, vamos digitar listaDeAlunosEMedias seguido do número 0 entre colchetes, pois a lista de alunos está na posição 0:

// // ...

// console.log(
//     `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0]}.`
// );
// Portanto, listadeAlunosEMedias[0] representa a lista de alunos. Na sequência, vamos acessar a posição 1 da lista de alunos, pois sabemos que é onde está Juliana. Após [0], basta abrir e fechar outros colchetes e inserir o valor 1 entre eles:

// // ...

// console.log(
//     `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.`
// );
// Recapitulando: a sintaxe ficará listaDeAlunosEMedias[0][1]. Vamos salvar as alterações e executar o arquivo:

// node lista-duas-dimensoes.js
// A aluna da posição 1 da lista de alunos é: Juliana.

// Conseguimos acessar a aluna Juliana! A sintaxe listaDeAlunosEMedias[0][1] é uma forma de acessar elementos em uma lista de duas dimensões — ou seja, quando há uma lista composta por outras listas. Primeiro, informamos a posição que queremos acessar da lista "externa", depois informamos a posição que queremos acessar da lista "interna".

// Digamos que agora também precisamos indicar a média da Juliana. Vamos relembrar as listas que foram fornecidas no início do desafio:

// 'João', 'Juliana', 'Caio', 'Ana'
// 10, 8, 7.5, 9
// A primeira média pertence ao primeiro aluno, a segunda média pertence à segunda aluna, e assim em diante. Logo, sabemos que a média de Juliana é 8.

// Vamos incrementar nossa template string:

// // ...

// console.log(
//     `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.
//     A nota dessa aluna é ${}.
//     `
// );
// Dentro das chaves, primeiramente acessaremos a posição 1 da listaDeAlunosEMedias. Assim, teremos acesso à lista medias:

// // ...

// console.log(
//     `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.
//     A nota dessa aluna é ${listaDeAlunosEMedias[1]}.
//     `
// );
// Uma vez dentro da lista de médias, vamos acessar a nota de Juliana, que está na posição 1 também. O código completo ficará assim:

// const alunos = ["João", "Juliana", "Ana", "Caio"];
// const medias = [10, 8, 7.5, 9];

// const listaDeAlunosEMedias = [alunos, medias];

// console.log(
//     `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.
//     A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}.
//     `
//   );
// Após salvar o arquivo, vamos executá-lo no terminal:

// node lista-duas-dimensoes.js
// A aluna da posição 1 da lista de alunos é: Juliana.

// A nota dessa aluna é 8.

// Mais uma vez, alcançamos nosso objetivo!

// Recomendamos praticar bastante essa lógica de acesso de valores em listas de duas dimensões. Em um primeiro momento, é normal que essa sintaxe pareça confusa, mas gradualmente nos acostumamos a ela.