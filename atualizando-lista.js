<<<<<<< HEAD
const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1, 2, "Rodrigo");

console.log(nomes);


// Explicação


// Atualizando elementos
// Temos que criar uma lista de chamada com os seguintes alunos:

// João
// Ana
// Caio
// Lara
// Marjorie
// Leo
// Porém, Ana e Caio mudaram de escola e o Rodrigo entrou nessa sala. Nosso desafio será atualizar a lista de chamada, removendo os nomes de Ana e Caio, e inserindo Rodrigo.

// Removendo nomes
// Anteriormente, aprendemos como remover um item do final da lista. Agora, descobriremos como remover um elemento do meio do array. No VS Code, vamos criar um arquivo chamado atualizando-lista.js. Declararemos uma constante chamada nomes que receberá a lista atual de alunos:

// const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// Para remover os nomes de Caio e Ana, utilizaremos outro método dos arrays do JavaScript — o splice():

// const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// nomes.splice();

// Em inglês, o termo splice significa "emendar" ou "juntar". Cuidado para não confundi-lo com o método slice() que abordamos na última aula, já que seus nomes são parecidos. Até o funcionamento deles é semelhante e pode causar confusão!

// O primeiro parâmetro do método splice() é o índice do elemento que queremos remover. Portanto, para remover o nome de Ana, passamos o índice 1:

// const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// nomes.splice(1);

// O segundo parâmetro é a quantidade de itens que queremos remover a partir desse índice. Logo, para remover o nome de Ana e de Caio, informaremos o valor 2:

// const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// nomes.splice(1, 2);

// Após realizar o splice(), vamos imprimir a lista de nomes com um console.log():

// const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// nomes.splice(1, 2);

// console.log(nomes);

// Vamos salvar o arquivo e executá-lo no terminal integrado:

// node atualizando-lista.js

// [ 'João', 'Lara', 'Marjorie', 'Leo' ]

// Ana e Caio não constam mais na lista, conseguimos remover os nomes desejados com sucesso!

// Adicionando nomes
// A seguir, vamos adicionar Rodrigo à lista de chamada. Com os conhecimentos das aulas anteriores, sabemos que uma opção é usar o método push() para inserir um item:

// const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// nomes.splice(1, 2);
// nomes.push("Rodrigo");

// console.log(nomes);

// Após salvar as alterações, executaremos o arquivo no terminal:

// node atualizando-lista.js

// [ 'João', 'Lara', 'Marjorie', 'Leo', 'Rodrigo' ]

// Conseguimos adicionar Rodrigo ao final da lista e o desafio está concluído. Mas, como a ordem dos nomes da lista não importa para nós, vamos aproveitar para aprender mais um recurso do método splice(), em vez de usar o push().

// Primeiramente, vamos apagar a linha em que usamos o push():

// const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// nomes.splice(1, 2);

// console.log(nomes);

// O método splice() aceita um terceiro parâmetro. Então, vamos colocar a string "Rodrigo":

// const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// nomes.splice(1, 2, "Rodrigo");

// console.log(nomes);

// Assim, vamos remover os nomes de Ana e Caio, e inserir Rodrigo no lugar. Após salvar o arquivo, vamos executá-lo no terminal:

// node atualizando-lista.js

// [ 'João', 'Rodrigo', 'Lara', 'Marjorie', 'Leo' ]

// Agora, temos o nome de Rodrigo na segunda posição da lista, onde antes estavam Caio e Ana.

// Vale relembrar a importância de estudar o que cada método faz. Perceba que o splice() é outro método que altera o array original, não precisamos guardar um novo array em uma nova constante — simplesmente executamos o splice() e usamos um console.log() com o array original.


// O splice é usado para adicionar e remover elementos de uma lista, como mostra o seguinte código:

// animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

// animaisDoAquario.splice(1,0,'🐠')
// animaisDoAquario.splice(3,2,'🐟')

// console.log(animaisDoAquario)

// [ '🐋', '🐠', '🐙', '🐟']

=======
const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1, 2, "Rodrigo");

console.log(nomes);


// Explicação


// Atualizando elementos
// Temos que criar uma lista de chamada com os seguintes alunos:

// João
// Ana
// Caio
// Lara
// Marjorie
// Leo
// Porém, Ana e Caio mudaram de escola e o Rodrigo entrou nessa sala. Nosso desafio será atualizar a lista de chamada, removendo os nomes de Ana e Caio, e inserindo Rodrigo.

// Removendo nomes
// Anteriormente, aprendemos como remover um item do final da lista. Agora, descobriremos como remover um elemento do meio do array. No VS Code, vamos criar um arquivo chamado atualizando-lista.js. Declararemos uma constante chamada nomes que receberá a lista atual de alunos:

// const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// Para remover os nomes de Caio e Ana, utilizaremos outro método dos arrays do JavaScript — o splice():

// const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// nomes.splice();

// Em inglês, o termo splice significa "emendar" ou "juntar". Cuidado para não confundi-lo com o método slice() que abordamos na última aula, já que seus nomes são parecidos. Até o funcionamento deles é semelhante e pode causar confusão!

// O primeiro parâmetro do método splice() é o índice do elemento que queremos remover. Portanto, para remover o nome de Ana, passamos o índice 1:

// const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// nomes.splice(1);

// O segundo parâmetro é a quantidade de itens que queremos remover a partir desse índice. Logo, para remover o nome de Ana e de Caio, informaremos o valor 2:

// const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// nomes.splice(1, 2);

// Após realizar o splice(), vamos imprimir a lista de nomes com um console.log():

// const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// nomes.splice(1, 2);

// console.log(nomes);

// Vamos salvar o arquivo e executá-lo no terminal integrado:

// node atualizando-lista.js

// [ 'João', 'Lara', 'Marjorie', 'Leo' ]

// Ana e Caio não constam mais na lista, conseguimos remover os nomes desejados com sucesso!

// Adicionando nomes
// A seguir, vamos adicionar Rodrigo à lista de chamada. Com os conhecimentos das aulas anteriores, sabemos que uma opção é usar o método push() para inserir um item:

// const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// nomes.splice(1, 2);
// nomes.push("Rodrigo");

// console.log(nomes);

// Após salvar as alterações, executaremos o arquivo no terminal:

// node atualizando-lista.js

// [ 'João', 'Lara', 'Marjorie', 'Leo', 'Rodrigo' ]

// Conseguimos adicionar Rodrigo ao final da lista e o desafio está concluído. Mas, como a ordem dos nomes da lista não importa para nós, vamos aproveitar para aprender mais um recurso do método splice(), em vez de usar o push().

// Primeiramente, vamos apagar a linha em que usamos o push():

// const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// nomes.splice(1, 2);

// console.log(nomes);

// O método splice() aceita um terceiro parâmetro. Então, vamos colocar a string "Rodrigo":

// const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// nomes.splice(1, 2, "Rodrigo");

// console.log(nomes);

// Assim, vamos remover os nomes de Ana e Caio, e inserir Rodrigo no lugar. Após salvar o arquivo, vamos executá-lo no terminal:

// node atualizando-lista.js

// [ 'João', 'Rodrigo', 'Lara', 'Marjorie', 'Leo' ]

// Agora, temos o nome de Rodrigo na segunda posição da lista, onde antes estavam Caio e Ana.

// Vale relembrar a importância de estudar o que cada método faz. Perceba que o splice() é outro método que altera o array original, não precisamos guardar um novo array em uma nova constante — simplesmente executamos o splice() e usamos um console.log() com o array original.


// O splice é usado para adicionar e remover elementos de uma lista, como mostra o seguinte código:

// animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

// animaisDoAquario.splice(1,0,'🐠')
// animaisDoAquario.splice(3,2,'🐟')

// console.log(animaisDoAquario)

// [ '🐋', '🐠', '🐙', '🐟']

>>>>>>> 27be99842932f6856450deb322908e037f6a7683
// No aquário, o golfinho e o tubarão não estão presentes por conta do código animaisDoAquario.splice(3,2,'🐟'), que remove dois elementos do array, a partir da posição 3. Sendo assim, os elementos com índice 3 e 4 e os dois peixes entraram nas posições definidas pelo splice.