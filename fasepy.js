const data = [
    {
      id: 1,
      question: "O Python é uma linguagem de tipagem ?",
      tipo: "button",
      resposta: [
        {
          text: "Forte",
          correct: false
        },
        {
          text: "Aleatória",
          correct: false
        },
        {
          text: "Dinâmica",
          correct: true,
        },
        {
          text: "Inversa",
          correct: false,
        },
      ],
    },
    {
        id: 484,
        question: "Declare uma variável numérica com nome Aluno e valor 6",
        tipo: "input",
        resposta: [
          {
            text: "Aluno=6;",
            correct: true,
          },
        ],
      },
      {
        id: 540,
        question: "O Python é uma linguagem de tipagem ?",
        tipo: "button",
        resposta: [
          {
            text: `Aluno = 10`,
            correct: false
          },
          {
            text: `Aluno = [2, 4, 6]`,
            correct: true
          },
          {
            text: `Lisa = Aluno = 6`,
            correct: false,
          },
          {
            text: `Aluno = lista = 6`,
            correct: false,
          },
        ],
      },
      {
        id: 4,
        question: `Declare uma variável do tipo boolean com nome Professor e o valor True`,
        tipo: "input",
        resposta: [
          {
            text: "Professor=True;",
            correct: true,
          },
        ],
      },
      {
        id: 181,
        question: "",
        tipo: "img",
        url: "./py2.png",
        resposta: [
          {
            text: "",
            correct: true,
          },
        ],
      },
      {
        id: 5004,
        question: `Qual deles é o operador aritmético do resto da divisão?`,
        tipo: "button",
        resposta: [
          {
            text: `%`,
            correct: true
          },
          {
            text: `//`,
            correct: true
          },
          {
            text: `*`,
            correct: false,
          },
          {
            text: `/`,
            correct: false,
          },
        ],
      },
      {
        id: 11,
        question: `Utiliza o operador aritmético * para multiplicar dois números e resultar em 40?`,
        tipo: "operador",
        resposta: [
          {
            text: 40,
            op: "*",
            correct: true,
          },
        ],
      },
      {
        id: 54,
        question: `Qual deles é o operador aritmético de subtração?`,
        tipo: "button",
        resposta: [
          {
            text: `%`,
            correct: false
          },
          {
            text: `*`,
            correct: false
          },
          {
            text: `/`,
            correct: false,
          },
          {
            text: `-`,
            correct: true,
          },
        ],
      },
      {
        id: 1121,
        question: `Utiliza o operador aritmético + para somar dois números e resultar em 80?`,
        tipo: "operador",
        resposta: [
          {
            text: 80,
            op: "+",
            correct: true,
          },
        ],
      },
      {
        id: 1255,
        question: "",
        tipo: "img",
        url: "./py3.png",
        resposta: [
          {
            text: "",
            correct: true,
          },
        ],
      },
      {
        id: 5444,
        question: `Qual trecho de código está corretamente usando o print?`,
        tipo: "button",
        resposta: [
          {
            text: `print("Olá Mundo")`,
            correct: true
          },
          {
            text: `prin ("Olá Mundo")`,
            correct: false
          },
          {
            text: `prit ("")`,
            correct: false,
          },
          {
            text: `prin“Olá Mundo”`,
            correct: false,
          },
        ],
      },
      {
        id: 17002,
        question: "",
        tipo: "img",
        url: "./py4.png",
        resposta: [
          {
            text: "",
            correct: true,
          },
        ],
      },
      {
        id: 76511865,
        question: `Qual comando serve para executar um trecho de código se a condição for verdadeira?`,
        tipo: "button",
        resposta: [
          {
            text: `print`,
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
        id: 0770,
        question: `Complete a condição if para testar dois valores e saber se 10 é maior que 8. Se a condição for verdadeira imprima o texto... ("10 é maior que 8");`,
        tipo: "if",
        resposta: [
          {
            text1: `if`,
            text2: `print`,
            p1: `(10>8) :`,
            p2: `("10 é maior que 8");`,
            p3: ``,
            correct: true,
          },
        ],
      },
      {
        id: 76511865,
        question: `Qual comando serve para executar um trecho de código com várias condições(expressões) diferentes?`,
        tipo: "button",
        resposta: [
          {
            text: `if else`,
            correct: false,
          },
          {
            text: `elif–else`,
            correct: false,
          },
          {
            text: `if`,
            correct: false,
          },
          {
            text: `if-elif-else`,
            correct: true,
          },
        ],
      },
      {
        id: 10002,
        question: "",
        tipo: "img",
        url: "./py5.png",
        resposta: [
          {
            text: "",
            correct: true,
          },
        ],
      },
      {
        id: 114541,
        question: `Qual deles é uma instrução de repetição?`,
        tipo: "button",
        resposta: [
          {
            text: "if",
            correct: false,
          },
          {
            text: "print",
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
        id: 114541,
        question: `Qual deles não é uma instrução de repetição?`,
        tipo: "button",
        resposta: [
          {
            text: "while",
            correct: false,
          },
          {
            text: "elif",
            correct: true,
          },
          {
            text: "do-while",
            correct: false,
          },
          {
            text: "for",
            correct: false,
          },
        ],
      },
      {
        id: 070,
        question: `Utiliza o ciclo de repetição for, para imprimir os números de 1 a 5`,
        tipo: "if",
        resposta: [
          {
            text1: `for`,
            text2: `print`,
            p1: `X in range(1, 6):`,
            p2: `(X);`,
            p3: ``,
            correct: true,
          },
        ],
      },
      {
        id: 114541,
        question: `Qual deles não é uma instrução de repetição nativa em Python?`,
        tipo: "button",
        resposta: [
          {
            text: "do/while",
            correct: true,
          },
          {
            text: "elif",
            correct: false,
          },
          {
            text: "if",
            correct: false,
          },
          {
            text: "for",
            correct: false,
          },
        ],
      },
      {
        id: 112,
        question: "",
        tipo: "img",
        url: "./py6.png",
        resposta: [
          {
            text: "",
            correct: true,
          },
        ],
      },
      {
        id: 114541,
        question: `Qual deles esta declarado corretamente usando lista de 1 dimensão?`,
        tipo: "button",
        resposta: [
          {
            text: `lista [] A;`,
            correct: false,
          },
          {
            text: `lista B = [2,4];`,
            correct: false,
          },
          {
            text: `lista C = [2,4,6]; `,
            correct: false,
          },
          {
            text: `A = [6];`,
            correct: true,
          },
        ],
      },
      {
        id: 4488,
        question: `Declare uma lista com o nome Aluno de tamanho 1 e com o valor 6.`,
        tipo: "input",
        resposta: [
          {
            text: "Aluno=[6];",
            correct: true,
          },
        ],
      },
      {
        id: 1177,
        question: `Qual deles esta declarado corretamente usando lista de 2 dimensões?`,
        tipo: "button",
        resposta: [
          {
            text: `lista [] A;`,
            correct: false,
          },
          {
            text: `B = [2,4];`,
            correct: true,
          },
          {
            text: `lista C = [2,4,6]; `,
            correct: false,
          },
          {
            text: `A = [6];`,
            correct: false,
          },
        ],
      },
      {
        id: 430488,
        question: `Declare uma lista com o nome Aluno de tamanho 2 e com o valor 2 e 4.`,
        tipo: "input",
        resposta: [
          {
            text: "Aluno=[2,4];",
            correct: true,
          },
        ],
      },
      {
        id: 1177,
        question: `Qual deles esta declarado corretamente usando lista de 3 dimensões? `,
        tipo: "button",
        resposta: [
          {
            text: `lista [] A;`,
            correct: false,
          },
          {
            text: `B = [2,4];`,
            correct: false,
          },
          {
            text: `C = [2,4,6];`,
            correct: true,
          },
          {
            text: `A = [6];`,
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