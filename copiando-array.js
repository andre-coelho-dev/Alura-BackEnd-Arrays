const notas = [7, 7, 8, 9];

const novasNotas = [...notas, 10];

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);

// Clonando com spread operator

// Explicação

// criando cópias
// Considere o seguinte array de notas:

// const notas = [7, 7, 8, 9];

// Crie um novo array com a nota 10 a mais, sem alterar o array original.

// Essa é uma situação um pouco nova, é até mais difícil do que parece.

// No VS Code, criaremos um arquivo chamado copiando-array.js. Primeiro, vamos inserir a lista:

// const notas = [7, 7, 8, 9];

// Se queremos criar um novo array, sem alterar o original – que realmente é uma situação que acontece muito no dia a dia, às vezes queremos pegar o array original e fazer uma modificação para outros propósitos e sem alterar o original.

// A primeira coisa que pensamos em fazer é escrever, por exemplo, const novasNotas = notas e fazer um push para adicionar o 10 no final do array.

// Por fim, podemos inserir um console.log() informando as novas notas, usando uma interpolação ${novasNotas}.

// const notas = [7, 7, 8, 9];

// const novasNotas = notas;

// novasNotas.push(10);

// console.log(`As novas notas são ${novasNotas}`);

// Vamos testar no terminal:

// node copiando-array.js

// As novas notas são 7, 7, 8, 9, 10

// Resolvemos o desafio? Na verdade, não. Vamos conferir se o array original está igual. Para isso, vamos inserir um console.log() exibindo as notas originais, notas:

// const notas = [7, 7, 8, 9];

// const novasNotas = notas;

// novasNotas.push(10);

// console.log(`As novas notas são ${novasNotas}`);
// console.log(`As notas originais são ${notas}`);

// Vamos salvar e executar no terminal:

// node copiando-array.js
// As novas notas são 7, 7, 8, 9, 10

// As notas originais são 7, 7, 8, 9, 10

// O "10" também apareceu nas notas originais. Mas nós só adicionamos a nota 10 em novasNotas, esse pode ser um comportamento inesperado e é, na verdade, uma peculiaridade do JavaScript.

// O "X" dessa questão está acontecendo onde fizemos a atribuição do array de notas para as novas notas: const novasNotas = notas;.

// Ao fazer uma atribuição direta como essa, usando o sinal de igual, o JavaScript entende que a partir desse momento, é como se esses dois arrays fossem o mesmo, como se eles apontassem para o mesmo endereço da memória.

// Então, qualquer alteração que fizermos em novasNotas será feita no array original e vice-versa. É como se, para o JavaScript, eles fossem o mesmo array. E não é isso que queremos.

// Nós queremos fazer uma cópia do array, mas sem que eles estejam tão interligados assim. Para resolver isso, na linha da atribuição coloremos notas dentro de colchetes e acompanhado de três pontos (...), como reticências.

// const novasNotas = [...notas];

// Esse é um operador do JavaScript que se chama spread operator, ou "operador de espalhamento". Ao utilizá-lo junto com uma lista, ele pega todo o conteúdo desse array e espalhar seus valores no local que estamos indicando. É como se copiássemos o conteúdo da lista, "7, 7, 8, 9", e colássemos no lugar do [...notas]. É isso que estamos dizendo para o JavaScript.

// const notas = [7, 7, 8, 9];

// const novasNotas = [...notas];

// novasNotas.push(10);

// console.log(`As novas notas são ${novasNotas}`);
// console.log(`As notas originais são ${notas}`);

// Vamos testar no terminal:

// node copiando-array.js
// As novas notas são 7, 7, 8, 9, 10

// As notas originais são 7, 7, 8, 9

// Isso resolveu nosso problema. Agora não temos o "10" no final das notas originais. Essa é a forma JavaScript de fazer a cópia de um array. Também podemos usar essa sintaxe do operador de espalhamento no parâmetro de uma função, por exemplo, ele vai pegar o conteúdo de uma array e colocar separado por vírgulas onde queremos.

// Uma última coisa que podemos fazer no código é, em vez de fazer o novasNotas.push(10), podemos apagar essa linha e colocar o número "10" dentro do colchetes depois de notas: [...notas, 10].

// const notas = [7, 7, 8, 9];

// const novasNotas = [...notas, 10];

// console.log(`As novas notas são ${novasNotas}`);
// console.log(`As notas originais são ${notas}`);

// Ao salvarmos e executarmos novamente no terminal, vai exibir corretamente. Essa sintaxe de espalhamento é bem flexível, podemos até colocar, notas no início do array, por exemplo: [5,...notas, 10].

// Então, o spread operator é um operador que podemos usar para clonar arrays sem ter problemas de referências do JavaScript.