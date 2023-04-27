const data = [
    {
      id: 1,
      question: "O que é uma Linguagem de Programação?",
      tipo: "button",
      resposta: [
        {
          text: "Linguagem de Computador",
          correct: false,
        },
        {
          text: "Linguagem Humana",
          correct: false,
        },
        {
          text: "Linguagem Animal",
          correct: false,
        },
        {
          text: "Linguagem de Alto Nível",
          correct: true,
        },
      ],
    },
    {
      id: 2,
      question: "Digite sem espaço a palavra que simboliza o tipo inteiro em C.",
      tipo: "input",
      resposta: [
        {
          text: "int",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "Como declarar uma Variável do tipo inteiro?",
      tipo: "button",
      resposta: [
        {
          text: "Int x",
          correct: false,
        },
        {
          text: "Inteiro x;",
          correct: false,
        },
        {
          text: "int x;",
          correct: true,
        },
        {
          text: "inteiro x",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Declare uma variável do tipo realC, com o nome Aluno e com valor 1.2",
      tipo: "input",
      resposta: [
        {
          text: "floatAluno=1.2;",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Qual a forma correta de declarar uma variável para caracteres com o nome Palavra?",
      tipo: "button",
      resposta: [
        {
          text: "caractere Palavra;",
          correct: false,
        },
        {
          text: "char Palavra;",
          correct: true,
        },
        {
          text: "char Palavra",
          correct: false,
        },
        {
          text: "caract Palavra;",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "",
      tipo: "img",
      url: "./c2.png",
      resposta: [
        {
          text: "",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Consideremos que X = 5, se em seguida fazermos X++, quanto valerá o X?",
      tipo: "button",
      resposta: [
        {
          text: "X = 25;",
          correct: false,
        },
        {
          text: "X = 10;",
          correct: false,
        },
        {
          text: "X = 6;",
          correct: true,
        },
        {
          text: "X = 50;",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Qual resultado será de X será obtida Pelo seguinte código: X = 9 % 2;",
      tipo: "input",
      resposta: [
        {
          text: "1",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Qual do seguintes operadores é um Operador Lógico?",
      tipo: "button",
      resposta: [
        {
          text: "&&",
          correct: true,
        },
        {
          text: "!=",
          correct: false,
        },
        {
          text: ">",
          correct: false,
        },
        {
          text: "<=",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Utiliza o operador aritmético + para somar dois inteiros e resultar em 200?",
      tipo: "operador",
      resposta: [
        {
          text: 200,
          op: "+",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "",
      tipo: "img",
      url: "./fase3.png",
      resposta: [
        {
          text: "",
          correct: true,
        },
      ],
    },
    {
      id: 29,
      question: "Qual trecho de código está corretamente usando o printf?",
      tipo: "button",
      resposta: [
        {
          text: "printf(“ Olá Mundo! ”);",
          correct: true,
        },
        {
          text: "printf(-Olá Mundo!-);",
          correct: false,
        },
        {
          text: "printf((“ Olá Mundo! ”));",
          correct: false,
        },
        {
          text: "printf(-(“ Olá Mundo! ”)-);",
          correct: false,
        },
      ],
    },
    {
      id: 740,
      question: "Qual trecho de código está corretamente usando o scanf?",
      tipo: "button",
      resposta: [
        {
          text: "scanf(Olá Mundo!);",
          correct: false,
        },
        {
          text: "scanf-Olá Mundo!-",
          correct: false,
        },
        {
          text: "scanf(“%d”, &nome);",
          correct: true,
        },
        {
          text: "scanf(Olá Mundo!);",
          correct: false,
        },
      ],
    },
    {
      id: 32,
      question: "",
      tipo: "img",
      url: "./c4.png",
      resposta: [
        {
          text: "",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "Qual função serve para executar um bloco de código se a condição for verdadeira?",
      tipo: "button",
      resposta: [
        {
          text: "printf",
          correct: false,
        },
        {
          text: "if else",
          correct: false,
        },
        {
          text: "if",
          correct: true,
        },
        {
          text: "else",
          correct: false,
        },
      ],
    },
    {
      id: 15777,
      question: "Utiliza a condição if para testar dois valores e saber se 20 é maior que 18. Se a condição for verdadeira imprima o texto... printf(“ 20 é maior que 18 “);",
      tipo: "input",
      resposta: [
        {
          text: `if(20>18){printf("20émaiorque18");}`,
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "Qual função serve para executar um bloco de código se a condição for falso?",
      tipo: "button",
      resposta: [
        {
          text: "printf",
          correct: false,
        },
        {
          text: "if else",
          correct: false,
        },
        {
          text: "if",
          correct: false,
        },
        {
          text: "else",
          correct: true,
        },
      ],
    },
    {
      id: 17755,
      question: `Utiliza a condição if-else para testar dois valores if(18>20) e saber se 18 é menor que 20. Se a condição for verdadeira imprima o texto printf(" 20 é maior que 18 "); se for falso imprima o texto printf(" 18 é menor que 20");`,
      tipo: "input",
      resposta: [
        {
          text: `if(18>20){printf("20émaiorque18");}else{printf("18émenorque20");}`,
          correct: true,
        },
      ],
    },
    {
      id: 18,
      question: "",
      tipo: "img",
      url: "./c5.png",
      resposta: [
        {
          text: "",
          correct: true,
        },
      ],
    },
    {
      id: 111,
      question: "Qual delas é uma instrução de repetição?",
      tipo: "button",
      resposta: [
        {
          text: "while",
          correct: true,
        },
        {
          text: "if",
          correct: false,
        },
        {
          text: "print",
          correct: false,
        },
        {
          text: "else",
          correct: false,
        },
      ],
    },
    {
      id: 112,
      question: "Qual delas é a melhor instrução de repetição para se usar quando se conhece o número de vezes para executar o código de bloco?",
      tipo: "button",
      resposta: [
        {
          text: "while",
          correct: false,
        },
        {
          text: "for",
          correct: true,
        },
        {
          text: "else",
          correct: false,
        },
        {
          text: "do/while",
          correct: false,
        },
      ],
    },
    {
      id: 21,
      question: "Utiliza o ciclo de repetição for, para imprimir “sim” 5 vezes.",
      tipo: "input",
      resposta: [
        {
          text: `for(inti==;i<5;i++){Printf("Sim");}`,
          correct: true,
        },
      ],
    },
    {
      id: 112,
      question: "Qual delas é uma instrução de repetição?",
      tipo: "button",
      resposta: [
        {
          text: "do/while",
          correct: true,
        },
        {
          text: "if",
          correct: false,
        },
        {
          text: "else",
          correct: false,
        },
        {
          text: "print",
          correct: false,
        },
      ],
    },
    {
      id: 181,
      question: "",
      tipo: "img",
      url: "./c6.png",
      resposta: [
        {
          text: "",
          correct: true,
        },
      ],
    },
    {
      id: 113,
      question: "Complete a seguinte frase, Array é usado para armazenar vários valores em uma única ------ ",
      tipo: "button",
      resposta: [
        {
          text: "for",
          correct: false,
        },
        {
          text: "variável",
          correct: true,
        },
        {
          text: "printf",
          correct: false,
        },
        {
          text: "else",
          correct: false,
        },
      ],
    },
    {
      id: 113,
      question: "Qual deles esta declarado corretamente usando array de 1 dimensão?",
      tipo: "button",
      resposta: [
        {
          text: "int [] A;",
          correct: false,
        },
        {
          text: "int B = [6];",
          correct: false,
        },
        {
          text: "int C = [2,4,6];",
          correct: false,
        },
        {
          text: "int A[] = { 6 };",
          correct: true,
        },
      ],
    },
    {
      id: 121,
      question: "Declare um Array do tipo inteiro com o nome Aluno de tamanho 1 (Expecifique o tamanho) e com o valor 6.",
      tipo: "input",
      resposta: [
        {
          text: "intAluno[1]={6};",
          correct: true,
        },
      ],
    },
    {
      id: 113,
      question: "Qual deles esta declarado corretamente usando array de 2 dimensões?",
      tipo: "button",
      resposta: [
        {
          text: "int [] A;",
          correct: false,
        },
        {
          text: "int B[] = { 6, 4 };",
          correct: true,
        },
        {
          text: "int C = [ 2, 4, 6 ];",
          correct: false,
        },
        {
          text: "int A = { 6 };",
          correct: false,
        },
      ],
    },
    {
      id: 123,
      question: "Declare um Array do tipo inteiro com o nome Aluno de tamanho 2 (Expecifique o tamanho) e com o valor 2 e 4.",
      tipo: "input",
      resposta: [
        {
          text: "intAluno[2]={2,4};",
          correct: true,
        },
      ],
    },
    {
      id: 113,
      question: "Qual deles esta declarado corretamente usando array de 3 dimensões?",
      tipo: "button",
      resposta: [
        {
          text: "int [] A;",
          correct: false,
        },
        {
          text: "int B[] = { 6, 4 };",
          correct: false,
        },
        {
          text: "int C[] = { 2, 4, 6 };",
          correct: true,
        },
        {
          text: "int A = { 6 };",
          correct: false,
        },
      ],
    },
]

module.exports = {
    userget: async()=>{
        return { error: false, data:data};
    }
}