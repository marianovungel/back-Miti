const data = [
    {
      id: 1,
      question: "Em que ano foi criado a linguagem Java?",
      tipo: "button",
      resposta: [
        {
          text: "2002",
          correct: false
        },
        {
          text: "1995",
          correct: true
        },
        {
          text: "1945",
          correct: false,
        },
        {
          text: "1975",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: `Qual é a forma correta de declarar uma variável do tipo boolean em Java?`,
      tipo: "button",
      resposta: [
        {
          text: "boolean x = false;",
          correct: true,
        },
        {
          text: "Inteiro x;",
          correct: false,
        },
        {
          text: "boolean == x;",
          correct: false,
        },
        {
          text: "inteiro x",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Qual é o tipo de variável inteira que serve para armazenar 64 bits?",
      tipo: "input",
      resposta: [
        {
          text: "long",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: `Qual é a forma correta de declarar uma variável do tipo char com nome Professor em Java?`,
      tipo: "button",
      resposta: [
        {
          text: "caractere Professor;",
          correct: false,
        },
        {
          text: "char Professor;",
          correct: true,
        },
        {
          text: "char Professor",
          correct: false,
        },
        {
          text: "caract Professor;",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "",
      tipo: "img",
      url: "./jv02.png",
      resposta: [
        {
          text: "",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "Quais foram os tipos de operadores que estudamos no texto anterior?",
      tipo: "button",
      resposta: [
        {
          text: "Aritmético, Atribuição, Comparação e Lógico",
          correct: true,
        },
        {
          text: `Lógico, Geométrico e Atribuição`,
          correct: false,
        },
        {
          text: `Analítico, Atribuição e Geométrico`,
          correct: false,
        },
        {
          text: `Aleatório, Aritmético e Comparação`,
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: `Utiliza o operador aritmético * para multiplicar dois inteiros e resultar em 30?`,
      tipo: "operador",
      resposta: [
        {
          text: 30,
          op: "*",
          correct: true,
        }
      ],
    },
    {
      id: 7,
      question: "Qual dos seguintes operadores é um Operador Lógico?",
      tipo: "button",
      resposta: [
        {
          text: `&&`,
          correct: true,
        },
        {
          text: `>`,
          correct: false,
        },
        {
          text: `<=`,
          correct: false,
        },
        {
          text: `!=`,
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: `Utiliza o operador aritmético + para somar dois inteiros e resultar em 60?`,
      tipo: "operador",
      resposta: [
        {
          text: 60,
          op: "+",
          correct: true,
        }
      ],
    },
    {
        id: 12,
        question: "",
        tipo: "img",
        url: "./fasejava3.png",
        resposta: [
          {
            text: "",
            correct: true,
          },
        ],
      },
      {
        id: 765865,
        question: `Qual trecho de código está corretamente usando o println?`,
        tipo: "button",
        resposta: [
          {
            text: `Syst.out.println(“ Sim “);`,
            correct: false,
          },
          {
            text: `System.ou.println(“ Sim “);`,
            correct: false,
          },
          {
            text: `Syste.out.println(“ Sim “);`,
            correct: false,
          },
          {
            text: `System.out.println(“ Sim “);`,
            correct: true,
          },
        ],
      },
      {
        id: 12,
        question: "",
        tipo: "img",
        url: "./jv4.png",
        resposta: [
          {
            text: "",
            correct: true,
          },
        ],
      },
      {
        id: 765865,
        question: `Qual comando serve para executar um bloco de código se a condição for verdadeira?`,
        tipo: "button",
        resposta: [
          {
            text: `println`,
            correct: false,
          },
          {
            text: `if else`,
            correct: false,
          },
          {
            text: `if`,
            correct: true,
          },
          {
            text: `else`,
            correct: false,
          },
        ],
      },
      {
        id: 15777,
        question: "Complete a condição if para testar dois valores e saber se 20 é maior que 18. Se a condição for verdadeira imprima o texto... (“20 é maior que 18“)",
        tipo: "if",
        resposta: [
          {
            text1: `if`,
            text2: `println`,
            p1: `(20>18) {`,
            p4: `System.out.`,
            p2: `(“20 é maior que 18 “);`,
            p3: `}`,
            correct: true,
          },
        ],
      },
      {
        id: 765865,
        question: `Qual comando serve para executar um bloco de código se a condição for falsa?`,
        tipo: "button",
        resposta: [
          {
            text: `println`,
            correct: false,
          },
          {
            text: `if else`,
            correct: false,
          },
          {
            text: `if`,
            correct: false,
          },
          {
            text: `else`,
            correct: true,
          },
        ],
      },
      {
        id: 17755,
        question: `Complete a condição if-else para testar dois valores e saber se 18 é menor que 20. Se a condição for verdadeira imprima o texto... (“18 é menor que 20 “);`,
        tipo: "ifelse",
        resposta: [
          {
            text1: `if`,
            text2: `println`,
            text3: `println`,
            p1: `(18>20) {`,
            p2: `(“20 é maior que 18 “);`,
            p3: `} else {`,
            p4: `(“18 é menor que 20”);`,
            p5: `}`,
            p6: `System.out.`,
            correct: true,
          },
        ],
      },
      {
        id: 1002,
        question: "",
        tipo: "img",
        url: "./jv5.png",
        resposta: [
          {
            text: "",
            correct: true,
          },
        ],
      },
      {
        id: 111,
        question: "Qual deles é um comando/instrução de repetição?",
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
        id: 1102,
        question: `Qual deles é o melhor comando/instrução de repetição para se usar quando se conhece o número de vezes para executar o código de bloco? `,
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
        tipo: "if",
        resposta: [
          {
            text1: `for`,
            text2: `println`,
            p1: `(int i = 1 ; i <=5; i++) {`,
            p2: `("Sim");`,
            p3: `}`,
            p4: `System.out.`,
            correct: true,
          },
        ],
      },
      {
        id: 112,
        question: `Qual deles é um comando/instrução de repetição?`,
        tipo: "button",
        resposta: [
          {
            text: "if",
            correct: false,
          },
          {
            text: "do/while",
            correct: true,
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
        id: 14,
        question: "",
        tipo: "img",
        url: "./jv6.png",
        resposta: [
          {
            text: "",
            correct: true,
          },
        ],
      },
      {
        id: 10103,
        question:`Complete a seguinte frase, Array é usado para armazenar vários valores em uma única ------ ?`,
        tipo: "button",
        resposta: [
          {
            text: "for",
            correct: false,
          },
          {
            text: "printf",
            correct: false,
          },
          {
            text: "else",
            correct: false,
          },
          {
            text: "variável",
            correct: true,
          }
        ],
      },
      {
        id: 10103,
        question:`Qual deles esta declarado corretamente usando array de 1 dimensão?`,
        tipo: "button",
        resposta: [
          {
            text: `int [] X;`,
            correct: false,
          },
          {
            text: `int Y = [2,4];`,
            correct: false,
          },
          {
            text: `int Z = [2,4,6];`,
            correct: false,
          },
          {
            text: `int [] X = { 6 };`,
            correct: true,
          }
        ],
      },
      {
        id: 4879420,
        question: `Declare um Array do tipo inteiro com o nome Aluno de tamanho 1 e com o valor 6.`,
        tipo: "input",
        resposta: [
          {
            text: `int[1]Aluno={6};`,
            correct: true,
          },
        ],
      },
      {
        id: 101013,
        question:`Qual deles esta declarado corretamente usando array de 2 dimensões?`,
        tipo: "button",
        resposta: [
          {
            text: `int [] X;`,
            correct: false,
          },
          {
            text: `int [] Y = {2,4};`,
            correct: true,
          },
          {
            text: `int Z = [2,4,6];`,
            correct: false,
          },
          {
            text: `int [] X = { 6 };`,
            correct: false,
          }
        ],
      },
      {
        id: 4879420,
        question: `Declare um Array do tipo inteiro com o nome Aluno de tamanho 2 e com o valor 2 e 4.`,
        tipo: "input",
        resposta: [
          {
            text: `int[2]Aluno={2,4};`,
            correct: true,
          },
        ],
      },
      {
        id: 1771013,
        question:`Qual deles esta declarado corretamente usando array de 3 dimensões? `,
        tipo: "button",
        resposta: [
          {
            text: `int [] X;`,
            correct: false,
          },
          {
            text: `int [] Y = {2,4};`,
            correct: false,
          },
          {
            text: `int [] Z = {2,4,6};`,
            correct: true,
          },
          {
            text: `int [] X = { 6 };`,
            correct: false,
          }
        ],
      },
]

module.exports = {
    userget: async()=>{
        return { error: false, data:data};
    }
}