const produtos = [
    { nome: "notebook", preco: 6000.00, eletronico: true },
    { nome: "computador", preco: 4500.00, eletronico: true },
    { nome: "teclado", preco: 100.00, eletronico: false },
    { nome: "mouser", preco: 75.00, eletronico: true },
    { nome: "Cadeira Gamer", preco: 1775.00, eletronico: false }
]

//1) exiba somente os eletrônicos

console.log("Exibindo somente os eletrônicos");
const eletronicos = p => p.eletronico
console.log(produtos.filter(eletronicos)) 


//2) exiba os com valor acima de R$ 1000,00

const maisQueMil = p => p.preco > 1000
const nomeEpreco = e => ({nome: e.nome, preco: e.preco})
console.log("\n Produtos Acima de R$1000");
console.log(produtos.filter(maisQueMil).map(nomeEpreco))


//3) exiba comissão com 3% para valores acima de 1500 e 6% para menores

console.log("Maiores que 1500, preço + 3%. Menores que 1500, preço + 6%");
const Calcularcomissao = p => p.preco >= 1500 ? p.preco * 1.03 : p.preco * 1.06
console.log("R$",produtos.map(Calcularcomissao).join("\n\nR$ "));