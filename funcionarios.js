const urlLocal = require('./funcionarios.json')

const brasileiros = f => f.pais === 'Brasil'

const mulheres = f => f.genero === 'F'

const menorSalario = (func, funcAtual) =>{
    return func.salario < funcAtual.salario ? func : funcAtual
}

const resultado = urlLocal.filter(brasileiros).filter(mulheres).reduce(menorSalario)

console.log(resultado);