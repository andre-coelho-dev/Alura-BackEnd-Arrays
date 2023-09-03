const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let nota of notas) {
  somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);


// Média com for of

// // Explicação

// for of
// Calcule a média entre as seguintes notas usando o for of:

// 10
// 6.5
// 8
// 7.5
// No VS Code, criaremos um arquivo chamado media-for-of.js. Podemos copiar a constante notas que usamos no arquivo media-for.js:

// const notas = [10, 6.5, 8, 7.5];


// Em seguida, vamos desenvolver o for of. Sua estrutura é semelhante ao for, mas a sintaxe é diferente. Começaremos digitando for, seguido de um par de parênteses e um par de chaves:

// const notas = [10, 6.5, 8, 7.5];

// for () {

// }


// Dentro dos parênteses, vamos escrever let elemento of notas:

// const notas = [10, 6.5, 8, 7.5];

// for (let elemento of notas) {

// }


// Para verificar o que essa estrutura faz, vamos colocar um console.log() dentro das chaves desse for:

// const notas = [10, 6.5, 8, 7.5];

// for (let elemento of notas) {
//     console.log(elemento);
// }


// Vamos salvar o arquivo e executá-lo no terminal:

// node media-for-of.js


// 10

// 6.5

// 8

// 7.5

// As quatro notas do nosso array notas foram impressas no console. Vamos analisar o código para compreender como ele funciona.

// Diferentemente do for clássico, o for of é composto por uma única expressão. Além disso, essa estrutura é caracterizada pelo of, que incluímos após let elemento. O termo of significa "de", em inglês.

// Portanto, com essa expressão, é como se estivéssemos dizendo: para cada elemento de notas, execute o código que está dentro das chaves. O for of é muito adequado para utilizarmos com arrays.

// No for clássico, nós mesmos declaramos uma variável de controle, a incrementamos manualmente e indicamos a condição para a continuidade (ou não) do loop, que será avaliada a cada iteração. Já no for of, o JavaScript automatiza alguns desses processos.

// Quando queremos percorrer um array, podemos usar o for of. Assim, o JavaScript já entende que temos que percorrer o array do início ao fim. A grande vantagem dessa estrutura é que podemos selecionar diretamente o valor de cada elemento da lista e, por exemplo, imprimi-lo com um console.log(), como fizemos.

// Então, seguindo a mesma lógica do vídeo anterior, antes do for of, vamos declarar uma variável chamada somaDasNotas com valor inicial igual a 0:

// const notas = [10, 6.5, 8, 7.5];

// let somaDasNotas = 0;

// for (let elemento of notas) {
//     console.log(elemento);
// }


// Dentro das chaves do for of, em vez do console.log(), vamos incrementar o valor de somaDasNotas com o valor de elemento:

// const notas = [10, 6.5, 8, 7.5];

// let somaDasNotas = 0;

// for (let elemento of notas) {
//     somaDasNotas += elemento;
// }


// Usamos a palavra "elemento", porque é um termo genérico. Vamos renomeá-lo para um nome mais específico para nosso caso. Posicionaremos o cursor sobre elemento, pressionaremos a tecla "F2" e o renomearemos de "elemento" para "nota". Assim, o código ficará mais semântico:

// const notas = [10, 6.5, 8, 7.5];

// let somaDasNotas = 0;

// for (let nota of notas) {
//     somaDasNotas += nota;
// }


// Em suma, para cada nota na lista notas, vamos incrementar a variável somaDasNotas com o valor da nota que está sendo iterada naquele momento.

// Por fim, usaremos o console.log() para imprimir o valor de sonaDasNotae verificar se o cálculo está correto:

// const notas = [10, 6.5, 8, 7.5];

// let somaDasNotas = 0;

// for (let nota of notas) {
//     somaDasNotas += nota;
// }

// console.log(somaDasNotas);


// Após salvar o arquivo, vamos executá-lo no terminal:

// node media-for-of.js
// 32


// O resultado está correto! A partir de agora, o cálculo da média será igual à lógica que criamos no vídeo anterior. Inclusive, podemos simplesmente copiar as duas últimas linhas de código de media-for.js, referentes à constante media e o console.log() com uma template string que imprime a média das notas:

// const notas = [10, 6.5, 8, 7.5];

// let somaDasNotas = 0;

// for (let nota of notas) {
//   somaDasNotas += nota;
// }

// const media = somaDasNotas / notas.length;

// console.log(`A média das notas é ${media}.`);


// Para testar, vamos salvar o arquivo e executá-lo novamente:

// node media-for-of.js
// A média das notas é 8.


// O código funciona perfeitamente!

// O for of é uma forma mais concisa de escrever o for tradicional, mas depende da situação. Ele funciona em casos que precisamos percorrer uma lista do início ao fim, passando por todos os elementos.

// O for clássico pode ter uma sintaxe mais complicada, porém ele também é mais flexível para abordar contextos mais complexos. Por exemplo, conseguimos percorrer um array de trás para frente, fazer um decremento na variável de controle e ou até aumentar essa variável de dois em dois, de três em três, caso não seja necessário passar por todos os itens da lista.

// O for of não tem toda essa flexibilidade, contudo ele fornece uma sintaxe mais sucinta que serve para a maioria dos casos, quando o objetivo é percorrer um array completo.