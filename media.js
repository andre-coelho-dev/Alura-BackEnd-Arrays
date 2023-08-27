// const nota1 = 10;
// const nota2 = 6.5;
// const nota3 = 8;
// const nota4 =7.5;

// posições:
//             0   1    2   3
const notas = [10, 6.5, 8, 7.5];

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);

// Explicação
// Nomenclaturas

// notas 10 - 6.5 - 8 - 7.5

// Toda lista precisa de um identificador — no caso, temos notas.

// Cada um dos valores de um array está guardado dentro de uma "caixinha", que representa um espaço na memória que o nosso computador reservou para armazenar esse valor. Então, temos uma caixinha com o valor 10, outra caixinha com valor 6.5, outra com valor 8 e outra com valor 7.5.

// Vale lembrar que um array pode ter o tamanho que nós quisermos.

// Cada um dos valores de um array pode ser chamado de elemento, item ou valor. Usando qualquer um desses três termos, você será entendida ou entendido.

// Também aprendemos que cada um desses itens tem um identificador numérico único. Esses identificadores são chamados de índices ou posições. Eles sempre começam no zero e aumentam de um em um, até onde for necessário:

// notas 10 - 6.5 - 8 - 7.5 <= elementos / itens / valores
//       0    1     2    3  <= índices / posições

// Portanto, esses são os nomes mais técnicos das estruturas que compõem uma lista.

// Revisão

// Vamos aproveitar para revisar como criamos um array no JavaScript. Para nosso array de notas, sempre utilizaremos a seguinte sintaxe:
      
// const notas = [10, 6.5, 7.5, 10];

// Colocamos as notas dentro de colchetes, separando-as por vírgula. No caso, criamos uma constante (const), mas podemos usar um let ou um var, conforme a necessidade.

// Além disso, também aprendemos como acessar um item em uma posição específica. Por exemplo, para imprimir o valor da posição 2 da lista, usaremos o seguinte comando:

// console.log(notas[2])
// // imprime o número 8

// Ou seja, invocamos um console.log() com o nome do array seguido de colchetes, dentro dos quais informamos a posição que queremos acessar. Sendo assim, com notas[2], acessamos o valor na segunda posição de notas, que guarda o valor 8.

// Listas e tipos de valor
// Por ora, estamos trabalhando apenas com números, mas vale ressaltar que as listas do JavaScript não se restringem a um único tipo de dado. Em um único array, podemos ter o valor 10 , uma string "oi" e um valor true e outro false (booleanos). É possível colocar todos esses valores em uma mesma lista, apesar de não ser comum:


// notas 10 - "oi" - true - false <= elementos / itens / valores
//        0    1      2       3   <= índices / posições

// Considera-se uma boa prática trabalhar com o mesmo tipo de dado em um array, mas o JavaScript permite inserir diferentes tipos de dados em um mesmo array. Geralmente, teremos uma lista só de número ou uma lista só de string, por exemplo, ou até uma lista só de booleanos, que também não é muito comum.