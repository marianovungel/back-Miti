const data = [
    {
      id: 1,
      question: "Quem criou a linguagem de programação JavaScript? ",
      tipo: "button",
      resposta: [
        {
          text: `James Gosling`,
          correct: false
        },
        {
          text: `Brendan Eich`,
          correct: true
        },
        {
          text: `Dennis Ritchie`,
          correct: false,
        },
        {
        text: `Guido Van Rossum`,
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: `Qual é a forma correta de declarar uma variável com a palavra-chave var em
      JavaScript? `,
      tipo: "button",
      resposta: [
        {
          text: "var numero = 10;",
          correct: true,
        },
        {
          text: "let numero = 20;",
          correct: false,
        },
        {
          text: "const Pi = 3.14;",
          correct: false,
        },
        {
          text: "va numero 6;",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: `Declare uma variável com a palavra-chave var, com o nome Prova e com valor 12;`,
      tipo: "input",
      resposta: [
        {
          text: "varProva=12;",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: `Qual é a forma correta de declarar uma variável com a palavra-chave let em JavaScript?`,
      tipo: "button",
      resposta: [
        {
          text: "var numero = 10;",
          correct: false,
        },
        {
          text: "const Pi = 3.14;",
          correct: false,
        },
        {
          text: "let numero = 20;",
          correct: true,
        },
        {
          text: "le numero 6;",
          correct: false,
        },
      ],
    },
    {
      id: 50,
      question: `Qual é a forma correta de declarar uma variável com a palavra-chave const em JavaScript?`,
      tipo: "button",
      resposta: [
        {
            text: "const Pi = 3.14;",
            correct: true,
          },
        {
          text: "var numero = 10;",
          correct: false,
        },
        {
          text: "let numero = 20;",
          correct: false,
        },
        {
          text: "le numero 6;",
          correct: false,
        },
      ],
    },
    
    {
      id: 6,
      question: "",
      tipo: "img",
      url: "./js2.png",
      resposta: [
        {
          text: "",
          correct: true,
        },
      ],
    },
    {
      id: 70,
      question: `Quais foram os tipos de operadores que estudamos no texto anterior?`,
      tipo: "button",
      resposta: [
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
        {
            text: "Aritmético, Atribuição, Comparação e Lógico",
            correct: true,
        },
      ],
    },
    {
      id: 8,
      question: `Utiliza o operador aritmético * para multiplicar dois inteiros e resultar em 120?`,
      tipo: "operador",
      resposta: [
        {
          text: 120,
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
        url: "./js3.png",
        resposta: [
          {
            text: "",
            correct: true,
          },
        ],
      },
      {
        id: 10,
        question: `Qual trecho de código está corretamente usando o console.log?`,
        tipo: "button",
        resposta: [
          {
            text: `console.log (“ Sim “);`,
            correct: true,
          },
          {
            text: `consol.log (“ Sim “);`,
            correct: false,
          },
          {
            text: `consle.log (“ Sim “);`,
            correct: false,
          },
          {
            text: `cosole.log (“ Sim “);`,
            correct: false,
          },
        ],
      },
      {
        id: 12,
        question: "",
        tipo: "img",
        url: "./js4.png",
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
            text: `while`,
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
        question: ` Complete a condição if para testar dois valores e saber se 10 é maior que 8. Se a condição for verdadeira imprima o texto... (“10 é maior que 8 “);`,
        tipo: "if",
        resposta: [
          {
            text1: `if`,
            text2: `log`,
            p1: `(10>8) {`,
            p4: `console.`,
            p2: `(“10 é maior que 8 “);`,
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
                text: `else`,
                correct: true,
            },
            {
                text: `do/while`,
                correct: false,
            },
            {
                text: `if else`,
                correct: false,
            },
            {
                text: `if`,
                correct: false,
            }
        ],
      },
      {
        id: 17755,
        question: `Complete a condição if-else para testar dois valores e saber se 18 é menor que 20. Se a condição for verdadeira imprima o texto... (“18 é menor que 20 “);`,
        tipo: "ifelse",
        resposta: [
          {
            text1: `if`,
            text2: `log`,
            text3: `log`,
            p1: `(8>10) {`,
            p2: `(“10 é maior que 8 “);`,
            p3: `} else {`,
            p4: `(“8 é menor que 10”);`,
            p5: `}`,
            p6: `console.`,
            correct: true,
          },
        ],
      },
      {
        id: 1002,
        question: "",
        tipo: "img",
        url: "./js5.png",
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
            text: "if",
            correct: false,
          },
          {
            text: "console.log",
            correct: false,
          },
          {
            text: "while",
            correct: true,
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
                text: "for",
                correct: true,
            },
            {
                text: "while",
                correct: false,
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
        question: `Utiliza o ciclo de repetição for, para imprimir “sim” 12 vezes.`,
        tipo: "if",
        resposta: [
          {
            text1: `for`,
            text2: `log`,
            p1: `(let i = 1 ; i <=12; i++) {`,
            p2: `("Sim");`,
            p3: `}`,
            p4: `console.`,
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
        url: "./js6.png",
        resposta: [
          {
            text: "",
            correct: true,
          },
        ],
      },
      {
        id: 10103,
        question:`Qual deles esta declarado corretamente usando array de 1 dimensão?`,
        tipo: "button",
        resposta: [
          {
            text: `const [] A;`,
            correct: false,
          },
          {
            text: `B = [2,4];`,
            correct: false,
          },
          {
            text: `C = [2,4,6];`,
            correct: false,
          },
          {
            text: `const A = [6];`,
            correct: true,
          }
        ],
      },
      {
        id: 4879420,
        question: `Declare um Array com a palavra-chave const com o nome Prova de tamanho 1 e com o valor 12.`,
        tipo: "input",
        resposta: [
          {
            text: `constProva=[12];`,
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
            text: `const [] A;`,
            correct: false,
          },
          {
            text: `const B = [2,4];`,
            correct: true,
          },
          {
            text: `const C = [2,4,6];`,
            correct: false,
          },
          {
            text: `const A = [6];`,
            correct: false,
          }
        ],
      },
      {
        id: 4879420,
        question: `Declare um Array com a palavra-chave const com o nome Prova de tamanho 2 e com o valor 2 e 4.`,
        tipo: "input",
        resposta: [
          {
            text: `constProva=[2,4];`,
            correct: true,
          },
        ],
      },
      {
        id: 1771013,
        question:`Qual deles esta declarado corretamente usando array de 3 dimensões?`,
        tipo: "button",
        resposta: [
          {
            text: `const [] A;`,
            correct: false,
          },
          {
            text: `const B = [2,4];`,
            correct: false,
          },
          {
            text: `const C = [2,4,6];`,
            correct: true,
          },
          {
            text: `const A = [6];`,
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