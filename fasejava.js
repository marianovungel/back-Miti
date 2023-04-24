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
      question: "Qual é a forma certa de declarar uma variável ?",
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
      question: "Qual o tipo de variável interira serve para armazenar 64 bits?",
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
      url: "./fasejava2.png",
      resposta: [
        {
          text: "",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "Quais os tipos de operadores Estudamos?",
      tipo: "button",
      resposta: [
        {
          text: "Lógica, Comparação, Aritimético e  Atribuição",
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
      question: "Consideremos que X = 10 e Y = 5, se em seguida fazermos X += Y, quanto valerá o X?",
      tipo: "button",
      resposta: [
        {
          text: "X = 25;",
          correct: false,
        },
        {
          text: "X = 15;",
          correct: true,
        },
        {
          text: "X = 6;",
          correct: false,
        },
        {
          text: "X = 50;",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Qual resultado será de X será obtida Pelo seguinte código: X = 8 % 3;",
      tipo: "input",
      resposta: [
        {
          text: "2",
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
]

module.exports = {
    userget: async()=>{
        return { error: false, data:data};
    }
}