/* EXERCICIO 2 - Array Filter */

/*
o array abaixo armazena clientes, seus nomes e situação para
solicitação de emprestimo estão representados nas propriedades
*/
const clientes = [
  {
    nome: "Felipe",
    apto: true,
  },
  {
    nome: "Eliane",
    apto: false,
  },
  {
    nome: "Jane",
    apto: false,
  },
  {
    nome: "Luiz",
    apto: true,
  },
];

// Filtre apenas os clientes aptos para solicitar emprestimo
const apto = cliente => cliente.apto === true
console.log(clientes.filter(apto))

/*
Para aqueles não aptos, adicione uma propriedade verificacao
para o time de dados verificar o por quê desses clientes não
estarem aptos para solicitar emprestimo
*/

// ex.: { nome: 'Eliane', apto: false, verificacao: true }
const reject = cliente => cliente.apto === false

const verificaClientes = clientes.map((item) => {
  if(item.apto == false)
  item["verificacao"] = true
  return item
})

console.log(verificaClientes.filter(reject));