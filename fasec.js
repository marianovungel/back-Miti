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
      question: "Declare uma variável do tipo realC, com o nome Aluno e com valor 100.20",
      tipo: "input",
      resposta: [
        {
          text: "floatAluno=100.20;",
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
      url: "./fase2.png",
      resposta: [
        {
          text: "",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "Quais os tipos de operadores o artigo anterior realçou?",
      tipo: "button",
      resposta: [
        {
          text: "Lógica, Comparação e  Atribuição",
          correct: true,
        },
        {
          text: "Lógica, Geométrico e  Atribuição",
          correct: false,
        },
        {
          text: "Analítico, Geométrico e  Atribuição",
          correct: false,
        },
        {
          text: "Analítico, Geométrico e  Aleatório",
          correct: false,
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
      question: "Compare corretamente os seguintes valores 20 e 21 seguindo o formato X comparador Y",
      tipo: "input",
      resposta: [
        {
          text: "20<21",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "",
      tipo: "img",
      url: "./fase2.png",
      resposta: [
        {
          text: "",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "Qual a estrutura usar quando se pretende testar uma condição e executar um código caso seja verdade e outro se for mentira?",
      tipo: "button",
      resposta: [
        {
          text: "&&",
          correct: false,
        },
        {
          text: "if",
          correct: false,
        },
        {
          text: "if-else",
          correct: true,
        },
        {
          text: "and",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Quais os tipos de estruturas de repetição estudamos ?",
      tipo: "button",
      resposta: [
        {
          text: "for while e do-while",
          correct: true,
        },
        {
          text: "if e for",
          correct: false,
        },
        {
          text: "if-else",
          correct: false,
        },
        {
          text: "while and",
          correct: false,
        },
      ],
    },
    {
      id: 18,
      question: "",
      tipo: "img",
      url: "./fase6.png",
      resposta: [
        {
          text: "",
          correct: true,
        },
      ],
    },
    {
      id: 21,
      question: "Declare um vector com o nome Aluno do tipo inteiro e com o valor 1",
      tipo: "input",
      resposta: [
        {
          text: "intAluno=1;",
          correct: true,
        },
      ],
    },
]

module.exports = {
    userget: async()=>{
        return { error: false, data:data};
    }
}