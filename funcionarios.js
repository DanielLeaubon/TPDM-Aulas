const urlLocal = require('./funcionarios.json');

const brasileiros = f => f.pais === 'Brasil';
const mulheres = f => f.genero === 'F';
const menorSalario = (func, funcAtual) => func.salario < funcAtual.salario ? func : funcAtual;
const alemaes = f => f.pais === 'Alemanha';
const primeiraLetraA = f => f.nome[0] === 'A';
const nomes = f => f.nome
// Encontrar a funcionária brasileira com o menor salário
const resultado = urlLocal.filter(brasileiros).filter(mulheres).reduce(menorSalario);
console.log('Funcionária Brasileira com Menor Salário:', resultado);

// Extrair nomes dos funcionários alemães
const nomesAlemaes = urlLocal.filter(alemaes).filter(primeiraLetraA).map(nomes);
console.log('Nomes dos Funcionários Alemães:', nomesAlemaes);

// Calcular a soma dos salários dos funcionários alemães
const somaSalariosAlemaes = urlLocal.filter(alemaes).reduce((total, func) => total + func.salario, 0);
console.log(`Soma dos Salários dos Funcionários Alemães: R$${somaSalariosAlemaes}`);