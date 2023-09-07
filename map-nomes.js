const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);

// Alterando strings com map()

// // Explicação

// padronizando os nomes
// Precisamos padronizar a lista de alunos para conter apenas letras maiúsculas.

// ana Julia
// Caio vinicius
// BIA silva
// Temos uma lista de strings em que os nomes não estão padronizados, alguns nomes estão com maiúsculas e outros estão com minúsculas. Vamos padronizar para ter maior consistência nos nossos dados.

// No VS Code, criaremos um arquivo chamado map.nomes.js. Sim, usaremos o map() novamente, pois queremos reescrever o array de alguma forma.

// Primeiro, vamos criar uma lista com os nomes:

// const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

// Como pegar uma string e deixar todas as letras maiúsculas? Usaremos o método toUpperCase(). Mas para utilizar esse método em cada uma das strings da lista, precisamos percorrer o array inteiro, por isso usaremos o map().

// Já sabendo que o map()retorna um novo array, vamos escrever const nomesPadronizados. E na arrow function vamos receber nome como parâmetro e retornaremos o valor que queremos para o nome, que será nome.toUpperCase().

// const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

// const nomesPadronizados = nomes.map((nome) => {
//  return nome.toUpperCase();

//  });

//  Só isso já deveria ser suficiente para resolver nosso desafio. Vamos dar um console.log('nomesPadronizados').

// const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

// const nomesPadronizados = nomes.map((nome) => {
//  return nome.toUpperCase();

//  });

//  console.log('nomesPadronizados')

//  Podemos salvar e testar no terminal.

// node map-nome.js
// 'ANA JULIA', 'CAIO VINICIUS', 'BIA SILVA'

// Agora sim, temos uma lista com os nomes padronizados com todas as letras maiúsculas.

// Para finalizar, uma particularidade das arrow functions é que quando tudo o que fazemos dentro da arrow function é retornar um valor, podemos simplesmente omitir a palavra-chave return, vamos apagá-la, e podemos tirar as chaves de abertura e chave de fechamento da função. Então tudo o que ficou como callback foi (nome) => nome.toUpperCase());.

// const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

// const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

// console.log(nomesPadronizados);

// Essa é uma forma bem sucinta de escrever arrow functions, é possível que você encontre bastante no mercado. E isso vai funcionar exatamente igual antes. Podemos salvar e executar novamente.

// node map-nome.js
// 'ANA JULIA', 'CAIO VINICIUS', 'BIA SILVA'