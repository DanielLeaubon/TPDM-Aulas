const urlLocal = require('./funcionarios.json')

const brasileiros = f => f.pais === 'Brasil'

const mulheres = f => f.genero === 'F'

const menorSalario = (func, funcAtual) =>{
    return func.salario < funcAtual.salario ? func : funcAtual
}
const alemaes = f => f.pais === 'Alemanha'

const primeiraLetraA = f => f.nome[0] === 'A' 

const resultado = urlLocal.filter(brasileiros).filter(mulheres).reduce(menorSalario)

const resultado2 = urlLocal.filter(alemaes).map()

console.log(resultado);
