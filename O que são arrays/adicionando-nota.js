const notas = [10, 6, 8];

notas.push(7); // adiciona a informação no final da array

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media)


// Explicação

// Adicionando elementos
// Um professor acidentalmente passou apenas 3 das 4 notas no sistema para um aluno:

// 10
// 6
// 8
// Para corrigir, precisamos adicionar a nota 7 e fazer o cálculo da média corretamente.

// Lista de notas e média
// No VS Code, vamos criar um arquivo chamado adicionando-nota.js. De início, declararemos uma lista para guardar as três notas que foram lançadas no sistema pelo professor:

// const notas = [10, 6, 8];

// Também vamos deixar preparada a lógica para o cálculo da média. Como temos apenas 3 notas por enquanto, vamos somar apenas os valores das três primeiras posições da lista. Colocaremos essa soma entre parênteses e dividiremos o resultado pelo tamanho do array, utilizando a propriedade length:

// const notas = [10, 6, 8];

// const media = (notas[0] + notas[1] + notas[2]) / notas.length;

// Para testar, vamos usar um console.log() para imprimir a média no console:

// const notas = [10, 6, 8];

// const media = (notas[0] + notas[1] + notas[2]) / notas.length;

// console.log(media);

// Por fim, vamos executar o arquivo. No terminal integrado ("Ctrl + J"), rodaremos o seguinte comando:

// node adicionando-nota.js
// 8

// Conseguimos imprimir a média das 3 notas. Até agora, tudo que fizemos foi praticamente uma revisão das aulas anteriores. Na sequência, precisamos adicionar a quarta nota que está faltando.

// Método push()
// Temos um método dos array do JavaScript que nos ajudará nessa situação. Um método é justamente uma função que fará parte de um array. Vamos colocar em prática para entendê-lo melhor.

// Na linha seguinte à declaração do array de notas, vamos usar o método push(). Em inglês, push significa "empurrar". No contexto de arrays, esse termo significa "inserir" na lista. Como queremos inserir a nota 7, vamos passar esse valor como parâmetro da função push():

// const notas = [10, 6, 8];

// notas.push(7);

// const media = (notas[0] + notas[1] + notas[2]) / notas.length;

// console.log(media);


// Após fazer o push(), vamos imprimir a lista com um console.log() para verificar se o valor foi inserido corretamente:

// const notas = [10, 6, 8];

// notas.push(7);

// console.log(notas);

// const media = (notas[0] + notas[1] + notas[2]) / notas.length;

// console.log(media);


// Vamos salvar as alterações e executar o arquivo novamente:

// node adicionando-nota.js
// [10, 6, 8, 7]
// 6


// Foi impressa uma lista com os valores 10, 6, 8 e 7. Efetivamente, o método push() adicionou a nota 7 no final do nosso array! Vamos apagar o console.log() em que imprimimos a lista, pois era apenas um teste:

// const notas = [10, 6, 8];

// notas.push(7);

// const media = (notas[0] + notas[1] + notas[2]) / notas.length;

// console.log(media);


// Agora que conseguimos adicionar a nota faltante, vamos adaptar o cálculo da média para somar a nota na posição 3 da lista também:

// const notas = [10, 6, 8];

// notas.push(7);

// const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

// console.log(media);


// Após salvar as alterações, vamos executar o arquivo:

// node adicionando-nota.js
// 7.75


// O resultado está correto, a média das nossas quatro notas é 7.75!

// Alterando constantes?
// Ao longo desse processo, você pode ter percebido um ponto curioso: como conseguimos alterar o array de notas se ele é uma constante? Se você percebeu isso, você é uma pessoa bastante atenta!

// Esse é um comportamento específico do JavaScript. Por mais que declaremos um array como constante, conseguimos alterá-lo de acordo com alguns métodos do próprio array. Quando criamos uma constante no JavaScript, somos somente impedidos de fazer uma nova atribuição para a constante.

// Como demonstração, vamos tentar fazer uma nova atribuição. Logo após a declaração da constante notas, vamos indicar que notas recebe um array vazio:

// const notas = [10, 6, 8];

// notas = [];

// notas.push(7);

// const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

// console.log(media);


// Após salvar o arquivo, vamos executá-lo:

// node adicionando-nota.js


// O resultado será um erro! Uma das linhas desse erro nos informa:

// TypeError: Assignment to constat variable

// Em português, traduz-se "Tipo de erro: Atribuição a variável constante". Ou seja, o JavaScript não permite fazer nova atribuição a uma variável constante, que é quando usamos o sinal de igual (=). Porém, conseguimos alterar o array com métodos próprios e esse é um conhecimento importante.

// Então, vamos remover essa segunda atribuição do nosso código:

// const notas = [10, 6, 8];

// notas.push(7);

// const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

// console.log(media);

// Dessa forma, aprendemos que o método push() adiciona um valor no final do array e conseguimos resolver o desafio!