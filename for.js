const numeros = [100, 200, 300, 400, 500, 600];

// Primeira expressão: é executada apenas uma vez
// Segunda expressão: condição de execução
// Terceira expressão: é executada sempre ao final do bloco

for (let indice = 0; indice < numeros.length; indice++) {
  console.log(numeros[indice]);
}


// // Laço de execução
// // For clássico

// // Explicação

// For
// Imprima o índice e a lista com os seguintes números:

// 100, 200, 300, 400, 500, 600
// Sintaxe e funcionamento do for
// Nesta aula, vamos resolver o desafio usando uma nova estrutura. No VS Code, criaremos um arquivo chamado for.js. A princípio, vamos criar uma constante chamada numeros, que receberá essa lista de números:

// const numeros = [100, 200, 300, 400, 500, 600];

// Para imprimir esses valores, poderíamos usar console.log() com numeros[0], depois com numeros[1] e assim em diante, porém não seria muito dinâmico. E se tivéssemos uma lista com mil valores? Não seria nada prático adotar essa estratégia.

// Como solução, há uma estrutura não exclusiva do JavaScript chamada for, que faz parte de praticamente todas as linguagens de programação mais utilizadas no mercado. O for serve para fazermos laços de repetição. A seguir, vamos entender na prática como esse recurso funciona.

// Logo após a lista numeros, vamos desenvolver uma estrutura for. De início, sua sintaxe pode parecer um pouco estranha — após digitar for, vamos inserir um par de parênteses e, depois, um par de chaves:


// const numeros = [100, 200, 300, 400, 500, 600];

// for () {

// }


// O código que colocarmos dentro das chaves é o bloco que será executado repetidas vezes. Antes de escrevê-lo, focaremos nos parênteses dessa estrutura for. Dentro deles, precisamos colocar três expressões, separadas por ponto e vírgula. Vamos inseri-las e, na sequência, estudaremos para que servem:

// const numeros = [100, 200, 300, 400, 500, 600];

// for (let indice = 0; indice < 6; indice == indice + 1) {

// }


// A terceira expressão se trata de um incremento. Outras formas abreviadas de escrevê-la seriam indice += 1 ou indice++. Esta última é mais comum em estruturas for, então vamos optar por ela:

// const numeros = [100, 200, 300, 400, 500, 600];

// for (let indice = 0; indice < 6; indice++) {

// }


// Antes de entender a fundo cada uma dessas expressões, faremos um teste para checar o que a estrutura faz. Dentro das chaves, vamos inserir um console.log() com uma mensagem bem simples:



// const numeros = [100, 200, 300, 400, 500, 600];

// for (let indice = 0; indice < 6; indice++) {
//     console.log("oi");
// }



// Após salvar, vamos executar o arquivo no terminal:

// node for.js

// oi

// oi

// oi

// oi

// oi

// oi

// A palavra "oi" foi impressa 6 vezes.

// O for é constituído por três expressões dentro dos parênteses, separadas por ponto e vírgula. A primeira expressão é executada uma única vez. No nosso caso, temos let indice = 0 — a declaração de uma variável, inicializada com o valor 0. Quando o JavaScript interpreta todo o código que escrevemos nesse arquivo, ao chegar na estrutura for, ele executará essa expressão uma vez.

// A segunda expressão é a condição de execução do bloco for ** e a terceira expressão será executada sempre ao final do bloco**. Vamos inserir alguns comentários no código (antes do for) para não nos esquecermos da proposta de cada um das três expressões:



// const numeros = [100, 200, 300, 400, 500, 600];

// // Primeira expressão: é executada apenas uma única vez
// // Segunda expressão: condição de execução
// // Terceira expressão: é executada sempre ao final do bloco

// for (let indice = 6; indice < 6; indice++) {
//     console.log("oi");
// }



// Assim, primeiramente o JavaScript executa a expressão let indice = 0. Em seguida, ele adentra no bloco contido entre as chaves. No caso, o console.log(). Terminado o bloco, o JavaScript executa a terceira expressão dentro dos parênteses, incrementando o valor da variável indice. Se antes era 0, agora temos 1.

// Com o novo valor de indice, a segunda expressão será interpretada — a condição de execução. Caso a condição seja satisfeita, o bloco entre chaves será executado novamente. Esse ciclo será repetido, até que a condição deixe de ser satisfeita. Executamos o console.log(). Terminado o bloco, executamos indice++. Agora, indice é igual a 2. Verificamos a condição de execução: 2 é menor que 6? Sim, então continuamos a repetição. Em dado momento, indice terá valor 6 e a condição de execução não será mais satisfeita.

// Ao construir uma estrutura for, é importantíssimo atentar à condição de execução. Se ela nunca for invalidada, entramos em um loop infinito! Você pode ler mais a respeito na próxima atividade deste curso.

// Portanto, essa é a composição e o funcionamento de um for clássico, essa estrutura presente em quase todas as linguagens de programação.

// Focando no desafio
// Voltando à proposta do desafio, precisamos imprimir cada um dos elementos do array. Em vez da palavra "oi", vamos imprimir a variável indice para verificar o que acontece:



// const numeros = [100, 200, 300, 400, 500, 600];

// // Primeira expressão: é executada apenas uma única vez
// // Segunda expressão: condição de execução
// // Terceira expressão: é executada sempre ao final do bloco

// for (let indice = 0; indice < 6; indice++) {
//     console.log(indice);
// }



// Após salvar o arquivo, vamos executá-lo:

// node for.js

// 0

// 1

// 2

// 3

// 4

// 5

// Cada execução do loop chama-se iteração. Então, na primeira iteração, imprimimos o indice quando ele tinha o valor 0. Na segunda iteração, imprimimos o indice quando ele tinha o valor 1, e assim em diante até o valor 5. Houve 6 iterações.

// Como queremos imprimir cada elemento do array numeros, podemos usar numeros[indice] no console.log(). Na primeira iteração, teremos numeros[0]. Na segunda iteração, numeros[1], e assim em diante:



// const numeros = [100, 200, 300, 400, 500, 600];

// // Primeira expressão: é executada apenas uma única vez
// // Segunda expressão: condição de execução
// // Terceira expressão: é executada sempre ao final do bloco

// for (let indice = 0; indice < 6; indice++) {
//     console.log(numeros[indice]);
// }



// Vamos salvar o arquivo e executá-lo no terminal:

// node for.js

// 100

// 200

// 300

// 400

// 500

// 600

// Conseguimos imprimir cada um dos elementos da lista, porque sabíamos que o índice ia de 0 até 5!

// Como um toque final pra melhorar nosso código, na condição de execução do bloco for, podemos substituir o número 6 por um valor dinâmico. Em vez de 6, usaremos o tamanho do array:



// const numeros = [100, 200, 300, 400, 500, 600];

// // Primeira expressão: é executada apenas uma única vez
// // Segunda expressão: condição de execução
// // Terceira expressão: é executada sempre ao final do bloco

// for (let indice = 0; indice < numeros.length; indice++) {
//     console.log(numeros[indice]);
// }



// Após salvar, vamos executar o arquivo no terminal:

// node for.js

// 100

// 200

// 300

// 400

// 500

// 600

// O código continua funcinando normalmente.

// Essa é a forma mais clássica de fazer um laço de repetição no JavaScript. Nos próximos vídeos, conheceremos formas mais modernas de lidar com estruturas de repetição nessa linguagem e que nos ajudarão bastante a trabalhar com arrays.