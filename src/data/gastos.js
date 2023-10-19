export const gastos = [
  {
    grupo: "Custos Fixos",
    metodo: "credito",
    despesas: [
      {
        nome: "Faculdade",
        valor: 350.5,
        categoria: "Estudo",
        colorCategoria: '#000'
      },
      {
        nome: "Luz",
        valor: 146.1,
        categoria: "Conta",
        colorCategoria: "#1da1f2"
      },
      {
        nome: "Água",
        valor: 34,
        categoria: "Conta",
        colorCategoria: "#1da1f2"
      },
      {
        nome: "Internet",
        valor: 99,
        categoria: "Conta",
        colorCategoria: "#ff0000"
      },
      {
        nome: "Vivo",
        valor: 100,
        categoria: "Conta",
        colorCategoria: "#0c5a90"
      },
    ],
  },
  {
    grupo: "Cartão da Mãe",
    metodo: "debito",
    despesas: [
      {
        nome: "Alura",
        valor: 550,
        categoria: "Estudo",
        colorCategoria: "#0C5A90"
      },
      {
        nome: "Bicicleta",
        valor: 546,
        categoria: "Mobilidade",
        colorCategoria: "#0C5A90"
      },
      {
        nome: "Câmbio",
        valor: 34,
        categoria: "Mobilidade",
        colorCategoria: "#ff0000"
      },
      {
        nome: "Grelha",
        valor: 99,
        categoria: "Lazer",
        colorCategoria: "#0C5A90"
      },
      {
        nome: "Óculos",
        valor: 66,
        categoria: "Saúde",
        colorCategoria: "#000"
      },
    ],
  },
];


console.log(gastos.map((e)=>{e.despesas.map((e)=>{e.categoria})}))

