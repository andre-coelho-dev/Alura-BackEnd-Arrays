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
PRÓXIMA ATIVIDADE

Nesta aula vimos como:
Utilizar os métodos includes() e indexOf():
O includes() retorna true ou false, dependendo se o valor passado como parâmetro está presente ou não no array. O indexOf() retorna a posição no array do valor passado como parâmetro. Utilizamos esses dois métodos em conjunto para primeiro verificar se um aluno estava presente em uma lista, e depois obter sua posição para buscar sua nota em outra lista.
Desestruturar um array:
Você aprendeu a sintaxe de desestruturação, disponível desde o ES6 (EcmaScript 6), que nos permite criar várias novas variáveis ao mesmo tempo a partir dos elementos de um array.
Utilizar a estrutura for e entender seu funcionamento:
O for é constituído de três expressões: criação da variável de controle; condição de execução; modificação da variável de controle. Essas três expressões juntas definem quantas vezes o bloco do for será executado.
Utilizar a estrutura for of e entender a diferença em relação ao for:
O for of sempre é utilizado para percorrer todos os elementos de um array, do início ao fim. Para esses casos, o for of é mais conciso que o for.