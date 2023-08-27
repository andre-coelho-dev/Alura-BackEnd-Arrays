const notas = [10, 6, 8, 5.5, 10];

notas.pop(); // retira o último elemento da array

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A média é ${media}`);


// Explicação


// Deletando elementos
// Dessa vez, um dos professores acidentalmente lançou 5 notas no sistema para um aluno:

// 10
// 6
// 8
// 5.5
// 10
// Para corrigir, precisamos que remover a última nota e fazer o cálculo da média corretamente.

// Removendo notas
// No VS Code, vamos criar um arquivo chamado removendo-nota.js. De início, declararemos uma lista para guardar as cinco notas que foram lançadas no sistema pelo professor:

// const notas = [10, 6, 8, 5.5, 10];


// Para remover a última nota, usaremos outro método dos arrays do JavaScript — o pop(). Lembre-se de que, sempre que trabalhamos com métodos, temos que abrir e fechar parênteses:

// const notas = [10, 6, 8, 5.5, 10];

// notas.pop();


// Após o pop(), vamos imprimir a lista, com um console.log():

// const notas = [10, 6, 8, 5.5, 10];

// notas.pop();

// console.log(notas);


// Depois, salvaremos o arquivo e o executaremos no terminal integrado:

// node removendo-nota.js
// [ 10, 6, 8, 5.5 ]


// O array resultante tem apenas quatro valores, conseguimos remover o último elemento com o método pop(). Na sequência, basta calcularmos a média como fizemos nas aulas anteriores.

// Calculando a média
// Nós podemos copiar e colar o código referente ao cálculo da média que usamos em adicionando-nota.js. Apenas se lembre de tomar cuidado ao copiar códigos, se certificando de que ele é apropriado para o seu contexto. No nosso caso, é apropriado: após remover o último elemento da lista, teremos quatro notas e, no cálculo da média, somamos as notas da posição 0 até a 3:

// const notas = [10, 6, 8, 5.5, 10];

// notas.pop();

// console.log(notas);

// const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

// console.log(media);


// Vamos salvar o arquivo e executá-lo no terminal:

// node removendo-nota.js
// 7.375


// Conseguimos calcular a média corretamente!

// Aprimorando a mensagem impressa
// Em vez de simplesmente imprimir o valor numérico da média, vamos exibir uma mensagem mais explicativa. No console.log(), em vez de passar apenas a constante media, vamos incluir um texto também.

// Usaremos duas crases para escrever uma template string. Entre as crases, escreveremos a mensagem "A média é ", seguida do símbolo de cifrão ($) e um par de chaves, dentro dos quais passaremos a constante media. Finalizaremos com um ponto final:

// console.log(`A média é ${media}.`);


// O código completo do arquivo removendo-nota.js ficará da seguinte forma:

// const notas = [10, 6, 8, 5.5, 10];

// notas.pop();

// console.log(notas);

// const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

// console.log(`A média é ${media}.`);


// Por fim, vamos salvar o arquivo e executá-lo no terminal:

// node removendo-nota.js
// A média é 7.375.

// O retorno está correto, conseguimos resolver mais um desafio!