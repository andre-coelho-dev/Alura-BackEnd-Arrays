const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
  return nota +1 >= 10 ? 10 : nota +1;
});

console.log(notasAtualizadas)

// // Método map()

// // Explicação

// ponto extra
// Um aluno recebeu um ponto extra nas suas notas. Adicione esse ponto nas notas da seguinte lista:

// 10
// 9.5
// 8
// 7
// 6
// No VS Code, criaremos um arquivo chamado map.js. E começaremos criando a lista de notas.

// const notas = [10, 9.5, 8, 7, 6];

// Agora temos que adicionar um ponto extra para cada uma dessas notas. De alguma forma, precisaremos modificar todos os itens do array. É possível fazer isso com o forEach(), inclusive, fica o desafio para você.

// Para resolver o desafio neste vídeo usaremos um método que pode nos ajudar mais especificamente nesse caso, você vai entender porquê. Usaremos notas.map(). Ele também recebe uma função callback como parâmetro, assim como o forEach(). Vou inserir essa função callback usando uma arrow function.

// const notas = [10, 9.5, 8, 7, 6];

//  notas.map(() => {

// });

// Essa função callback vai receber nota. Se quiséssemos poderíamos inserir o índice, mas agora usaremos apenas nota:

// const notas = [10, 9.5, 8, 7, 6];

//  notas.map((nota) => {

// });

// Agora, vamos retornar o valor que queremos sobrescrever na nota. Ou seja, neste caso, se queremos adicionar um ponto extra para cada nota, vamos retornar nota + 1.

// const notas = [10, 9.5, 8, 7, 6];

//  notas.map((nota) => {
//   return nota + 1;
// });

// O map() também é uma estrutura de repetição do JS, ele vai executar essa função callback para cada uma das notas e para cada uma vai atribuir um novo valor.

// O map() é muito apropriado para reescrever arrays, que é justamente o que queremos neste desafio.

// Vamos adicionar um console.log(notas) para vermos o que acontece.

// const notas = [10, 9.5, 8, 7, 6];

//  notas.map((nota) => {
//   return nota + 1;
// });

// console.log(notas);

// Para testar, vamos salvar o arquivo e executá-lo:

// node map.js
// [10, 9.5, 8, 7, 6]

// O array não foi modificado, isso já denuncia para nós que o map() não altera o array original. Eu queria te mostrar isso porque teremos que atribuir o retorno do map() para um novo array.

// Então, antes de notas.map, vamos escrever const notasAtualizadas e daremos um console.log() em notasAtualizadas.

// const notas = [10, 9.5, 8, 7, 6];

// const notasAtualizadas = notas.map((nota) => {
//   return nota + 1;
// });

// console.log(notasAtualizadas);

// Vamos salvar o arquivo e executar novamente no terminal.

// node map.js
// [11, 10.5, 9, 8, 7]

// Agora sim, cada uma das notas recebeu um ponto extra. Porém, sabemos que uma nota não pode passar de 10, então faremos um condicional dentro do map(). Até agora vimos que o map() está funcionando do jeito que queremos! Para concluir vamos fazer essa condicional.

// Poderíamos fazer um if/else, mas nesse caso podemos usar um operador ternário para deixar o código mais conciso.

// Queremos vereificar se nota + 1 vai passar de 10. Se passar de 10, deve atribuir apenas a nota 10.

// Então, nota + 1 é maior ou igual a 10, coloca um ponto de interrogação depois da condição e, em seguida, diremos o que retornar se a condição for verdadeira. Então, se a nota somado a 1 for maior ou igual a 10, retorne apenas 10. Se não, colocaremos dois pontos (:) para informar o que retornar caso a condição seja falsa. Vamos retornar nota + 1 caso não seja maior ou igual a 10.

// const notas = [10, 9.5, 8, 7, 6];

// const notasAtualizadas = notas.map((nota) => {
//   return nota + 1 >= 10 ? 10 : nota + 1;
// });

// console.log(notasAtualizadas);

// Vamos executar no terminal para ver se funciona.

// node map.js
// [10, 10, 9, 8, 7]

// Agora sim. Agora, quando somadas a 1, as notas 10 e 9.5 não passam de 10.

// Deu certo! Mais um desafio concluído.

// O map() não substitui o forEach(), ele não consegue abranger todas as situações do forEach(). Porém, ele é muito útil nos casos em que queremos reescrever um array e alterar todos os valores de alguma forma.