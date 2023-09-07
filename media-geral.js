const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];

const salaJava = [6, 5, 8, 9, 5, 6];

const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);

  const media = somaDasNotas / notasDaSala.length;

  return media;
};

console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);

console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);

console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);

// Somando reduce

// Explicação

// médias das turmas
// Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala:

// const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];

// const salaJava = [6, 5, 8, 9, 5, 6];

// const salaPython = [7, 3.5, 8, 9.5];

// Temos três salas representadas por listas e cada uma delas tem várias médias de alunos. Bora calcular a média geral de cada turma.

// No VS Code, criaremos um arquivo chamado mediageral.js. Primeiro, vamos colar as três listas:

// const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
// const salaJava = [6, 5, 8, 9, 5, 6];
// const salaPython = [7, 3.5, 8, 9.5];

// Já vimos como calcular média antes com o forEach(), mas essa lógica de ter uma variável que começa em zero e vai incrementando aos poucos, tem um método que vai nos ajudar nesse caso de somar vários números de uma lista.

// Já vou adiantar que o código que usaremos para calcular uma média será feito para três salas. Para reutilizar esse código, usaremos uma função chamada calculaMedia que receberá a lista de notas como parâmetro.

// const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
// const salaJava = [6, 5, 8, 9, 5, 6];
// const salaPython = [7, 3.5, 8, 9.5];

// function calculaMedia(notasDaSala) {

// }

// Dentro das chaves da função vamos usar o notasDaSala.reduce(). "Reduce", em português significa "reduzir". Esse método vai iterar sobre o array, então também vamos passar uma função callback como parâmetro para ele, usaremos a arrow function. Mas os parâmetros que essa função recebe são um pouco diferentes, chamaremos o primeiro parâmetro de acumulador e o segundo será o valor do elemento que estamos iterando agora, nota.

// const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
// const salaJava = [6, 5, 8, 9, 5, 6];
// const salaPython = [7, 3.5, 8, 9.5];

// function calculaMedia(notasDaSala) {
//   notasDaSala.reduce((acumulador, nota) => {
    
//     })
// }

// Além dessa função callback podemos passar um segundo parâmetro para o reduce(). Depois da declaração da função, depois da chave de fechamento e antes do parênteses de fechamento, vamos colocar uma vírgula e o parâmetro 0, que será o valor inicial desse acumulador.

// const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
// const salaJava = [6, 5, 8, 9, 5, 6];
// const salaPython = [7, 3.5, 8, 9.5];

// function calculaMedia(notasDaSala) {
//   notasDaSala.reduce((acumulador, nota) => {
    
//     }, 0)
// }

// O zero está fazendo o papel daquela somaDasNotas que fizemos no forEach(). Vai começar com valor zero e será somada cada uma das notas.

// Para fazer isso, vamos retornar o acumulador + nota. E daremos um console.log(notasDaSala).

// O reduce não altera o array original, então precisaremos retornar o valor de reduce para uma nova variável, const somaDasNotas, e damos na verdade o console.log(somaDasNotas).

// const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
// const salaJava = [6, 5, 8, 9, 5, 6];
// const salaPython = [7, 3.5, 8, 9.5];

// function calculaMedia(notasDaSala) {
//  const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
//      return acumulador + nota;
//     }, 0);
    
//     console.log(somaDasNotas)
// }

// No final do arquivo, vamos executar a função calculaMedia(salaJS).

// const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
// const salaJava = [6, 5, 8, 9, 5, 6];
// const salaPython = [7, 3.5, 8, 9.5];

// function calculaMedia(notasDaSala) {
//  const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
//      return acumulador + nota;
//     }, 0);
    
//     console.log(somaDasNotas);
// }

// calculaMedia(salaJS);

// Podemos salvar o arquivo e testar no terminal:

// node media-geral.js
// 67.5

// Apareceu "67.5", essa é a soma das notas da salaJS. Para entendermos como essa lógica está acontecendo, vamos ver o que acontece ao somarmos mais um ao acumulador, acumulador + 1.

// const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
// const salaJava = [6, 5, 8, 9, 5, 6];
// const salaPython = [7, 3.5, 8, 9.5];

// function calculaMedia(notasDaSala) {
//  const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
//      return acumulador + 1;
//     }, 0);
    
//     console.log(somaDasNotas);
// }

// calculaMedia(salaJS);

// node media-geral.js
// 9

// Agora, ao executarmos no terminal, apareceu o número "9".

// Isso aconteceu porque o valor inicial do acumulador vai ser o zero que passamos como segundo parâmetro do reduce. E o valor que estamos retornando para essa função callback será o novo valor do acumulador para essa iteração. Se o acumulador começa com o valor zero na primeira interação, vamos retornar o valor + 1, ele vai ficar com valor 1, na segunda iteração vai ficar com valor 2 e assim por diante.

// Então, ao retornar acumulador + 1 estamos simplesmente retornando a quantidade de elementos do array do JavaScript.

// Mas se somarmos acumulador + nota, vai acontecer o comportamento que esperamos. O acumulador vai começar do zero e a cada iteração vai somar com uma nota da lista. Até por isso que chamamos de "acumulador". Ele é ótimo para esse caso em que queremos somar vários números de uma mesma lista.

// Agora, vamos apagar o console.log() e escreveremos const media = somaDasNotas / notasDaSala.length e retornaremos a média.

// const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
// const salaJava = [6, 5, 8, 9, 5, 6];
// const salaPython = [7, 3.5, 8, 9.5];

// function calculaMedia(notasDaSala) {
//   const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
//      return acumulador + nota;
//     },0);

//   const media = somaDasNotas / notasDaSala.length;

//   return media;
// }

// Fora da função, vamos inserir um console.log() com calculaMedia(salaJS), vamos inserir dentro de uma template string e a frase será "A média da sala de JavaScript é".

// const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
// const salaJava = [6, 5, 8, 9, 5, 6];
// const salaPython = [7, 3.5, 8, 9.5];

// function calculaMedia(notasDaSala) {
//   const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
//      return acumulador + nota;
//     },0);

//   const media = somaDasNotas / notasDaSala.length;

//   return media;
// }

// console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);

// Vamos salvar e testar no terminal:

// node media-geral.js
// A média da sala de JavaScript é 7.5

// Funcionou corretamente! Agora podemos copiar a linha de código do console.log() e colar duas vezes para inserirmos as outras salas. Então, o primeiro console.log() será para salaJS; o segundo console.log() será para a salaJava e o terceiro console.log() para salaPython.

// const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
// const salaJava = [6, 5, 8, 9, 5, 6];
// const salaPython = [7, 3.5, 8, 9.5];

// function calculaMedia(notasDaSala) {
//   const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
//      return acumulador + nota;
//     },0);

//   const media = somaDasNotas / notasDaSala.length;

//   return media;
// }

// console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
// console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
// console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);

// Vamos ver como fica no terminal:

// node media-geral.js
// A média da sala de JavaScript é 7.5

// A média da sala de Java é 6.5

// A média da sala de Python é 7

// Funcionou corretamente. Num primeiro momento o reduce pode parecer um pouco mais complicado, ele tem uma lógica bem interna, abstrai bastante coisa. Mas, resumindo, usamos o acumulador, informamos o valor inicial dele no segundo parâmetro do reduce e vamos atualizando o valor do acumulador a cada iteração que fazemos na lista.

// Por fim, o parâmetro acumulador também é muito chamado de acc, que é uma abreviação do nome dele em inglês. E também podemos usar diretamente o retorno da função arrow function, em vez de usar a palavra return, vamos fazer essas modificações no nosso código:

// const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
// const salaJava = [6, 5, 8, 9, 5, 6];
// const salaPython = [7, 3.5, 8, 9.5];

// function calculaMedia(notasDaSala) {
//   const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);

//   const media = somaDasNotas / notasDaSala.length;

//   return media;
// }

// console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
// console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
// console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);