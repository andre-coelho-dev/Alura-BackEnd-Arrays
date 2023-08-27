const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
  if (listaDeAlunosEMedias[0].includes(aluno)) {
    // const alunos = listaDeAlunosEMedias[0];
    // const medias = listaDeAlunosEMedias[1];

    const [alunos, medias] = listaDeAlunosEMedias;

    const indice = alunos.indexOf(aluno);

    const mediaDoAluno = medias[indice];

    console.log(`${aluno} tem a média ${mediaDoAluno}`)

  } else {
    console.log("Aluno não encontrado!");
  }
}

exibeNomeENota("Ana");


// Explicação 01

// Procurando na lista
// Crie uma função que recebe como argumento o nome de um aluno.
// Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
// Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.
// Para este desafio, usaremos as mesmas listas da aula anterior:

// 'João', 'Juliana', 'Caio', 'Ana'
// 10, 8, 7.5, 9
// No VS Code, criaremos um arquivo chamado procurando-aluno.js. Vamos reaproveitar alguns dados que usamos em lista-duas-dimensoes.js. Copiaremos as listas alunos, medias e listaDeAlunosEMedias e as colaremos nesse novo arquivo:

// // Arquivo procurando-aluno.js

// const alunos = ["João", "Juliana", "Ana", "Caio"];
// const medias = [10, 8, 7.5, 9];

// const listaDeAlunosEMedias = [alunos, medias];
// Checando nomes cadastrados
// Vamos criar uma função chamada exibeNomeENota(), que verificará se o nome de uma pessoa está cadastrado na lista e, depois, mostrará sua nota. Essa função receberá como parâmetro o nome do aluno:

// const alunos = ["João", "Juliana", "Ana", "Caio"];
// const medias = [10, 8, 7.5, 9];

// const listaDeAlunosEMedias = [alunos, medias];

// function exibeNomeENota(aluno){

// }

// Primeiramente, criaremos uma lógica para checar se conseguimos exibir uma mensagem ou não, a depender se o nome está presente ou não na lista.

// Em exibeNomeENota(), acessaremos apenas a listaDeAlunosEMedias, para nos acostumarmos com a sintaxe de arrays de duas dimensões. Em cenários reais, nem sempre teremos acesso direto a essas listas "internas" como temos agora, então é importante estar familiarizado com essa sintaxe.

// Dentro da função exibeNomeENota(), vamos desenvolver uma estrutura if:

// // ...

// function exibeNomeENota(aluno){
//     if () {

//     }
// }

// Como condição, avaliaremos se o aluno está na lista ou não. Como a lista de alunos está na posição 0 da listaDeAlunosEMedias, usaremos a sintaxe listaDeAlunosEMedias[0] para nos referir a ela. Em seguida, usaremos o método includes() — que significa "incluir", em inglês. Como parâmetro dele, passaremos aluno:

// // ...

// function exibeNomeENota(aluno){
//     if (listaDeAlunosEMedias[0].includes(aluno)) {

//     }
// }

// Para testar se a estrutura está funcionando, vamos imprimir uma mensagem com console.log(), caso o aluno esteja cadastrado:

// // ...

// function exibeNomeENota(aluno){
//     if (listaDeAlunosEMedias[0].includes(aluno)) {
//         console.log(`${aluno} está cadastrado!`);
//     }
// }

// Vamos incluir o else também. Caso o aluno não seja encontrado, exibiremos outra mensagem explicativa:

// // ...

// function exibeNomeENota(aluno){
//     if (listaDeAlunosEMedias[0].includes(aluno)) {
//         console.log(`${aluno} está cadastrado!`);
//     } else {
//         console.log("Aluno não encontrado!");
//     }
// }

// É hora de testar. Ao final do código, vamos chamar a função exibeNomeENota() e passar o parâmetro "João", um aluno que sabemos estar presente na lista.

// Até agora, o código completo está assim:

// const alunos = ["João", "Juliana", "Ana", "Caio"];
// const medias = [10, 8, 7.5, 9];

// const listaDeAlunosEMedias = [alunos, medias];

// function exibeNomeENota(aluno){
//     if (listaDeAlunosEMedias[0].includes(aluno)) {
//         console.log(`${aluno} está cadastrado!`);
//     } else {
//         console.log("Aluno não encontrado!");
//     }
// }

// exibeNomeENota("João");
// Após salvar o arquivo, vamos executá-lo no terminal integrado:

// node procurando-aluno.js
// João está cadastrado!

// Nosso teste foi bem-sucedido!

// O método includes() verifica se o parâmetro passado para ele está incluso na lista. Quando está incluso, o retorno será o valor booleano true (verdadeiro). Do contrário, o retorno será false(falso). Por isso, podemos usar o includes() como condição da estrutura if.

// Portanto, já criamos um código para definir se um nome está presente na lista. Vamos continuar complementando o código para sustentar o desafio.

// Exibindo a média
// Conforme o desafio, quando o aluno estiver incluso na lista, temos que procurar sua média e exibi-la. Sabemos que a média está no mesmo índice do aluno, porém em outra lista. Por exemplo, João está no índice 0 da lista alunos e sua média está no índice 0 da lista medias. Então, para descobrirmos a média de um aluno, precisamos saber seu índice.

// Para encontrar o índice de um elemento em um array, podemos usar o método indexOf() — que significa "índice de", em inglês. Vamos utilizá-lo dentro do bloco if, após o console.log():

// // ...

// function exibeNomeENota(aluno){
//     if (listaDeAlunosEMedias[0].includes(aluno)) {
//         console.log(`${aluno} está cadastrado!`);

//         const indice = listaDeAlunosEMedias[0].indexOf(aluno);

//     } else {
//         console.log("Aluno não encontrado!");
//     }
// }

// exibeNomeENota("João");
// Como o objetivo é pesquisar no array alunos, referenciamos essa lista com listaDeAlunosEMedias[0]. Em seguida, usamos o método IndexOf(), que retornará o índice do aluno passado por parâmetro. Guardamos esse retorno na constante indice.

// Vamos imprimir o valor da constante indice no console para verificar se selecionamos corretamente o índice de João:

// // ...

// function exibeNomeENota(aluno){
//     if (listaDeAlunosEMedias[0].includes(aluno)) {
//         console.log(`${aluno} está cadastrado!`);

//         const indice = listaDeAlunosEMedias[0].indexOf(aluno);

//         console.log(indice);

//     } else {
//         console.log("Aluno não encontrado!");
//     }
// }

// exibeNomeENota("João");
// Após salvar o arquivo, vamos executá-lo no terminal:

// node procurando-aluno.js
// João está cadastrado!

// 0

// Sabemos que o índice de João é 0, então nosso código está funcionando e aplicamos o método indexOf() corretamente.

// Agora que conseguimos selecionar o índice do aluno, vamos pesquisar sua média! A princípio, declararemos a constante mediaDoAluno. Para referenciar a lista medias, usaremos a sintaxe listaDeAlunosEMedias[1]. Em seguida, acessaremos o elemento no mesmo índice do aluno:

// // ...

// function exibeNomeENota(aluno){
//     if (listaDeAlunosEMedias[0].includes(aluno)) {
//         console.log(`${aluno} está cadastrado!`);

//         const indice = listaDeAlunosEMedias[0].indexOf(aluno);

//         const mediaDoAluno = listaDeAlunosEMedias[1][indice];

//         console.log(indice);

//     } else {
//         console.log("Aluno não encontrado!");
//     }
// }

// exibeNomeENota("João");
// Em vez de imprimir o valor do índice, vamos exibir a média do aluno:

// // ...

// function exibeNomeENota(aluno){
//     if (listaDeAlunosEMedias[0].includes(aluno)) {
//         console.log(`${aluno} está cadastrado!`);

//         const indice = listaDeAlunosEMedias[0].indexOf(aluno);

//         const mediaDoAluno = listaDeAlunosEMedias[1][indice];

//         console.log(mediaDoAluno);

//     } else {
//         console.log("Aluno não encontrado!");
//     }
// }

// exibeNomeENota("João");
// Após salvar o arquivo, vamos executá-lo no terminal:

// node procurando-aluno.js
// João está cadastrado!

// 10

// De fato, a média de João é 10. Ou seja, o código está funcionando corretamente.

// Refinamentos
// Por fim, vamos alterar a mensagem exibida no console para torná-la mais objetiva e remover alguns trechos desnecessários do nosso código.

// Primeiro, vamos apagar o console.log() em que mostramos a mensagem de que o aluno está cadastrado. E, no console.log() que está dentro do bloco if, vamos utilizar uma template string com uma mensagem mais explicativa::

// // ...

// function exibeNomeENota(aluno){
//     if (listaDeAlunosEMedias[0].includes(aluno)) {
//         const indice = listaDeAlunosEMedias[0].indexOf(aluno);

//         const mediaDoAluno = listaDeAlunosEMedias[1][indice];

//         console.log(`${aluno} tem a média ${mediaDoAluno}.`);

//     } else {
//         console.log("Aluno não encontrado!");
//     }
// }

// exibeNomeENota("João");
// Após salvar as alterações, executaremos o arquivo no terminal:

// node procurando-aluno.js
// João tem a média 10.

// Agora, a mensagem exibida ficou melhor.

// Para testar, vamos passar outra pessoa estudante como parâmetro na chamada do método exibeNomeENota(). Dessa vez, colocaremos "Juliana", que também está presente na lista:

// // ...

// function exibeNomeENota(aluno){
//     if (listaDeAlunosEMedias[0].includes(aluno)) {
//         const indice = listaDeAlunosEMedias[0].indexOf(aluno);

//         const mediaDoAluno = listaDeAlunosEMedias[1][indice];

//         console.log(`${aluno} tem a média ${mediaDoAluno}.`);

//     } else {
//         console.log("Aluno não encontrado!");
//     }
// }

// exibeNomeENota("Juliana");
// Após salvar, vamos executar:

// node procurando-aluno.js
// Juliana tem a média 8.

// De fato, Juliana tem a média 8.

// Como último teste, vamos informar o nome de um aluno que não está na lista, "Evaldo". O código completo ficará assim:

// const alunos = ["João", "Juliana", "Ana", "Caio"];
// const medias = [10, 8, 7.5, 9];

// const listaDeAlunosEMedias = [alunos, medias];

// function exibeNomeENota(aluno){
//     if (listaDeAlunosEMedias[0].includes(aluno)) {
//         const indice = listaDeAlunosEMedias[0].indexOf(aluno);

//         const mediaDoAluno = listaDeAlunosEMedias[1][indice];

//         console.log(`${aluno} tem a média ${mediaDoAluno}.`);

//     } else {
//         console.log("Aluno não encontrado!");
//     }
// }

// exibeNomeENota("Evaldo");
// Vamos salvar e executar o arquivo:

// node procurando-aluno.js
// Aluno não encontrado!

// Nosso código está funcionando perfeitamente!

// Recapitulando
// Assimilamos bastante conteúdo nesta aula! Vamos revisar:

// o método includes() confere se o elemento passado por parâmetro está incluso em uma lista;
// o método indexOf() retorna o índice do elemento passado por parâmetro.
// Além disso, também treinamos o uso da sintaxe de arrays de duas dimensões.


// Explicação 02

// Refatoração
// Tem algo no nosso código que podemos melhorar. Dentro do bloco if, escrevemos listaDeAlunosEMedias[0] para treinar a sintaxe de listas de duas dimensões. Porém, não fica intuitivo o que essa expressão significa, não fica claro que a posição 0 de listaDeAlunosEMedias se refere à lista de alunos. Vale lembrar que também estamos simulando um cenário em que apenas temos acesso à listaDeAlunosEMedias (e não diretamente à lista alunos).

// Antes da constante indice, podemos declarar uma constante chamada alunos que receberá a listaDeAlunosEMédia na posição 0:

// // ...

// function exibeNomeENota(aluno){
//     if (listaDeAlunosEMedias[0].includes(aluno)) {
//         const alunos = listaDeAlunosEMedias[0];

//         const indice = listaDeAlunosEMedias[0].indexOf(aluno);

//         const mediaDoAluno = listaDeAlunosEMedias[1][indice];

//         console.log(`${aluno} tem a média ${mediaDoAluno}.`);

//     } else {
//         console.log("Aluno não encontrado!");
//     }
// }

// exibeNomeENota("Evaldo");

// Então, na atribuição de indice, substituiremos listaDeAlunosEMedia[0] por alunos. Assim, fica mais claro a que estamos nos referindo e a linha fica mais legível:

// // ...

// function exibeNomeENota(aluno){
//     if (listaDeAlunosEMedias[0].includes(aluno)) {
//         const alunos = listaDeAlunosEMedias[0];

//         const indice = alunos.indexOf(aluno);

//         const mediaDoAluno = listaDeAlunosEMedias[1][indice];

//         console.log(`${aluno} tem a média ${mediaDoAluno}.`);

//     } else {
//         console.log("Aluno não encontrado!");
//     }
// }

// exibeNomeENota("Evaldo");

// Vamos realizar um processo semelhante para listaDeAlunosEMedias[1]. Também no início do bloco if, criaremos uma constante chamada medias que recebe listaDeAlunosEMedias[1]:

// // ...

// function exibeNomeENota(aluno){
//     if (listaDeAlunosEMedias[0].includes(aluno)) {
//         const alunos = listaDeAlunosEMedias[0];
//         const medias = listaDeAlunosEMedias[1];

//         const indice = alunos.indexOf(aluno);

//         const mediaDoAluno = listaDeAlunosEMedias[1][indice];

//         console.log(`${aluno} tem a média ${mediaDoAluno}.`);

//     } else {
//         console.log("Aluno não encontrado!");
//     }
// }

// exibeNomeENota("Evaldo");

// Em seguida, na atribuição de mediaDoAluno, trocaremos listaDeAlunosEMedias[1] por medias:

// // ...

// function exibeNomeENota(aluno){
//     if (listaDeAlunosEMedias[0].includes(aluno)) {
//         const alunos = listaDeAlunosEMedias[0];
//         const medias = listaDeAlunosEMedias[1];

//         const indice = alunos.indexOf(aluno);

//         const mediaDoAluno = medias[indice];

//         console.log(`${aluno} tem a média ${mediaDoAluno}.`);

//     } else {
//         console.log("Aluno não encontrado!");
//     }
// }

// exibeNomeENota("Evaldo");

// Para testar, vamos passar "Ana" como parâmetro na chamada de exibeNomeENota() no final do código:

// // ...

// function exibeNomeENota(aluno){
//     if (listaDeAlunosEMedias[0].includes(aluno)) {
//         const alunos = listaDeAlunosEMedias[0];
//         const medias = listaDeAlunosEMedias[1];

//         const indice = alunos.indexOf(aluno);

//         const mediaDoAluno = medias[indice];

//         console.log(`${aluno} tem a média ${mediaDoAluno}.`);

//     } else {
//         console.log("Aluno não encontrado!");
//     }
// }

// exibeNomeENota("Ana");

// Após salvar o arquivo, vamos executá-lo:

// node procurando-aluno.js
// Ana tem a média 7.5.

// Nosso código continua funcionando corretamente. Agora, ele está mais legível, pois nomeamos as posições da lista "externa".

// Mas temos como melhorar ainda mias o nosso código! Ao declarar alunos e medias, fizemos atribuições partindo da mesma lista. Desde o JavaScript 6, existe uma maneira mais concisa de fazer essa atribuição. De início, vamos comentar as constantes alunos e medias:

// // ...

// Ana tem a média 7.5.function exibeNomeENota(aluno){
//     if (listaDeAlunosEMedias[0].includes(aluno)) {
//         // const alunos = listaDeAlunosEMedias[0];
//         // const medias = listaDeAlunosEMedias[1];

//         const indice = alunos.indexOf(aluno);

//         const mediaDoAluno = medias[indice];

//         console.log(`${aluno} tem a média ${mediaDoAluno}.`);

//     } else {
//         console.log("Aluno não encontrado!");
//     }
// }

// exibeNomeENota("Ana");

// Abaixo do trecho comentado, declararemos uma constante com uma sintaxe diferente. Vamos escrever const e, em lugar do nome, colocaremos um par de colchetes. Dentro deles, colocaremos alunos e medias, separados por vírgula. Atribuiremos listaDeAlunosEMedias a essa constante:

// const [alunos, medias] = listaDeAlunosEMedias;

// Essa nova linha equivale às duas linhas que comentamos há pouco. Quando abrimos e fechamos colchetes logo após uma declaração, como const, nós estamos nomeando cada um dos elementos da lista no lado direito da atrubuição. Em outras palavras, criamos uma constante chamada alunos para a posição 0 de listaDeAlunosEMedias e também criamos uma constante chamada medias para a posição 1 de listaDeAlunosEMedias. Funciona exatamente como as duas linhas comentadas.

// Inclusive, até podemos apagar o comentário. Nosso código ficará assim:

// const alunos = ["João", "Juliana", "Ana", "Caio"];
// const medias = [10, 8, 7.5, 9];

// const listaDeAlunosEMedias = [alunos, medias];

// function exibeNomeENota(aluno){
//     if (listaDeAlunosEMedias[0].includes(aluno)) {
//         const [alunos, medias] = listaDeAlunosEMedias;

//         const indice = alunos.indexOf(aluno);

//         const mediaDoAluno = medias[indice];

//         console.log(`${aluno} tem a média ${mediaDoAluno}.`);

//     } else {
//         console.log("Aluno não encontrado!");
//     }
// }

// exibeNomeENota("Ana");

// Para testar, vamos salvar as alterações e executar o arquivo no terminal novamente:

// node procurando-aluno.js
// Ana tem a média 7.5.

// O código continua funcionando corretamente.

// Essa sintaxe diferenciada e específica do JavaScript chama-se sintaxe de desestruturação de listas. Ela nos ajuda a tornar o código mais conciso e é bastante utilizada no mercado! A desestruturação serve para outros tipos de dados do JavaScript, mas aprenderemos sobre esse tema em cursos futuros.