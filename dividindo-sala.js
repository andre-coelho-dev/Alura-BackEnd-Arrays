<<<<<<< HEAD
const alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "André",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];

const sala1 = alunos.slice(0, alunos.length / 2);

const sala2 = alunos.slice(alunos.length / 2);

console.log(sala1);
console.log(sala2);


// Explicação

// Sala dividida
// Temos uma sala de aula com 20 estudantes, representados por uma lista de strings:

// 'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'

// Nosso desafio é dividi-los em duas salas com a mesma quantidade de pessoas. Isto é, duas listas com 10 estudantes, cada.

// Sala 1
// No VS Code, vamos criar um arquivo chamado dividindo-sala.js. Para guardar as informações do array de alunos, declararemos uma constante chamada alunos:

// const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

// Se você também tiver o formatador Prettier, o VS Code automaticamente formatará esse código quando salvarmos o arquivo. Com essa nova formatação, em vez de todos os nomes juntos, temos um estudante por linha, facilitando futuras consultas:

// const alunos = [
//     "João",
//     "Juliana",
//     "Ana",
//     "Caio",
//     "Lara",
//     "Marjorie",
//     "Guilherme",
//     "Aline",
//     "Fabiana",
//     "Andre",
//     "Carlos",
//     "Paulo",
//     "Bia",
//     "Vivian",
//     "Isabela",
//     "Vinícius",
//     "Renan",
//     "Renata",
//     "Daisy",
//     "Camilo",
// ];

// Em seguida, vamos selecionar os 10 primeiros alunos para colocá-los na sala 1, usando o método slice(). Em inglês, o termo slice significa "fatiar" ou "dividir":

// const alunos = [
//     "João",
//     "Juliana",
//     "Ana",
//     "Caio",
//     "Lara",
//     "Marjorie",
//     "Guilherme",
//     "Aline",
//     "Fabiana",
//     "Andre",
//     "Carlos",
//     "Paulo",
//     "Bia",
//     "Vivian",
//     "Isabela",
//     "Vinícius",
//     "Renan",
//     "Renata",
//     "Daisy",
//     "Camilo",
// ];

// alunos.slice();

// Informaremos dois parâmetro para o método slice(), separados por vírgula. O primeiro indicará a posição do elemento em que começaremos a "fatiar" a lista original. No caso, começaremos por João, que está na posição 0:

// const alunos = [
//     "João",
//     "Juliana",
//     "Ana",
//     "Caio",
//     "Lara",
//     "Marjorie",
//     "Guilherme",
//     "Aline",
//     "Fabiana",
//     "Andre",
//     "Carlos",
//     "Paulo",
//     "Bia",
//     "Vivian",
//     "Isabela",
//     "Vinícius",
//     "Renan",
//     "Renata",
//     "Daisy",
//     "Camilo",
// ];

// alunos.slice(0);

// O segundo parâmetro indicará onde terminaremos de "fatiar". No caso, colocaremos o valor 10, que se refere ao índice do 11° estudante, André:

// const alunos = [
//     "João",
//     "Juliana",
//     "Ana",
//     "Caio",
//     "Lara",
//     "Marjorie",
//     "Guilherme",
//     "Aline",
//     "Fabiana",
//     "Andre",
//     "Carlos",
//     "Paulo",
//     "Bia",
//     "Vivian",
//     "Isabela",
//     "Vinícius",
//     "Renan",
//     "Renata",
//     "Daisy",
//     "Camilo",
// ];

// alunos.slice(0, 10);

// Existe uma peculiaridade do método slice() que devemos nos atentar! No segundo parâmetro, informamos o índice de um elemento e esse elemento não será incluído no novo array! Ou seja, ao colocar os parâmetro 0 e 10, estamos selecionando os alunos do índice 0 ao 9.

// Na sequência, vamos fazer um console.log() e imprimir a lista de alunos para verificar se houve alguma modificação nela:

// const alunos = [
//     "João",
//     "Juliana",
//     "Ana",
//     "Caio",
//     "Lara",
//     "Marjorie",
//     "Guilherme",
//     "Aline",
//     "Fabiana",
//     "Andre",
//     "Carlos",
//     "Paulo",
//     "Bia",
//     "Vivian",
//     "Isabela",
//     "Vinícius",
//     "Renan",
//     "Renata",
//     "Daisy",
//     "Camilo",
// ];

// alunos.slice(0, 10);

// console.log(alunos);

// Após salvar o arquivo, vamos executá-lo no terminal integrado:

// node dividindo-sala.js

// [ 'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo' ]

// Foi impresso o array original, com 20 estudantes! Essa é a primeira vez que estamos lidando com um método do JavaScript que não modifica o array original. Os métodos push() e pop(), que estudamos anteriormente, alteravam o array.

// O slice() mantém o array original inalterado e retorna um novo array. Para guardarmos esse novo array em uma variável, vamos declarar uma constante à esquerda de alunos.slice(0,10):

// const alunos = [
//     "João",
//     "Juliana",
//     "Ana",
//     "Caio",
//     "Lara",
//     "Marjorie",
//     "Guilherme",
//     "Aline",
//     "Fabiana",
//     "Andre",
//     "Carlos",
//     "Paulo",
//     "Bia",
//     "Vivian",
//     "Isabela",
//     "Vinícius",
//     "Renan",
//     "Renata",
//     "Daisy",
//     "Camilo",
// ];

// const sala1 = alunos.slice(0, 10);

// console.log(alunos);

// Desse modo, a constante sala1 receberá o novo array resultante de alunos.slice(). Em seguida, no console.log(), vamos imprimir sala1 em vez de alunos:

// // código anterior omitido

// const sala1 = alunos.slice(0, 10);

// console.log(sala1);

// Após salvar o arquivo, vamos executá-lo no terminal:

// node dividindo-sala.js

// [ 'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre' ]

// O resultado será os dez primeiros nomes, de João até André. Nosso código está funcionando como esperado!

// Sala 2
// Seguindo a mesma lógica, vamos fazer a sala 2. Declararemos a constante sala2 que receberá o retorno de alunos.slice(). Como primeiro parâmetro, passaremos o índice 10, para começar o "fatiamento" a partir de Carlos:

// // código anterior omitido

// const sala1 = alunos.slice(0, 10);
// const sala2 = alunos.slice(10);

// console.log(sala1);

// Como segundo parâmetro, poderíamos colocar o valor 20 para selecionar do índice 10 até 19, mas não é necessário. Quando não informarmos o segundo parâmetro no slice(), o método selecionará até o final do array.

// Em seguida, vamos imprimir sala2 com um console.log():

// // ...

// const sala1 = alunos.slice(0, 10);
// const sala2 = alunos.slice(10);

// console.log(sala1);
// console.log(sala2);

// Após salvar o arquivo, vamos executá-lo no terminal integrado:

// node dividindo-sala.js

// [ 'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre' ]

// [ 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo' ]

// Agora, foram impressas duas listas, cada um delas com 10 estudantes. Conseguimos resolver o desafio! A seguir, vamos fazer algumas melhorias no nosso código.

// Melhorias
// Atualmente, nosso código funciona para uma lista de 20 estudantes. Mas e se tivéssemos uma lista de 30, 40 ou 100 alunos? É interessante que o nosso código seja o mais dinâmico possível. Em vez de escrever valores estáticos (como o 10, que sabemos que é a metade da lista), podemos inserir valores dinâmicos.

// Para encontrar a metade do nosso array, em lugar de 10, vamos colocar o tamanho da lista dividido por 2. Faremos isso tanto na atribuição da constante sala1 como em sala2:

// //...

// const sala1 = alunos.slice(0, alunos.length / 2);
// const sala2 = alunos.slice(alunos.length / 2);

// console.log(sala1);
// console.log(sala2);

// Após salvar as alterações, vamos executar o arquivo mais uma vez para nos certificar de que ele continua funcionando:

// node dividindo-sala.js

// [ 'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre' ]

// [ 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo' ]

// Temos justamente o resultado esperado, o código continua funcionando normalmente! Agora, se nosso array tiver mais ou menos elementos, ele continuará funcionando.

=======
const alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "André",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];

const sala1 = alunos.slice(0, alunos.length / 2);

const sala2 = alunos.slice(alunos.length / 2);

console.log(sala1);
console.log(sala2);


// Explicação

// Sala dividida
// Temos uma sala de aula com 20 estudantes, representados por uma lista de strings:

// 'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'

// Nosso desafio é dividi-los em duas salas com a mesma quantidade de pessoas. Isto é, duas listas com 10 estudantes, cada.

// Sala 1
// No VS Code, vamos criar um arquivo chamado dividindo-sala.js. Para guardar as informações do array de alunos, declararemos uma constante chamada alunos:

// const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

// Se você também tiver o formatador Prettier, o VS Code automaticamente formatará esse código quando salvarmos o arquivo. Com essa nova formatação, em vez de todos os nomes juntos, temos um estudante por linha, facilitando futuras consultas:

// const alunos = [
//     "João",
//     "Juliana",
//     "Ana",
//     "Caio",
//     "Lara",
//     "Marjorie",
//     "Guilherme",
//     "Aline",
//     "Fabiana",
//     "Andre",
//     "Carlos",
//     "Paulo",
//     "Bia",
//     "Vivian",
//     "Isabela",
//     "Vinícius",
//     "Renan",
//     "Renata",
//     "Daisy",
//     "Camilo",
// ];

// Em seguida, vamos selecionar os 10 primeiros alunos para colocá-los na sala 1, usando o método slice(). Em inglês, o termo slice significa "fatiar" ou "dividir":

// const alunos = [
//     "João",
//     "Juliana",
//     "Ana",
//     "Caio",
//     "Lara",
//     "Marjorie",
//     "Guilherme",
//     "Aline",
//     "Fabiana",
//     "Andre",
//     "Carlos",
//     "Paulo",
//     "Bia",
//     "Vivian",
//     "Isabela",
//     "Vinícius",
//     "Renan",
//     "Renata",
//     "Daisy",
//     "Camilo",
// ];

// alunos.slice();

// Informaremos dois parâmetro para o método slice(), separados por vírgula. O primeiro indicará a posição do elemento em que começaremos a "fatiar" a lista original. No caso, começaremos por João, que está na posição 0:

// const alunos = [
//     "João",
//     "Juliana",
//     "Ana",
//     "Caio",
//     "Lara",
//     "Marjorie",
//     "Guilherme",
//     "Aline",
//     "Fabiana",
//     "Andre",
//     "Carlos",
//     "Paulo",
//     "Bia",
//     "Vivian",
//     "Isabela",
//     "Vinícius",
//     "Renan",
//     "Renata",
//     "Daisy",
//     "Camilo",
// ];

// alunos.slice(0);

// O segundo parâmetro indicará onde terminaremos de "fatiar". No caso, colocaremos o valor 10, que se refere ao índice do 11° estudante, André:

// const alunos = [
//     "João",
//     "Juliana",
//     "Ana",
//     "Caio",
//     "Lara",
//     "Marjorie",
//     "Guilherme",
//     "Aline",
//     "Fabiana",
//     "Andre",
//     "Carlos",
//     "Paulo",
//     "Bia",
//     "Vivian",
//     "Isabela",
//     "Vinícius",
//     "Renan",
//     "Renata",
//     "Daisy",
//     "Camilo",
// ];

// alunos.slice(0, 10);

// Existe uma peculiaridade do método slice() que devemos nos atentar! No segundo parâmetro, informamos o índice de um elemento e esse elemento não será incluído no novo array! Ou seja, ao colocar os parâmetro 0 e 10, estamos selecionando os alunos do índice 0 ao 9.

// Na sequência, vamos fazer um console.log() e imprimir a lista de alunos para verificar se houve alguma modificação nela:

// const alunos = [
//     "João",
//     "Juliana",
//     "Ana",
//     "Caio",
//     "Lara",
//     "Marjorie",
//     "Guilherme",
//     "Aline",
//     "Fabiana",
//     "Andre",
//     "Carlos",
//     "Paulo",
//     "Bia",
//     "Vivian",
//     "Isabela",
//     "Vinícius",
//     "Renan",
//     "Renata",
//     "Daisy",
//     "Camilo",
// ];

// alunos.slice(0, 10);

// console.log(alunos);

// Após salvar o arquivo, vamos executá-lo no terminal integrado:

// node dividindo-sala.js

// [ 'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo' ]

// Foi impresso o array original, com 20 estudantes! Essa é a primeira vez que estamos lidando com um método do JavaScript que não modifica o array original. Os métodos push() e pop(), que estudamos anteriormente, alteravam o array.

// O slice() mantém o array original inalterado e retorna um novo array. Para guardarmos esse novo array em uma variável, vamos declarar uma constante à esquerda de alunos.slice(0,10):

// const alunos = [
//     "João",
//     "Juliana",
//     "Ana",
//     "Caio",
//     "Lara",
//     "Marjorie",
//     "Guilherme",
//     "Aline",
//     "Fabiana",
//     "Andre",
//     "Carlos",
//     "Paulo",
//     "Bia",
//     "Vivian",
//     "Isabela",
//     "Vinícius",
//     "Renan",
//     "Renata",
//     "Daisy",
//     "Camilo",
// ];

// const sala1 = alunos.slice(0, 10);

// console.log(alunos);

// Desse modo, a constante sala1 receberá o novo array resultante de alunos.slice(). Em seguida, no console.log(), vamos imprimir sala1 em vez de alunos:

// // código anterior omitido

// const sala1 = alunos.slice(0, 10);

// console.log(sala1);

// Após salvar o arquivo, vamos executá-lo no terminal:

// node dividindo-sala.js

// [ 'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre' ]

// O resultado será os dez primeiros nomes, de João até André. Nosso código está funcionando como esperado!

// Sala 2
// Seguindo a mesma lógica, vamos fazer a sala 2. Declararemos a constante sala2 que receberá o retorno de alunos.slice(). Como primeiro parâmetro, passaremos o índice 10, para começar o "fatiamento" a partir de Carlos:

// // código anterior omitido

// const sala1 = alunos.slice(0, 10);
// const sala2 = alunos.slice(10);

// console.log(sala1);

// Como segundo parâmetro, poderíamos colocar o valor 20 para selecionar do índice 10 até 19, mas não é necessário. Quando não informarmos o segundo parâmetro no slice(), o método selecionará até o final do array.

// Em seguida, vamos imprimir sala2 com um console.log():

// // ...

// const sala1 = alunos.slice(0, 10);
// const sala2 = alunos.slice(10);

// console.log(sala1);
// console.log(sala2);

// Após salvar o arquivo, vamos executá-lo no terminal integrado:

// node dividindo-sala.js

// [ 'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre' ]

// [ 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo' ]

// Agora, foram impressas duas listas, cada um delas com 10 estudantes. Conseguimos resolver o desafio! A seguir, vamos fazer algumas melhorias no nosso código.

// Melhorias
// Atualmente, nosso código funciona para uma lista de 20 estudantes. Mas e se tivéssemos uma lista de 30, 40 ou 100 alunos? É interessante que o nosso código seja o mais dinâmico possível. Em vez de escrever valores estáticos (como o 10, que sabemos que é a metade da lista), podemos inserir valores dinâmicos.

// Para encontrar a metade do nosso array, em lugar de 10, vamos colocar o tamanho da lista dividido por 2. Faremos isso tanto na atribuição da constante sala1 como em sala2:

// //...

// const sala1 = alunos.slice(0, alunos.length / 2);
// const sala2 = alunos.slice(alunos.length / 2);

// console.log(sala1);
// console.log(sala2);

// Após salvar as alterações, vamos executar o arquivo mais uma vez para nos certificar de que ele continua funcionando:

// node dividindo-sala.js

// [ 'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre' ]

// [ 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo' ]

// Temos justamente o resultado esperado, o código continua funcionando normalmente! Agora, se nosso array tiver mais ou menos elementos, ele continuará funcionando.

>>>>>>> 27be99842932f6856450deb322908e037f6a7683
// Então, nesta aula, aprendemos sobre mais um método do JavaScript: o slice(). É importante sabermos a diferença entre os métodos que alteram ou não a lista original. Principalmente no início dos nossos estudos, é normal não lembrarmos de tudo, então sempre podemos consultar a documentação do JavaScript para saber como cada método funciona e sanar dúvidas.