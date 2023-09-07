const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function (nota) {
  somaDasNotas += nota;
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);


// Funções callback
// -> Média forEach

// Explicação

// forEach
// Calcule a média entre as seguintes notas usando o forEach:

// 10
// 6.5
// 8
// 7.5
// No VS Code, criaremos um arquivo chamado media-forEach.js. Lembrando que, no código, o "E" de forEach deve ser sempre maiúsculo, senão o código não vai funcionar. Podemos copiar a constante notas que usamos no arquivo media-for.js e colaremos no media-forEach.js:

// const notas = [10, 6.5, 8, 7.5];


// Anteriormente, usamos estruturas da linguagem, mas agora vamos usar um método do array, para isso usaremos o ponto (.). O forEach é um método e dentro do parâmetro dele passaremos uma outra função para esse método. Podemos escrever uma função anônima do JS.

// const notas = [10, 6.5, 8, 7.5];

// notas.forEach(function () {

// });


// Vejamos o que acontece se colocarmos um console.log('oi') dentro dessa função anônima.

// const notas = [10, 6.5, 8, 7.5];

// notas.forEach(function () {
//   console.log('oi')
// });


// Vamos salvar o arquivo e executá-lo no terminal:

// node media-forEach.js


// oi

// oi

// oi

// oi

// Foi impresso "oi" quatro vezes, isso indica que o forEach também é uma estrutura de repetição. Essa função anônima foi passada como parâmetro de outra função, o forEach. Quando uma função é parâmetro de outra, chamamos a função passada como callback. Ou seja, essa função anônima também é callback nesse caso.

// Em português, callback significa "chamar de volta". tem esse nome porque é uma função que estamos guardando de alguma forma na lógica interna do forEach e ela vai ser chamada de volta em determinados momentos. Mais especificamente, ela será chamada para cada elemento do array de notas. Por isso o terminal imprimiu o "oi" quatro vezes.

// Mas como acessar os valores das notas aqui dentro? Depois de criar uma variável somaDasNotas que recebe 0 como pegaremos o valor das notas para incrementar na somaDasNotas?

// const notas = [10, 6.5, 8, 7.5];

// let somaDasNotas = 0;

// notas.forEach(function () {

// });


// Para obter o valor de cada uma das notas podemos passar nota como parâmetro da função anônima.

// const notas = [10, 6.5, 8, 7.5];

// let somaDasNotas = 0;

// notas.forEach(function (nota) {

// });


// Vamos ver o que acontece ao inserirmos um console.log(nota) e executarmos novamente no terminal.

// const notas = [10, 6.5, 8, 7.5];

// let somaDasNotas = 0;

// notas.forEach(function (nota) {
//   console.log(nota)
// });


// 10

// 6.5

// 8

// 7.5

// No terminal, foram impressas cada uma das notas.

// Essa é uma forma de usar parâmetros um pouco diferente das que estamos acostumados. Porque não é nós que estamos definindo o valor desse parâmetro nota, quem está definindo ele é a lógica interna do forEach.

// Com trata-se de lógica interna, se você ficar confusa ou confuso não se preocupe. O parâmetro que passarmos será interpretado como a nota e podemos utilizar do jeito que quisermos.

// Agora, vamos apagar o console.log() e inserir somaDasNotas += nota.

// const notas = [10, 6.5, 8, 7.5];

// let somaDasNotas = 0;

// notas.forEach(function (nota) {
//   somaDasNotas += nota;
// });


// Inclusive, vou voltar no arquivo da aula anterior e copiar as duas últimas linhas para usarmos aqui também, pois aqui faremos a mesma coisa.

// const notas = [10, 6.5, 8, 7.5];

// let somaDasNotas = 0;

// notas.forEach(function (nota) {
//   somaDasNotas += nota;
// });

// const media = somaDasNotas / notas.length;

// console.log(`A média das notas é ${media}.`);


// Para testar, vamos salvar o arquivo e executá-lo novamente:

// node media-forEach.js

// A média das notas é 8.

// Podemos perceber que o forEach tem uma lógica parecida com o for of, ele fornece diretamente o valor do elemento do array, que nesse caso nomeamos de nota, e ele também sempre vai do início ao fim do array.

// Mas o forEach tem uma vantagem em relação ao for of. Nos parâmetros da função callback, podemos passar mais um parâmetro, usando uma vírgula entre os parâmetros. Vamos chamá-lo de indice, por exemplo. Agora, além da nota, podemos ter acesso a esse indice. Vamos inserir um console.log('indice') para vermos o que aparece no terminal.

// const notas = [10, 6.5, 8, 7.5];

// let somaDasNotas = 0;

// notas.forEach(function (nota, indice) {
//   somaDasNotas += nota;
//     console.log(indice)
// });

// const media = somaDasNotas / notas.length;

// console.log(`A média das notas é ${media}.`);


// Para testar, vamos salvar o arquivo e executá-lo novamente:

// node media-forEach.js
// 0

// 1

// 2

// 3

// 4

// A média das notas é 8.

// E cada um dos índices do array foram impressos. Enquanto o for of dava somente o valor de cada um dos elementos, o forEach além de dar o valor dos elementos também dá o índice.

// Provavelmente, no mercado, você verá o forEach sendo bastante utilizado, até mais do que o for of. Mas é importante você conhecer cada uma das estruturas, as diferenças entre elas e saber quando usar cada uma delas.

// Como não estamos precisando do índice para este desafio, vou apagar e deixar apenas o parâmetro nota.

// const notas = [10, 6.5, 8, 7.5];

// let somaDasNotas = 0;

// notas.forEach(function (nota) {
//   somaDasNotas += nota;
// });

// const media = somaDasNotas / notas.length;

// console.log(`A média das notas é ${media}.`);