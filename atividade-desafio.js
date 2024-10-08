const numeros = [1, 2, 3, 4, 5, 6, 7]
const numerosDuplicados = numeros.map(number => number * 2)
console.log(numerosDuplicados);

const numeros2 = [1,2,3,4,5,6,7,8,9]
const dobro = e => e*2
const numerosDuplicados2 = numeros2.map(number => (number * 2).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
console.log(numerosDuplicados2);


let compras = [
    '{"nome": "notebook", "preço": 6000.00}',
    '{"nome": "computador", "preço": 4500.00}',
    '{"nome": "teclado", "preço": 100.00}',
    '{"nome": "mouse", "preço": 75.00}',
]
const paraObjeto = json =>JSON.parse(json)
const precoApenas = produto => produto.preço
const dinheiros = e => `R$${parseFloat(e).toFixed(2).replace('.',',')}`
//const resultado2 = compras.map(paraObjeto).map(precoApenas).map(dobro).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const resultado2 = compras.map(paraObjeto).map(precoApenas).map(dobro).map(dinheiros)
console.log(resultado2);
