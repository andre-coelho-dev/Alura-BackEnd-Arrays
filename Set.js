const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);

// Removendo elementos repetidos

// Explicação

// removendo duplicatas
// Um professor acidentalmente adicionou nomes repetidos na lista de chamada:

// Ana
// Clara
// Maria
// Maria
// João
// João
// João
// Remova os nomes repetidos, deixando apenas um de cada.

// No VS Code, criaremos um arquivo chamado Set.js.

// Primeiro, vamos criar uma const nomes que vai receber a lista com os nomes:

// const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// Poderíamos usar métodos do JS que já aprendemos nesse curso para resolver esse problema. Poderíamos usar o forEach() com uma lógica de programação. Mas ficaria um pouco complicado, pode ficar como desafio para você fazer.

// Vou mostrar uma forma mais facilitada que o JS oferece com uma estrutura chamada Set, que em português significa "conjunto".

// Para criar um novo Set vamos escrever const meuSet = new Set().

// const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const meuSet = new Set()

// A palavra "new" em português significa "novo", é como se tivéssemos escrito "quero criar um novo Set".

// Esse Set é uma classe do JavaScript, usaremos uma classe porque ela já vem com algumas lógicas internas.

// O Set bem parecido com as listas que trabalhamos até agora, mas tem algumas regras a mais. Uma delas é que os elementos de um Set não podem se repetir. O que é ótimo para nos ajudar nesse desafio.

// Para criar um Set com valores iniciais podemos passar uma lista dentro do parênteses de Set(). Vamos testar colocando alguns números e alguns deles reeptidos: "1, 1, 2, 3, 4, 4". e um console.log(meuSet) para vermos o que vai acontecer no meuSet.

// const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const meuSet = new Set([1, 1, 2, 3, 4, 4]);

// console.log(meuSet);

// Podemos salvar e testar no terminal:

// node Set.js
// Set(4) { 1, 2, 3, 4 }

// Então foi impresso o Set indicando que tem tamanho 4 e, entre chaves, temos os elementos 1, 2, 3 e 4 sem as repetições da lista que inserimos.

// Agora, para resolver o desafio, vamos substituir a lista de números pela lista de nomes que nós temos, new Set(nomes).

// const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const meuSet = new Set(nomes);

// console.log(meuSet);

// Para testas vamos salvar e executar no terminal:

// node Set.js
// Set(4) { 'Ana', 'Clara', 'Maria', 'João' }

// Agora temos um Set de quatro posições com os nomes Ana, Clara, Maria e João sem as duplicatas.

// Porém, não queremos ficar com o Set, queremos a lista de volta. Então, vamos transformar o Set em uma lista.

// Para isso, logo após a declaração do Set, vamos escrever const nomesAtualizados, que vai receber um spread operator no meuSet. O Set é uma estrutura bem parecida com uma lista e também podemos usar o spread operator nele.

// Por fim, daremos um console.log() em nomesAtualizados.

// const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const meuSet = new Set(nomes);

// const nomesAtualizados = [...meuSet];

// console.log(nomesAtualizados);

// Podemos salvar e testar no terminal:

// node Set.js
// [ 'Ana', 'Clara', 'Maria', 'João' ]

// Agora sim, temos uma lista com os quatro nomes. Solucionamos nosso problema!

// Para entender mais sobre a estrutura Set veja este Para Saber Mais.

// Inclusive, se escrevermos meuSet seguido de um ponto, meuSet., veremos o VS Code exibirá uma lista de métodos que não são iguais aos dos arrays, por exemplo: add, clear, delete, entries, etc.

// Para finalizar, existe uma forma mais concisa de escrevermos esse código. Em vez de fazer [...meuSet] poderíamos colocar diretamente um new Set(nomes): [...new Set(nomes)] e apagar a linha em que declaramos o meuSet.

// const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const nomesAtualizados = [...new Set(nomes)];

// console.log(nomesAtualizados);

// Usando o [...new Set(nomes)] fazemos duas coisas ao mesmo tempo: passamos os nomes como valor de entrada do Set e os espalhamos para um novo array.