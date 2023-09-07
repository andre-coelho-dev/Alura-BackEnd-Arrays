const nomes =["Evaldo", "Maria", "Camir"];

// nomes.forEach(function(nome) {
//   console.log(nome);
// });

// nomes.forEach((nome) => {
//   console.log(nome);
// });

function imprimiNome(nome) {
  console.log(nome);
};

nomes.forEach(imprimiNome);

// // Revisando callbacks

// Explicação

// Para explorar um pouco como as funções callback ("chamada de volta") funcionam, vou criar um novo arquivo chamado callbacks.js para trabalharmos um pouco em cima de uma nova lista. Vou chamá-la de nomes e ela vai receber algumas strings.

// const nomes = ["Evaldo", "Mari", "Camis"];

// Agora, vamos chamar um forEach e passar como parâmetro uma função callback, function. Dentro das chaves podemos escrever console.log(nome) e para isso precisamos ter nome como parâmetro da função callback.

// const nomes = ["Evaldo", "Mari", "Camis"];

// nomes.forEach(function (nome) {
//   console.log(nome);
// });

// Vamos salvar esse arquivo e executar no terminal.

// node callbacks.js
// Evaldo

// Mari

// Camis

// Como esperado, os nomes do índice foram impressos.

// Bora explorar um pouco mais sobre como podemos lidar com as funções callback.

// Você já deve ter visto que em uma função anônima também podemos usar a sintaxe de arrow funtion (=>), em português seria algo como "função flecha". Agora vou escrever esse mesmo código, mas usando uma arrow funtion. Vamos apagar o function e, entre o parênteses e a abertura das chaves, vamos inserir sinal de igual e sinal de maior que: =>.

// const nomes = ["Evaldo", "Mari", "Camis"];

// nomes.forEach(function (nome) {
//   console.log(nome);
// });

// nomes.forEach((nome) => {
//   console.log(nome);
// });

// Vai funcionar igual. Podemos salvar e executar no terminal. Como deixei o código anterior vai exibir duplicado.

// node callbacks.js
// Evaldo

// Mari

// Camis

// Evaldo

// Mari

// Camis

// Os dois códigos são equivalentes.

// Por fim, temos uma terceira forma de utilizar funções callback. Podemos criar a função callback de forma externa. Vamos escrever function imprimeNome(nome){}, dentro da função vou dar um console.log() no nome que recebi como parâmetro.

// Depois de declarada a função podemos escrever nomes.forEach() e vamos passar a função que acabamos de criar, nomes.forEach(imprimeNome). Apenas isso, ela vai funcionar da mesma forma que as outras funções callback.

// Para o terminal não ficar muito poluído, vamos comentar os códigos das duas formas anteriores selecionando-os e usando o atalho "Ctrl + ;" no caso do Windows.

// const nomes = ["Evaldo", "Mari", "Camis"];

// // nomes.forEach(function (nome) {
// //  console.log(nome);
// // });

// // nomes.forEach((nome) => {
// //  console.log(nome);
// // });

// function imprimeNome(nome) {
//   console.log(nome);
// }

// nomes.forEach(imprimeNome);

// Para testar, vamos salvar o arquivo e executá-lo novamente:

// node callbacks.js
// Evaldo

// Mari

// Camis

// Teve o mesmo resultado. Então podemos criá-la de forma externa e passar apenas a referência dela como parâmetro do método forEach. Quando queremos passar a referência de uma função, basta colocar só o nome dela, sem abrir e fechar parênteses, com os parênteses assim, por exemplo, imprimeNome(), vai dar erro.

// Pois, com os parênteses estaremos executando a função, se executarmos ela dentro do forEach, ele vai entender que estamos querendo pegar o retorno da função, mas não estamos retornando nada para a função imprimeNome. Aqui só queremos passar a referência dela.

// A arrow function é uma sintaxe mais moderna e mais sucinta, que você vai ver bastante no mercado.