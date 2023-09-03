const notas = [10, 6.5, 8, 7.5];

let somdaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somdaDasNotas += notas[i];
}

const media = somdaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);


// // Média com "for"

// // Explicação

// Média
// Calcule a média entre as seguintes notas, usando o for:

// 10
// 6.5
// 8
// 7.5
// No VS Code, criaremos um arquivo chamado media-for.js. Vamos declarar uma constante chamada notas, que receberá a lista de notas:

// const notas = [10, 6.5, 8, 7.5];


// Em seguida, vamos relembrar como fizemos a média no arquivo media.js:

// // trecho do arquivo media.js

// const notas = [10, 6.5, 8, 7.5];

// const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;



// Nós tínhamos um array de quatro notas e, para calcular a média, somamos a partir da posição 0 até a 3 da lista, depois dividimos pelo tamanho do array. Talvez você já tenha imaginado que essa prática não é muito dinâmica. Se tivéssemos um array grande, teríamos que fazer todas as somas manualmente? Além disso, podemos acidentalmente esquecer algum elemento e obter o resultado incorreto.

// Para deixar nosso código mais dinâmico, facilitar a manutenção e evitar erros, tornaremos essa soma dinâmica com uma estrutura for. Assim, a lógica funcionará independentemente do tamanho da lista.

// Voltando ao arquivo media.for.js, vamos desenvolver um laço de repetição com for. Dentro dos parênteses, vamos indicar a variável de controle, a condição de execução e o incremento:

// const notas = [10, 6.5, 8, 7.5];

// for (let indice = 0; indice < notas.length; i++) {

// }



// A primeira expressão nos parênteses será a declaração da variável indice, inicializada com valor 0. A segunda expressão será a condição que indice seja menor que o tamanho o array. A terceira expressão será o incremento de uma unidade na variável de controle.

// Como a estrutura do for é extensa, há uma convenção de declarar a váriavel de controle com o nome i — uma abreviação de "índice" ou index (em inglês). Vamos posicionar o cursor sobre a palavra indice do nosso código e pressionar a tecla "F2" para renomeá-la de indice para i:

// const notas = [10, 6.5, 8, 7.5];

// for (let i = 0; i < notas.length; i++) {

// }


// Desse modo, o código fica um pouco mais sucinto, mas a lógica continua igual. Na sequência, usaremos essa estrutura for para somar todas as notas da lista. A ideia é guardar o valor de cada uma delas, somando-as em uma variável separada chamada somaDasNotas. Começaremos declarando essa variável antes do for, a inicializando com o valor 0:

// const notas = [10, 6.5, 8, 7.5];

// let somaDasNotas = 0;

// for (let i = 0; i < notas.length; i++) {

// }


// Em seguida, dentro das chaves do for, determinaremos que a variável somaDaNotas deve ser incrementada com o valor do elemento na posição i, a cada iteração:

// const notas = [10, 6.5, 8, 7.5];

// let somaDasNotas = 0;

// for (let i = 0; i < notas.length; i++) {
//     somaDasNotas += notas[i];
// }


// Quando entrarmos no for pela primeira vez, a variável i terá valor igual a 0. Portanto, notas[i] será notas[0], que corresponde à nota 10 da lista. Ou seja, na primeira iteração, vamos somar 10 à variável somaDasNotas. Na segunda iteração, i será igual a 1. Como notas[1] corresponde a 6.5, vamos incrementar esse valor à somaDasNotas, resultando em 10.5, e assim em diante até o último item do array.

// Após o for, vamos imprimir o valor de somaDasNotas para verificar se elas foram somadas corretamente:

// const notas = [10, 6.5, 8, 7.5];

// let somaDasNotas = 0;

// for (let i = 0; i < notas.length; i++) {
//     somaDasNotas += notas[i];
// }

// console.log(somaDasNotas);


// Vamos salvar o arquivo e executá-lo no terminal:

// node media-for.js
// 32


// De fato, a soma das nossas quatro notas resulta em 32. Nosso código está funcionando como esperado. Agora que conseguimos fazer a soma, podemos calcular a média. Após o for, em vez do console.log(), vamos declarar uma constante chamada media, que receberá a somaDasNotas e fará a divisão pelo tamanho da lista:

// const notas = [10, 6.5, 8, 7.5];

// let somaDasNotas = 0;

// for (let i = 0; i < notas.length; i++) {
//     somaDasNotas += notas[i];
// }

// const media = somaDasNotas / notas.length;


// Por fim, vamos usar uma template string para imprimir uma frase que informa a média das notas:

// const notas = [10, 6.5, 8, 7.5];

// let somaDasNotas = 0;

// for (let i = 0; i < notas.length; i++) {
//   somaDasNotas += notas[i];
// }

// const media = somaDasNotas / notas.length;

// console.log(`A média das notas é ${media}.`);


// Após salvar as alterações, vamos executar o arquivo no terminal:

// node media-for.js
// A média das notas é 8.


// O retorno é exatamente o esperado, nosso código está funcionando perfeitamente! No próximo vídeo, aprenderemos sobre um método moderno do JavaScript que também nos ajudará no cálculo de média.