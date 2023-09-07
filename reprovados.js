const alunos = ["Ana", "Marcos", "Maria", "Mauro"];

const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => {
  return medias[indice] < 7;
});

console.log(reprovados);

// Filtrando elementos

// Explicação

// filtrando por nota
// Depois de calcular a média dos alunos, precisamos mostrar quem está reprovado entre os alunos:

// Ana: 7
// Marcos: 4.5
// Maria: 8
// Mauro: 7,5
// Temos duas listas, uma com o nome dos alunos e outra com a média de cada aluno.

// No VS Code, criaremos um arquivo chamado reprovados.js. Primeiro, vamos criar uma const alunos que vai receber a lista com os nomes e uma const medias para receber as notas:

// const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
// const medias = [7, 4.5, 8, 7.5];

// Temos que mostrar os que estão reprovados. Poderíamos, por exemplo, usar o forEach(), dentro do forEach() usar o slice() para modificar o array e mostrar as pessoas reprovadas.

// Porém, nesta situação específica podemos usar um método moderno que se chama filter(), que em português significa "filtrar". Queremos realmente filtrar essa lista pelos alunos reprovados.

// O filter() retorna um novo array. Então vamos escrever que const reprovados recebe alunos.filter(). Queremos filtrar a lista de alunos, por isso aplicamos o filter() em alunos.

// const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
// const medias = [7, 4.5, 8, 7.5];

// const reprovados = alunos.filter();

// O filter() vai receber uma função callback como parâmetro, vamos inserir uma arrow function, receberemos aluno e precisaremos também do indice porque com ele conseguiremos acessar a média de cada aluno na outra lista.

// const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
// const medias = [7, 4.5, 8, 7.5];

// const reprovados = alunos.filter((aluno, indice) => {

// });

// Dentro das chaves da função vamos retornar verdadeiro ou falso, para saber se o aluno será incluído na lista de reprovados.

// Vejamos, por exemplo, se retornarmos true para todos os elementos, todos os alunos serão colocados na nova lista. Podemos inserir um console.log(reprovados) para verificar isso testando no terminal.

// const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
// const medias = [7, 4.5, 8, 7.5];

// const reprovados = alunos.filter((aluno, indice) => {
//   return true;
// });

// console.log(reprovados);

// node reprovados.js
// ['Ana', 'Marcos', 'Maria', 'Mauro']

// Ela exibiu todos os alunos, mas se retornarmos false a lista será vazia porque retornamos false para todos.

// Primeiro, devemos verificar se a média do aluno é menor do que 7. Então, para saber, por exemplo, a média de algum aluno temos que pegar a média na posição do índice de cada aluno, return medias[indice]. Então ,se medias na posição índice for menor do que 7, vai retornar true. Se não for menor do que 7, vai retornar false. Essa é a nossa lógica.

// const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
// const medias = [7, 4.5, 8, 7.5];

// const reprovados = alunos.filter((aluno, indice) => {
//   return medias[indice] < 7;
// });

// console.log(reprovados);

// Para testar, vamos salvar o arquivo e executá-lo novamente:

// node reprovados.js
// [ 'Marcos' ]

// Agora a lista de reprovados retornou apenas o aluno Marcos, porque só para ele a condição que colocamos no returno do filter() foi verdadeira, apenas a nota dele, que foi 4.5, é menor do que 7.

// Poderíamos até fazer a lógica inversa se quiséssemos exibir apenas os alunos aprovados. Bastaria inserir um maior ou igual a 7 na nossa lógica: return medias[indice] >= 7;. Assim teríamos a lista de aprovados.

// Para finalizar, não estamos usando o parâmetro aluno, porque dessa vez estávamos interessados apenas no índice. Quando não utilizamos o primeiro parâmetro, uma convenção que você pode encontrar é o uso do underline (_) em vez de nomear o parâmetro, então em vez de alunos.filter(aluno, indice) fica alunos.filter(_, indice). Só de fazer isso o JS vai saber que não estamos utilizando esse parâmetro.

// É apenas uma convenção da linguagem, não é obrigatório fazer isso. Mas é obrigatório nomear o primeiro parâmetro de alguma forma para podermos acessar o segundo parâmetro, o índice.

// const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
// const medias = [7, 4.5, 8, 7.5];

// const reprovados = alunos.filter((_, indice) => {
//   return medias[indice] < 7;
// });

// console.log(reprovados);