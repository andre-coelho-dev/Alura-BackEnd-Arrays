# Alura-BackEnd-Arrays

Vamos trabalhar com array, que é um tipo de estrutura de dados. Ao contrário de uma variável, que guarda somente um valor por vez, um array (ou lista) pode armazenar diversos valores. Pode ser usada, por exemplo, para agrupar diversos dados que têm relação entre si.

const numero1 = 50;
const numero2 = 43;
const numero3 = 12;

~~ utilizando array ~~
const numeros = [50, 43, 12];
Um array pode ser definido como uma lista ordenada de valores enumerados em que cada valor é chamado de elemento ou item, e cada elemento se localiza numa posição na lista chamada de índice. Vamos destrinchar essa explicação.

Uma lista ordenada de valores enumerados:

Quando falamos de valores, estamos nos referindo a dados de algum tipo: string (texto), number (número), booleano (true ou false) ou outros dados reconhecidos pelo JavaScript.

const arrayDeNumeros = [50, 43, 12];
const arrayDeStrings = ["banana", "alura", "Juliana"];
Como uma lista ordenada, entende-se que os dados no array estão em uma ordem definida e se manterão nessa ordem. Eles estão enumerados, ou seja, cada um está associado a um identificador numérico que diz qual é a sua posição na lista (mais sobre isso abaixo!). Caso não seja feita nenhuma alteração no array, seus valores sempre aparecerão na mesma ordem: [50, 43, 12], por exemplo.

Cada valor é chamado de elemento ou item:

Em programação é importante sempre sabermos os nomes dos itens, para facilitar na hora de tirar dúvidas, procurar soluções e ler documentação. Quando trabalhamos com arrays, chamamos de elemento ou item cada um dos valores da lista.

~~ array com 1 elemento ~~
const numero = [5];

~~ array com 3 elementos ~~
const nums = [50, 43, 12];
Lembrando que cada elemento corresponde a um dado, separados por vírgula. O espaço é opcional, mas facilita a leitura.

Cada elemento está localizado em uma posição na lista, chamada de índice:

Se um array é uma lista ordenada, então é possível acessar cada um dos dados (ou valores) nele se soubermos a posição dele na lista. Por exemplo:

const nums = [50, 43, 12];
// o número 43 está na posição de número 1 (segunda posição) nessa lista de três números.
Em programação, chamamos de índice (em inglês, index) o número que identifica a posição de um valor em um array.

Porém um detalhe muito importante para trabalharmos bem com arrays é que em JavaScript (e na maior parte das linguagens de programação) a contagem dos índices não começa no número 1, e sim no número 0. Então, se quisermos acessar determinado valor pelo número do índice temos que levar isso em consideração:

// índice     0   1   2   3
const nums = [50, 43, 12, 98];
Sendo assim, o elemento de valor 43 está localizado no índice de número 1.

A imagem abaixo mostra um diagrama da representação de um array, nomeando seus recursos:

Diagrama representando um array. Há um texto “notas” e ao lado direito do texto há 4 retângulos lado a lado. Cada retângulo contém um número dentro, que representa uma nota. Ao lado direito da fileira de retângulos, há um seta apontando para eles, com o texto “elementos / itens / valores”. Abaixo de cada retângulo, há um número, que começa à esquerda, do zero no primeiro retângulo e vai até o número três, mais à direita, no último retângulo. Ao lado dessa fileira de números, há uma seta apontando para eles, com o texto “índices / posições”.

A propriedade length:
Esta propriedade especifica o tamanho de um array, ou melhor dizendo, o número de elementos. É importante notar que não estamos falando aqui de índices ou posições, e sim da quantidade de valores (dados) contidos no array. Por exemplo:

// índice     0   1   2   3
const nums = [50, 43, 12, 98];
console.log(nums.length) //4
Considerando que o array acima tem 4 elementos, podemos dizer que o valor retornado por length sempre será 1 número a mais do que o valor de índice mais alto. Neste caso, o array nums é um array de 4 elementos e seus índices vão de 0 a 3.

A propriedade length é muito útil para trabalharmos com arrays, pois não é preciso saber o número de elementos de antemão e nem tentar contá-los, o que seria impraticável em um programa de computador real.


~~Métodos de array~~

Já utilizamos alguns métodos dos arrays nessa aula, e ainda existem muitos métodos que não vimos. Porém, pode ainda ter ficado a dúvida: o que são os métodos?

Um método é uma função que serve como uma propriedade do array ou de um objeto (que veremos em outro curso). Ele pode realizar tarefas pré-definidas usando os dados do array e dos parâmetros que passamos para eles, como adicionar, remover ou até encontrar elementos.

Existem muitos métodos para conseguir lembrar de todos, mas vamos listar os principais para a aprendizagem. São eles:

~~ concat() ~~

Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação.
Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array.
~~ filter() ~~

Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.
Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.
~~ find() ~~

Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.
~~ findIndex() ~~

Funciona igual o find(), mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.
~~ lastIndexOf() ~~

É igual o findIndex() porém começa do último elemento, não no primeiro.
~~ forEach() ~~

Executa uma função em cada elemento do array de forma individual.
Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.
~~ pop() ~~

Retira o último elemento do array.
Altera o array original removendo o elemento.
~~ shift() ~~

Retira o primeiro elemento do array.
Altera o array original removendo o elemento e trocando o índice de todos os elementos para um a menos do que eram, o índice 1 passa a ser o 0, o 2 passa a ser o 1, e assim por diante.
~~ push() ~~

Adiciona o elemento passado como parâmetro do array, porém na última posição.
Altera o array original com o novo valor.
~~ unshift() ~~

Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.
Altera o array original com o novo valor.
~~ reduce() ~~

Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.
~~ reduceRight() ~~

Funciona igual o reduce() porém começa do final do array e segue até o início.
~~ reverse() ~~

Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.
~~ slice() ~~

Copia uma parte do array para outro array.
~~ sort() ~~

Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.
~~ splice() ~~

Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.


~~Arrays vazios~~
PRÓXIMA ATIVIDADE

Até agora trabalhamos com arrays que representam listas de dados (notas de alunos em uma escola). Mas o que acontece se declaramos um array sem nenhum valor na lista?

Crie um arquivo index.js em seu computador e escreva o seguinte código:

const arrayVazia = [];

console.log(arrayVazia)
console.log(arrayVazia.length)
Executando este código com node index.js (não esqueça de conferir se está executando o comando dentro da pasta/diretório certo), o resultado é:

[]
0
No exemplo acima, podemos ver que o JavaScript criou o array e a guardou na variável arrayVazia, mas seu length é 0.

Vamos então ver o que acontece se usarmos a notação de colchetes para tentar acessar o índice 0 do array (lembrando que o índice zero se refere à primeira posição):

const arrayVazia = [];
console.log(arrayVazia[0])
Desta vez, o resultado é:

undefined
Parece um pouco confuso? Vamos executar mais um teste e ver o que acontece:

const arrayVazia = [,,,];
console.log(arrayVazia.length)
console.log(arrayVazia[0])
console.log(arrayVazia[1])
console.log(arrayVazia[2])
Confira os resultados no terminal:

3
undefined
undefined
undefined
O que fizemos aqui, afinal?

Criamos um array com 3 posições, porém em nenhuma dessas posições existe um valor. De certa forma, podemos pensar que este array foi criado como um gaveteiro com três gavetas e todas elas estão “vazias”, sem nenhum valor de dado guardado.

Para finalizar, faça um último teste. Vamos usar o método push() visto anteriormente para adicionar um valor - lembrando que este método sempre vai adicionar o valor no final do array!

const arrayVazia = [,,,];
console.log(arrayVazia.length)
arrayVazia.push(50)
console.log(arrayVazia)
console.log(arrayVazia.length)
Conferindo os resultados:

3
[ <3 empty items>, 50 ]
4
O JavaScript manteve as posições vazias e adicionou o 50 ao final do array. Após a execução, ele passou a ter 4 posições, mas somente um elemento (o número 50). Chamamos este tipo de estrutura de array esparso e é importante lembrar deste comportamento dos arrays em JavaScript enquanto trabalhamos.


~~Revisando conceitos~~

Você viu conceitos sobre os arrays de forma geral, como criar e acessar seus valores, e também peculiaridades que ocorrem no JavaScript. Com isso, marque as afirmações corretas a respeito dessa estrutura de dados:

Todo array do JavaScript possui a propriedade length, além de determinados métodos.
=> Todo array criado no JavaScript vem com automaticamente com a propriedade length, que indica sua quantidade de elementos, e métodos como push e pop, que servem para realizar operações com o array, como modificá-lo.

Cada elemento de um array possui um valor único e numérico chamado de índice.
=> Ao criar um array, o primeiro elemento possui índice 0, o segundo possui índice 1, e assim por diante.


Jantar de hoje

O push e pop são usados para adicionar/remover elementos de uma lista, como mostra o seguinte código:

jantarDeHoje = ['🍔', '🌭', '🍕']

jantarDeHoje.pop()
jantarDeHoje.pop()

jantarDeHoje.push('🍳')
jantarDeHoje.push('🥗')
jantarDeHoje.push('🍏')

console.log(jantarDeHoje)


[ '🍔', '🍳', '🥗', '🍏' ]

No jantar de hoje, a pizza e o cachorro quente não estão presentes por conta do código jantarDeHoje.pop(), que remove o último elemento da lista e o ovo, a salada e a maçã verde entraram na lista com comando push.


O que aprendemos?
PRÓXIMA ATIVIDADE

Nesta aula vimos:
As características principais de arrays:
Um array é uma lista ordenada de dados. Você aprendeu a sintaxe de como criar um array e acessar seus valores.
Os conceitos de elemento e índice:
Elementos são os valores que um array guarda, e índice é o identificador único e numérico de cada elemento do array.
Como utilizar a propriedade .length:
Todos os arrays do JavaScript possuem essa propriedade, que indica a quantidade de elementos do array.
Como utilizar os métodos .push() e .pop():
Vimos como realizar as primeiras alterações em um array, como adicionar um novo item ao final ou remover o último item.


~~Arrays~~

~~consultando a documentação~~
PRÓXIMA ATIVIDADE

Em caso de dúvidas sobre como funciona um método de array, você sempre pode consultá-lo na documentação oficial da MDN, como por exemplo os métodos push e slice.

Por exemplo, na página do método push, vemos a seguinte descrição:

O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.

Exatamente como vimos em aula, a documentação diz que o método push altera o array original, além de informar seu valor de retorno (que não foi necessário para nós no desafio).

Na página do método slice, vemos a seguinte descrição:

O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O array original não é modificado.

Novamente, podemos consultar rapidamente o que o método faz, seu valor de retorno e se ele altera o array original.

A documentação também fornece informações bastante detalhadas sobre cada recurso da linguagem; você não precisa entender tudo que é mencionado em cada página (e no início de desenvolvimento, você provavelmente irá se deparar com muitos termos novos), mas ela é uma excelente fonte de consultas. Além disso, ela fornece vários exemplos práticos onde um método pode ser útil. A documentação será muito importante na sua jornada de desenvolvimento!


~~Para saber mais: matrizes~~
PRÓXIMA ATIVIDADE

Durante a aula vimos as listas com duas dimensões, ou seja, arrays que contêm arrays, podendo ter um único array ou vários dentro do principal.

const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade];

O array funcionarios é um array de duas dimensões. Há 3 arrays dentro dele, e para acessar os valores em funcionarios precisamos de 2 colchetes “[ ] [ ]”. O primeiro colchete será usado para escolher qual dos 3 arrays dentro de funcionarios será acessado. podendo ser:

0 -> nomes
1 -> idades
2 -> faculdade
O segundo colchete será usado para acessar a informação dentro do array escolhido.

Outra forma de chamar os arrays de 2 dimensões é matrizes. Matrizes podem ser visualizadas como uma tabela do Excel, onde cada campo representa um elemento, e precisamos de uma linha e uma coluna para acessar um campo. Então, as linhas são o primeiro colchete e a coluna o segundo colchete.

Arrays têm seu principal uso quando temos uma grande quantidade de informações com propósitos similares, como as notas de um aluno. Matrizes, por sua vez, são utilizadas quando precisamos de vários arrays similares ou com informações ligadas às outras, como as notas de uma classe com vários alunos.

As matrizes não são limitadas a 2 dimensões, podendo ter mais dimensões, de modo que cada dimensão é representada por um colchete. Porém, tome cuidado para não se perder dentro delas, já que se uma matriz passa a ter, por exemplo, 4 ou 5 dimensões, se torna bem difícil saber exatamente o que está sendo acessado e começamos a ter problemas para fazer a manutenção do código.

~~Faça como eu fiz: concatenando arrays e dados~~
PRÓXIMA ATIVIDADE

Durante a aula usamos o método concat() para unir (concatenar) arrays gerando um novo com o resultado da concatenação. Neste caso, o método funcionou da seguinte forma:

array1.concat(array2)

Logo, o método foi utilizado com um array (no caso acima, array1) e recebeu como parâmetro outro array (array2). O resultado foi um novo array com todos os elementos de array1 e array2; isso acontece pois, quando o concat() recebe um array como parâmetro, são apenas os elementos dentro dele que são concatenados, e não o array em si.

E se tentarmos usar esse método passando como parâmetro outro tipo de dado, que não seja array? Abra um arquivo index.js em seu computador e execute o seguinte código:

const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat("André", "Fernanda")

console.log(arrayConcat)
console.log(arrayOriginal)

O resultado deve ser:

[ 'Maria', 'Carlos', 'Eduardo', 'Samanta', 'André', 'Fernanda' ]
[ 'Maria', 'Carlos', 'Eduardo', 'Samanta' ]

Com o exemplo acima, vemos que o JavaScript concatena o array principal e as strings de texto passadas como parâmetro para criar outro array, mantendo o original sem alterações.

Vamos fazer um novo teste, mas passando mais de um array como parâmetro.

const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

console.log(arrayConcat)
console.log(arrayOriginal)

O resultado é:

[ 'Maria', 'Carlos', 'Eduardo', 'Samanta', 'André', 'Fernanda', 'Ricardo', 'Ana', 'Marcelo', 'Bia' ]
[ 'Maria', 'Carlos', 'Eduardo', 'Samanta' ]

Podemos passar mais de um array como parâmetro para que seus elementos sejam concatenados em um único array, junto com o que está sendo chamado com o método (no caso, arrayOriginal.

Como um último teste, vamos ver o que acontece se um dos parâmetros for um array com dois elementos, um número e um array:

const arrayOriginal = [50, 60, 70]
const arrayConcat = arrayOriginal.concat([80, [90, 100]])

console.log(arrayConcat)
console.log(arrayOriginal)

O resultado no terminal agora é:

[ 50, 60, 70, 80, [ 90, 100 ] ]
[ 50, 60, 70 ]

Vimos anteriormente que, quando recebe um array como parâmetro, concat() vai concatenar apenas os elementos. Porém, este método não extrai os elementos do array de forma recursiva; ou seja, não vai extrair os elementos de arrays que estejam “aninhados”. Dessa forma, 80 foi extraído do array com sucesso, porém 90 e 100 não, o método considerou [90, 100] como um único elemento.

concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original.


~~Acessando elementos de uma matriz~~

Podemos criar uma lista de duas dimensões (ou matriz) com o seguinte código:

const funcionarios = [
  ["Ana", "Juliana", "Leonardo"],
  [30, 35, 28]
];

console.log(`${funcionarios[0][2]} tem idade ${funcionarios[1][2]}`)

Para imprimir o nome, acessamos a lista de nomes escrevendo funcionarios[0] e, logo em seguida, adicionamos [2] para acessar o nome da posição 2. Para imprimir a idade, acessamos a lista de idades escrevendo funcionarios[1] e, logo em seguida, adicionamos [2] para acessar a idade da posição 2.

O que aprendemos?
PRÓXIMA ATIVIDADE

Nesta aula aprendemos como:
Separar um array em partes com slice() (utilizamos para obter dois novos arrays a partir de um).
Remover e incluir novos elementos em um array com splice(); sendo que esse método permite remover elementos de qualquer posição do array. Além disso, podemos incluir um novo elemento no local dos removidos.
Concatenar elementos em um único array com concat(); sendo que essa é uma forma facilitada de juntar dois arrays.
Trabalhar com arrays de duas dimensões. Vimos que uma lista também pode guardar outras listas! Para acessar elementos das listas mais internas, devemos informar primeiro os índices das mais externas e depois os das mais internas, como por exemplo com funcionarios[0][2].


~~Para saber mais: o loop infinito~~

Os laços de repetição, como o for, são ferramentas essenciais na programação. São utilizados para, entre outras coisas, percorrer arrays e executar blocos de código para cada elemento.

Porém, quando usamos for para executar códigos em loop, temos que deixar claro qual é a condição de execução do loop. Caso contrário, o programa não sabe em que momento deve parar de executar o loop, acaba ficando “preso” e entrando em loop infinito.

O loop infinito pode travar seu navegador, o terminal em que o código estiver sendo executado, ou até mesmo o computador, então é importante saber como evitá-lo.

Abaixo temos um exemplo de for que imprime no terminal números de 0 a 10:

for (let indice = 0; indice <= 10; indice++) {
  console.log(indice);
}


O código executa corretamente e o programa é capaz de encerrar o loop, pois a condição de execução indice <= 10 está correta, a variável indice que faz o controle do loop começa em 0 e ao fim de cada ciclo do loop, é aumentada em 1 (indice++). Quando o valor da variável de controle indice chega a 11, depois de imprimir o número 10 no terminal, a comparação indice <= 10 se torna false e isso encerra o loop.

O loop infinito pode acontecer caso alguma das expressões seja passada de forma incorreta ou esteja faltando. Por exemplo a terceira, responsável por alterar indice após o bloco de código dentro do for ter sido executado:

for (let indice = 0; indice <= 10; ) {
  console.log(indice);
}


A mesma coisa acontecerá se o for for executado sem a segunda expressão, que é a condição de execução.

for (let indice = 0; ; indice++) {
  console.log(indice);
}


Outro caso que pode gerar loop infinito é o de alterações feitas na variável de controle dentro do bloco do for, o que não é uma boa prática:

for (let indice = 0; indice < 10; indice++) {
  indice--;
  console.log(indice);
}


IMPORTANTE: Como mencionamos acima, o loop infinito pode travar o terminal ou computador. Se durante seus estudos você perceber que executou um código com loop infinito, finalize a execução do programa o mais rápido possível no terminal pressionando “Ctrl + C”.


Faça como eu fiz: loops em matrizes
PRÓXIMA ATIVIDADE

Vimos como usar os loops para percorrer um array utilizando ofor:

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);


Agora, se quisermos percorrer matrizes, um único for não será suficiente. Mas podemos usar o for várias vezes, uma para cada dimensão da matriz. Assim, uma matriz de duas dimensões usará dois for, um dentro do outro. Começaremos criando mais alguns arrays e uma matriz de 2 dimensões.

const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]
 
const notasGerais = [notas1,notas2,notas3]
 
let media = 0


Com a matriz criada, vamos iterar sobre os elementos. Mas não poderemos usar o mesmo for utilizado da última vez, já que agora notasGerais[i] contém um array e não mais um valor numérico. Por isso usaremos outro for para acessar esse array.

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}


Vamos entender um pouco melhor as partes que compõem esse código.

No primeiro for criamos uma let i e vamos executar o bloco de código enquanto i for menor que notasGerais.length. Como temos 3 elementos (nesse caso, arrays), o primeiro for será executado 3 vezes, com i=0,i=1,i=2.

O segundo for tem uma nova variável, a let j, já que não podemos usar uma nova let i porque ela já está definida, e vamos executá-lo enquanto j for menor que notasGerais[i].length. Como cada notasGerais[i] é um array, podemos obter a propriedade de tamanho dele utilizando o .length.

O código dentro do segundo for vai acumular o valor de notasGerais[i][j], lembrando que notasGerais[i] é um dos 3 arrays iniciais. Assim, o parâmetro [j] vai acessar o elemento dentro array escolhido pelo notasGerais[i], retornando um número que podemos usar na nossa conta.

Então ficamos com o seguinte código:

const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]
 
const notasGerais = [notas1,notas2,notas3]
 
let media = 0
 
for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}
 
console.log(media)


No entanto, este código retorna uma média de 24. Como tal média é possível se não temos nenhum número maior do que 10? O que acontece é que para conseguir a média entre todos os arrays, temos que somar as médias dos arrays de notas, 8+7+9 e dividir pela quantidade de arrays em notasGerais.

const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]
 
const notasGerais = [notas1,notas2,notas3]
 
let media = 0
 
for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}
 
media = media/notasGerais.length
 
console.log(media)

Com isso usamos o for para passar por todos os elementos da matriz, e nesse caso, calcular a média dos valores deles.


Para saber mais: possibilidades do for
PRÓXIMA ATIVIDADE

A estrutura for tem uma sintaxe mais complexa que o for of, com mais expressões, mas por causa disso fornece um maior leque de possibilidades de acordo com a nossa necessidade.

Por exemplo, podemos percorrer um array do fim ao início:

const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}


Declaramos o valor inicial da variável de controle como o valor da última posição do array (numeros.length - 1); realizamos um decremento (i--) ao invés de um incremento e a condição de execução é i >= 0. Ou seja, nesse caso, a variável i começará do valor 5 e irá até 0.

Ao executar o código, no terminal aparecerá:

600
500
400
300
200
100


Outra possibilidade é alterar a quantidade incrementada ou decrementada, utilizando o mesmo código acima, mas alterando o decremento para i -= 2. Então, teremos o seguinte:

const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; i >= 0; i -= 2) {
  console.log(numeros[i]);
}


O valor de i será diminuído de 2 em 2 a cada iteração (lembrando que a expressão i -= 2 equivale a i = i - 2). Assim, os valores de i serão 5, 3 e 1, e no terminal aparecerá:

600
400
200


Também temos controle sobre a condição de execução, então se alterarmos esse último código para ter a condição numeros[i] > 300, teremos o seguinte:

const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; numeros[i] >= 300; i -= 2) {
  console.log(numeros[i]);
}


E no terminal aparecerá:

600
400


Por fim, até agora utilizamos a estrutura for apenas para percorrer arrays, mas ela pode ser utilizada para repetir qualquer instrução conforme a necessidade. Por exemplo, podemos criar dinamicamente um array com todos os números pares de 0 a 100:

const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);


No terminal aparecerá:

[
   0,  2,  4,  6,  8, 10,  12, 14, 16, 18, 20,
  22, 24, 26, 28, 30, 32,  34, 36, 38, 40, 42,
  44, 46, 48, 50, 52, 54,  56, 58, 60, 62, 64,
  66, 68, 70, 72, 74, 76,  78, 80, 82, 84, 86,
  88, 90, 92, 94, 96, 98, 100
]


Na maioria dos casos, você não precisará realizar repetições mais complexas como essas, mas nunca se sabe, certo? Por isso, conhecer os recursos de uma linguagem e suas possibilidades pode ser uma “mão na roda” no futuro.

Como vimos, para percorrer todos os elementos de um array e do início ao fim, o for of fornece uma sintaxe mais sucinta que o for.

Revisando for e for of
PRÓXIMA ATIVIDADE

No JavaScript há diversas formas de se realizar os loops, ou laços de repetição. Você aprendeu sobre o for e o for of e suas diferenças.

Ao percorrer um array com o for of, sempre passamos por todos os elementos, do primeiro até o último.
=> Não é necessário criar variáveis de controle, incrementos e condições de execução como no for. O for of fornece uma sintaxe mais sucinta para percorrermos um array para o caso que geralmente queremos fazer: percorrer todos os elementos do início ao fim.

Na estrutura for, somos responsáveis por criar uma variável de controle, modificá-la ao final de cada iteração e estabelecer uma condição de execução adequada.
=> Essas ações representam as três expressões que devemos passar para o for.

O que aprendemos?

Nesta aula vimos como:
Utilizar os métodos includes() e indexOf():
O includes() retorna true ou false, dependendo se o valor passado como parâmetro está presente ou não no array. O indexOf() retorna a posição no array do valor passado como parâmetro. Utilizamos esses dois métodos em conjunto para primeiro verificar se um aluno estava presente em uma lista, e depois obter sua posição para buscar sua nota em outra lista.
Desestruturar um array:
Você aprendeu a sintaxe de desestruturação, disponível desde o ES6 (EcmaScript 6), que nos permite criar várias novas variáveis ao mesmo tempo a partir dos elementos de um array.
Utilizar a estrutura for e entender seu funcionamento:
O for é constituído de três expressões: criação da variável de controle; condição de execução; modificação da variável de controle. Essas três expressões juntas definem quantas vezes o bloco do for será executado.
Utilizar a estrutura for of e entender a diferença em relação ao for:
O for of sempre é utilizado para percorrer todos os elementos de um array, do início ao fim. Para esses casos, o for of é mais conciso que o for.


Aula 4 - Funções callback

Parâmetros do forEach

Na aula vimos como podemos usar o forEach para acessar o valor de todos os elementos em um array.

Uma função que recebe um elemento.
-> Essa função tem o nome de callback e vai ser executada para cada elemento do array, sendo que pode receber de 1 a 3 argumentos; o elemento, o índice e o array atual, respectivamente


Para saber mais: for...of vs callbacks

Até agora vimos várias formas de fazer o que parece ser a mesma coisa: for, for…of, forEach()... Com tantas opções, como posso escolher qual usar no meu código?

Antes, vamos dar uma olhada em cada um deles:

for
A forma mais “clássica” de se efetuar um loop em JavaScript e em várias outras linguagens, o for é muito conveniente pois pode ser utilizado com qualquer tipo de iterável e é construído de uma forma que deixa muito claro quais são todas as “fases” de cada loop - também chamamos um loop de laço de repetição ou de iteração.

O que é um “iterável”? Além de arrays, strings, sets (conjuntos) e maps (mapas ou dicionários) são considerados iteráveis. Não vamos falar dos dois últimos tipos neste curso, mas se você tiver interesse em saber mais sobre conjuntos, dicionários e outras estruturas de dados, pode dar uma olhada neste artigo; o que precisamos saber agora é que um iterável, aqui, representa uma sequência de elementos que pode ser percorrida (ou seja, iterada) utilizando ferramentas próprias para isso. É importante fazer uma distinção entre array e iterável, pois nem todo método que funciona em um array vai funcionar em outros iteráveis - veremos isso em seguida.

const lista = [1, 2, 3, 4, 5];

for (let indice = 0; indice < lista.length; indice++) {
 console.log(lista[indice]); 
}

O que queremos dizer com “deixar claro as fases da iteração” pode ser visto no exemplo acima: a expressão entre parênteses () após a palavra-chave for. Dentro da expressão temos:

uma variável contadora, que é criada antes do início do laço (let indice);
uma expressão de teste (indice < lista.length), que é executada antes de cada iteração e que verifica se o código dentro do bloco {} deve ou não ser executado;
por último, uma expressão que é executada ao final de cada laço, normalmente um incremento (++) ou decremento (--) da variável contadora.
Ou seja: como as fases de cada laço são declaradas de forma explícita, elas também podem ser alteradas conforme a necessidade do código, o que faz com que o for seja muito versátil e possa ser utilizado em casos específicos, quando os outras formas de sintaxe mais reduzida (como os que vamos ver em seguida) não atendem. O laço pode ser decremental ao invés de incremental (percorrer um array de trás para frente), a variável contadora pode receber outro valor como let indice = 2 ou let indice = outraVariavel + 1 (desde que esse valor seja avaliado como número), a condição de teste pode ser o tamanho do array como no exemplo, ou outro (indice < lista.length - 1) e o incremento ou decremento ao final do laço pode receber qualquer operador aritmético ou ser o resultado de uma operação, como indice = indice + 2 ou indice *= 2.

É possível, inclusive, usar o for para executar algoritmos mais complexos, que também não seriam possíveis com outros métodos, por exemplo:

const lista = [1, 2, 3, 4, 5];

for (let i = 0, j = 0; i < lista.length; i++, j++) {
 console.log(lista[i] + j); 
}

//1
//3
//5
//7
//9

Ainda há outras formas de se trabalhar com as condições do for, que você pode conferir na documentação sobre for no MDN.

for…of
Adicionado às funcionalidades do JavaScript na versão ES6, é um tipo de laço de repetição diferente do for tradicional, embora utilize a mesma palavra-chave:

const lista = [1, 2, 3, 4, 5];
let soma = 0;

for (let elemento of lista) {
 soma += elemento;
}

console.log(soma) //15

O for…of pode ser executado utilizando qualquer tipo de iterável: além de arrays, strings, sets (conjuntos) e maps (mapas ou dicionários) são considerados objetos iteráveis. Não vamos falar dos dois últimos tipos neste curso, mas se você tiver interesse em saber mais sobre conjuntos, dicionários e outras estruturas de dados, pode dar uma olhada neste artigo; o que precisamos saber agora é que um iterável, aqui, representa uma sequência de elementos que pode ser percorrida (ou seja, iterada) utilizando o for…of. É importante fazer esta distinção entre array e iterável, pois nem todo método ou declaração que funciona em um array vai funcionar em outros iteráveis.

Olhando assim, o for…of se parece bastante com o for: temos a declaração de uma variável (let elemento) seguida da palavra-chave of e um identificador do iterável que será percorrido (no caso acima é um array mesmo, lista).

A diferença principal e mais visível entre o for e o for…of é que o anterior dá muito mais controle sobre de que forma o laço de repetição ocorre. Por exemplo, vimos que no for é possível manipular de forma mais fina todas as condicionais; já no for…of as condições são mais “fixas”: elemento se refere a cada elemento (ou item) do array e o loop sempre ocorre de forma sequencial, do primeiro elemento até o último.

Em contrapartida, a sintaxe simplificada e mais “legível” para pessoas faz com que o uso do for…of seja mais prático do que o for, pois laços de repetição mais simplificados, que percorrem um iterável do primeiro ao último elemento e executam o código do bloco a cada iteração, são muito mais corriqueiros.

forEach()
Ao contrário de for e for…of, o forEach() é um método do objeto Array.

O que é um método? Em programação, chamamos de método uma função que é propriedade de um objeto. A documentação do MDN traz alguns exemplos de métodos, mas você vai poder conferir com mais detalhes o que são objetos e suas propriedades quando fizer o curso de fundamentos do JavaScript: Objetos. Por agora, basta saber que quando dizemos que determinada função - por exemplo, forEach() é um método de array, significa que esta função foi desenvolvida para trabalhar apenas com esse tipo de dado - no caso, com arrays.

O forEach(), assim como outros métodos de array que vimos ou ainda vamos ver durante esta aula, também cumprem o papel de iterar arrays, porém com funcionalidades e retornos bem definidos. No caso do forEach(), apesar da sintaxe bem diferente, podemos utilizar este método como o for ou o for…of, pois ele vai executar as instruções que forem passadas para cada elemento iterado, sem retornar nenhum dado.

O forEach(), assim como alguns outros métodos de array do JavaScript que estamos vendo no curso, utiliza a abordagem funcional de funções callback para executar o código necessário a cada elemento iterado no laço:

const lista = [1, 2, 3, 4, 5];
let soma = 0;

lista.forEach(numero => soma += numero);
console.log(soma) //15

Como visto acima, o método forEach() recebe uma função como parâmetro, e esta função por sua vez utiliza como parâmetro cada um dos elementos do array. A lógica interna do forEach() vai manejar a iteração do primeiro ao último item do array e fazer com que o código definido dentro da função callback (no caso, apenas um incremento soma += numero) seja executado a cada iteração.

O mesmo código também poderia ser escrito da seguinte forma, um pouco mais extensa porém mais legível:

lista.forEach(numero => {
 soma += numero
});

Ou ainda, utilizando a palavra-chave function ao invés de arrow functions; essa forma de escrita não é usual, pois quando usamos funções callback o padrão adotado é o de arrow functions, mas serve para o propósito de legibilidade:

lista.forEach(function (numero) {
 soma += numero
});

Assim, vemos que o forEach() não retorna nenhum tipo de valor, apenas executa o que está dentro do bloco da função callback, assim como for e for…of. Porém também não é possível modificar a forma que a iteração será feita (é sempre do primeiro elemento do array ao último) e não há forma de interromper o laço dada alguma condição, como o break funcionaria para um for normal.

O forEach() também não pode ser utilizado com qualquer iterável, apenas com arrays e também não pode ser utilizado de forma assíncrona - um tema um pouco mais avançado e que não trabalharemos nesse curso, mas que você pode conferir neste artigo se tiver curiosidade pra começar a aprender.

E quando devo utilizar um ou outro?
A resposta, como em muitas coisas na programação, é depende!

Atualmente, em termos de performance - ou seja, qual código é executado de forma mais rápida pelo computador e consumindo menos recursos de memória - tanto os laços com for como o forEach() não tem diferenças significativas, embora ainda possam ocorrer exceções, como no caso de versões muito antigas de navegadores e/ou manipulação de arrays muito longos. Mas no momento em que desenvolvemos este curso a questão de performance não é tão definidora na maior parte dos casos, pois os interpretadores do JavaScript já evoluíram para trabalhar tão bem com funções callbacks quanto com iteradores.

-> O forEach() utiliza callbacks assim como map(), filter() e alguns outros métodos de array, o que facilita a utilização desses métodos em conjunto ou a troca de um para outro dependendo da necessidade do código ou de uma refatoração. Alguns guias de estilo de código desenvolvidos pela comunidade, como o famoso guia do AirBNB, indica preferencialmente o uso do forEach() no lugar do for…of para manter a consistência no estilo do código.

-> O for…of, mais recente que o forEach(), não é um método de array e sim um iterador, assim como o for. Ou seja, vai trabalhar com outros tipos de dados iteráveis além de arrays, com uma sintaxe mais simplificada que a do for.

Como em ambos os casos não há retorno, somente a execução do código que está dentro do bloco - os colchetes {} do for…of ou a função callback do forEach(), você pode utilizar as ferramentas da seguinte forma:

-> forEach() para trabalhar com arrays da forma mais corriqueira - percorrendo do primeiro ao último elemento, sem alterar a condição de parada, e também para manter a coesão do estilo quando em conjunto com outros métodos de array como map, filter e etc;
for…of em caso de iteráveis (dicionários, conjuntos e outras estruturas de dados) ou de arrays quando for necessário o uso de programação assíncrona e/ou dar condições de saída do laço (por exemplo, com o uso de break);
for para casos em que seja necessário manipular de forma mais fina as fases do laço (condição inicial, condição de parada e incremento).


Para saber mais: strings são arrays?
PRÓXIMA ATIVIDADE

Durante essa aula, utilizamos um método específico para strings, o toUpperCase(), para alterar todos os caracteres de cada string do array para letras maiúsculas. Mas e se quisermos acessar somente uma letra? Poderíamos usar um loop para percorrer todas as letras de um string?

“String”, além de ser o tipo de dado usado para representar textos, também se define como uma sequência ordenada de caracteres!

“Lista ordenada” (ou sequência) também é uma forma de definir arrays, certo? Então podemos pensar que, por baixo dos panos, strings são armazenadas em memória da seguinte forma:

const nome = "Alura";
// ["A", "l", "u", "r", "a"]

Ou seja, é possível utilizar alguns métodos de array e laços de repetição para acessar e alterar strings:

const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURA

const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"

const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura

Você pode conferir a lista completa de métodos de string na documentação do MDN. Confira na lista de links na seção à esquerda da tela e veja se consegue identificar alguns que já utilizamos nas aulas para trabalhar com arrays.

forEach e map

Agora já vimos mais sobre as funções callback e o método map() que utiliza essas funções, também vimos anteriormente sobre o método forEach().

O retorno do método.
-> Enquanto o método forEach não tem um retorno, o método map() pode retornar um array se a função callback retornar algum valor.


Faça como eu fiz: métodos callback
PRÓXIMA ATIVIDADE

Nesta aula introduzimos um novo conceito, o de funções callback.

O termo callback se refere à função que é “chamada de volta” dentro de outra função. Após o lançamento do ES6 (também conhecido como EcmaScript 2015) o uso desse tipo de método foi se consolidando, então é importante entender como utilizá-lo.

O JavaScript moderno traz vários métodos e funções callback diversos, não apenas para uso com arrays. Porém a estrutura da função se mantém similar.

Crie um novo arquivo index.js e crie uma array de números:

const arrayNums = [1, 2, 3, 4]

Vamos utilizar o map() para multiplicar cada um dos valores nesse array por 10 e retornar um novo array com os resultados. Antes de escrevermos o map() para isso, vamos criar a função callback; ou seja, a função que vamos chamar (call) de volta quando executarmos o método map():

function multiplicaPorDez(num) {
 return num * 10
}

Agora podemos chamar o map() para fazer a operação:

const arraySomada = arrayNums.map(multiplicaPorDez)

console.log(arraySomada)

O resultado no terminal deve ser [ 10, 20, 30, 40 ].

IMPORTANTE: Observe a função multiplicaPorDez. Quando criamos esta função, especificamos que ela precisa receber o parâmetro (num) para ser executada corretamente. No entanto, quando ela está sendo chamada dentro de arrayNums.map(), não passamos nenhum parâmetro e mesmo assim funcionou. O que aconteceu aqui?

Para entender melhor, vamos reescrever o código, passando a função multiplicaPorDez(num) direto como parâmetro do map():

const arraySomada = arrayNums.map(num => num * 10)

console.log(arraySomada)

No código acima, substituímos uma função externa e nomeada (a função multiplicaPorDez), por uma arrow function anônima que existe somente dentro do map(). Mas esta função anônima também tem um parâmetro, num, que representa cada um dos elementos do array que será iterado pelo map().

Por isso, quando utilizamos uma função externa como callback de um map(), não foi necessário passar um parâmetro. O map() executa automaticamente o bloco de código da função (nesse caso, num * 10) para cada elemento do array.

Ambos os casos de uso são válidos; as funções externas permitem reaproveitamento de código, mas há vários momentos em que isso não será necessário.

Para o JavaScript, qualquer função que seja chamada como argumento de outra é considerada uma função callback, não apenas em caso de métodos. Você pode ver outros exemplos no MDN.

O que aprendemos?
PRÓXIMA ATIVIDADE

Nesta aula vimos:
Como utilizar o forEach:
Aprendemos mais uma forma de iterar sobre arrays, dessa vez com um método próprio deles. O forEach recebe uma função callback que será executada para cada item do array.
Diferentes formas de utilizar funções callback:
Podemos utilizar funções anônimas (como arrow functions) diretamente como funções callback, ou então criar funções de forma externa e utilizá-las no parâmetro.
Como utilizar o map:
O map também aceita funções callback, assim como o forEach, e é adequado para quando queremos "reescrever" os valores de um array, sem modificar o array original. Um novo array é criado com os valores reescritos.

Aula 5 - Avançando com arrays

Retorno do filter
PRÓXIMA ATIVIDADE

Vimos como utilizar o método filter para retornar um array com apenas alguns elementos do array principal através de uma função callback.

Um booleano.
-> Quando a função callback retorna verdadeiro, ou true, o elemento é adicionado no array de retorno, e quando ela retorna falso, ou false, o elemento é descartado.

Faça como eu fiz: estrutura do reduce()

Durante a aula trabalhamos com o método reduce() para “reduzir” uma lista de números para um único valor. Este método trabalha com parâmetros um pouco diferentes dos outros que vimos durante o curso. Por isso, vamos destrinchar o exemplo da aula para entender melhor as partes do código.

Em seu editor, crie um arquivo index.js e execute o seguinte código:

const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acc, atual) => atual + acc, 0)

console.log(soma) //170

O código acima é muito parecido com o que foi feito durante a aula. É importante notar que:

O método reduce() está trabalhando com dois parâmetros. O primeiro é a função callback obrigatória para retornar o cálculo e o segundo parâmetro é um número que representa o valor inicial do acumulador – no caso, 0.
A função callback foi escrita diretamente dentro do reduce(), e esta função também está recebendo dois parâmetros, ambos obrigatórios: o valor acumulado e o valor atual.
A função callback foi escrita na forma de arrow function; nesse caso, quando só temos uma linha de instrução dentro da função (atual + acc) não precisamos usar chaves e nem da palavra-chave return.
Caso você tenha mais de uma linha de instrução dentro de uma arrow function, as chaves {} e a palavra-chave return voltam a ser necessários.

Vamos reescrever o reduce() de uma forma um pouco mais extensa para separar melhor as partes do código:

const soma = numeros.reduce(function (acc, atual) {
 return atual + acc
}, 0)

Vendo o código acima, percebe-se melhor onde começam e terminam cada um dos parâmetros do reduce(): o primeiro parâmetro, uma função e o segundo, um número.

Uma terceira forma de reescrever seria escrevendo a função callback fora do reduce():

function operacaoNumerica(acc, atual) {
 return atual + acc
}

const soma = numeros.reduce(operacaoNumerica, 0)

O reduce() roda o loop no array “por baixo dos panos”, executando para cada elemento a instrução passada na função operacaoNumerica.

No dia a dia, a forma que utilizamos no vídeo é a mais usual. Porém, durante seus estudos, você pode praticar da forma que achar mais clara.

É importante lembrar que cada método pode aceitar receber parâmetros diferentes! Alguns são obrigatórios, outros opcionais. Consulte sempre a documentação da linguagem.


Para saber mais: valor ou referência?

No vídeo anterior, você viu como clonar um array de forma apropriada no JavaScript. Atribuir diretamente um array para outro com o sinal = faz com o que o JavaScript entenda que é como se eles fossem o mesmo array. Para evitar esse comportamento, devemos criar um array totalmente novo, com a ajuda do spread operator ... (ou operador de espalhamento).

Porém, esse comportamento não acontece com strings, números e booleanos, que são tipos primitivos do JavaScript.

Considere o seguinte código:

let num1 = 10;
let num2 = num1;

num2 += 5;
num1 += 1;

console.log(`Num1 é ${num1}. Num2 é ${num2}`);

Ao executar o código, teremos a frase “Num1 é 11. Num2 é 15”. Ou seja, com o código let num2 = num1, o JavaScript entende que queremos criar uma cópia de num1, e cria uma nova variável, com seu próprio espaço na memória guardando seu valor. Então, ao modificar uma das variáveis, a outra não é alterada.

Esse comportamento de copiar um valor primitivo, o atribuindo a uma nova variável, é chamado de atribuição por valor e acontece somente com os tipos primitivos do JavaScript.

O mesmo comportamento ocorre quando trabalhamos com parâmetros de funções. Veja o seguinte exemplo:

let numeroOriginal = 10;

function alteraNumero(numero) {
  numero = 50;

  console.log(`numero do parâmetro é ${numero}. numeroOriginal é ${numeroOriginal}`);
}

alteraNumero(numeroOriginal);

Executando o código, teremos a frase “numero do parâmetro é 50. numeroOriginal é 10”. Ao chamar a função passando numeroOriginal como parâmetro, foi feita uma cópia de seu valor para ser utilizada como o parâmetro numero dentro da função. Dessa forma, mesmo alterando numero dentro da função, numeroOriginal permanece inalterado.

Mas como você viu, com arrays não funciona bem dessa forma, afinal, eles não são um tipo primitivo. Considere o exemplo utilizado no vídeo passado:

const notas = [7, 7, 8, 9];

const novasNotas = notas;

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);

A partir do código const novasNotas = notas, o JavaScript entende que novasNotas e notas passam a ser o mesmo array, e agora eles apontam para o mesmo espaço na memória. Como estamos lidando com dados mais complexos, o JavaScript faz isso por padrão para otimizar memória e performance, em vez de realizar uma cópia do array em toda nova atribuição.

Uma atribuição de um array é chamada de atribuição por referência, pois nela é passada a referência do array em si, e não uma cópia de seu valor.

O mesmo comportamento ocorre quando trabalhamos com parâmetros de funções. Veja o código abaixo:

const arrayOriginal = [7, 7, 8, 9];

function alteraArray(array) {
  array.push(10);

  console.log(`array do parâmetro é ${array}`);
  console.log(`arrayOriginal é ${arrayOriginal}`);
}

alteraArray(arrayOriginal);

Executando o código, teremos essa saída:

array do parâmetro é 7,7,8,9,10
arrayOriginal é 7,7,8,9,10

Após passar arrayOriginal como parâmetro de alteraArray, o utilizamos como o parâmetro array. O código array.push(10) alterou ambos os arrays, assim como o que houve no exemplo que fizemos a atribuição. Ou seja, novamente, foi passada a referência do array em si, e não uma cópia dele.

De forma análoga à solução do vídeo, caso queiramos passar uma cópia do array e não sua referência, trocamos o código alteraArray(arrayOriginal) por alteraArray([...arrayOriginal]). Assim, a saída será:

array do parâmetro é 7,7,8,9,10
arrayOriginal é 7,7,8,9

Para saber mais: estrutura Set
PRÓXIMA ATIVIDADE

Você viu que a estrutura Set é muito semelhante aos arrays, mas possui diferentes métodos e a interessante regra de que seus elementos não podem se repetir. Utilizamos essa regra ao nosso favor para eliminar as duplicatas de um array, convertendo-o para um Set e de volta para um array.

Você pode explorar mais seus conhecimentos sobre o Set na documentação.
-> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set

O que aprendemos?
PRÓXIMA ATIVIDADE

Nesta aula vimos:
Como utilizar o filter e o reduce:
Aprendemos mais métodos modernos do JavaScript que nos ajudam em situações mais específicas. Utilizamos o filter para criar um array filtrado a partir de um existente e o reduce para acumular valores de um array em um só.
Como clonar arrays com o spread operator ...:
Entendemos o problema de referência do JavaScript ao tentar atribuir um array a um novo. Para resolver esse problema, utilizamos o spread operator para espalhar todos os valores de um array em um novo, realizando a clonagem com sucesso.
Como utilizar a estrutura Set:
Vimos como criar um Set a partir de um array existente, a fim de remover todas as suas duplicatas. Em seguida, utilizamos o spread operator para converter o Set de volta em um lista.

Neste treinamento, todas as barreiras foram vencidas e você aprofundou ainda mais seus conhecimentos em JavaScript.

Você aprendeu o que são arrays, um tipo de estrutura de dados extremamente importante em programação. Conheceu o conceito principal e como trabalhar com arrays, utilizando métodos nativos do JavaScript como o push() e o splice(); praticou também com outro conceito importantíssimo em programação, os laços de repetição, utilizando o for e métodos do JavaScript como map() e forEach(), além de aprender mais sobre funções e métodos com as chamadas funções callback.

Nossa, quanta coisa legal!

Vamos recapitular o tanto de coisas legais que aprendemos!

No começo do curso, calculamos nossa primeira média, criando nosso primeiro array e vendo como acessar seus valores da forma mais simplificada. Começamos a ver os primeiros métodos e propriedades.

Vimos como utilizar os métodos .push(), que adiciona um novo item ao final, e o .pop(), que remove o último item. Também vimos como separar um array em partes com slice(), utilizamos para obter dois novos arrays a partir de um.

E vimos as diferenças entre os métodos do JS, onde alguns alteram a array original e outros retornam novos arrays. É importante ter isso em mente, sempre consultando a documentação em caso de dúvida.

Vimos como remover e incluir novos elementos em um array com splice(), sendo que esse método permite remover elementos de qualquer posição do array. Vimos como juntar elementos em um único array com concat(); sendo que essa é uma forma facilitada de juntar dois arrays.

Aprendemos a trabalhar com arrays de duas dimensões, também chamados de matrizes. Vimos que uma lista também pode guardar outras listas! Para acessar elementos das listas mais internas, devemos informar primeiro os índices das mais externas e depois os das mais internas, como por exemplo com funcionarios[0][2].

Em seguida, aprendemos sobre os laços de repetição, vimos o for clássico, presente em praticamente toda linguagem de programação. Também utilizamos o for para calcular média e também usamos o for of e o forEach() para calcular a média.

No forEach() começamos a ver métodos de arrays para realizar laços de repetição. Utilizamos o map() para reescrever arrays, fizemos com números e com strings. utilizamos também o filer e o reduce, que são métodos mais modernos que facilitam a resolução dos problemas e você os verá sendo bastante utilizados no mercado.

Por fim, entendemos o problema de referência do JavaScript ao tentar atribuir um array a um novo. Para resolver esse problema, utilizamos o spread operator para espalhar todos os valores de um array em um novo, realizando a clonagem com sucesso.

Também vimos como utilizar uma estrutura de dados mais avançada, a estrutura Set. Vimos como criar um Set a partir de um array existente, a fim de remover todas as suas duplicatas. Em seguida, utilizamos o spread operator para converter o Set de volta em uma lista.

Aprendemos muita coisa! Vimos desde problemas simples aos mais complexos.

Não esqueça de conferir as atividades e exercícios que deixamos para você. Eles são muito importantes para consolidar o seu conhecimento!

Esse curso é uma introdução para seus estudos sobre arrays. Você ainda aprenderá muito sobre eles ao usá-los em projetos reais e praticar ainda mais.