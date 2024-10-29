const ContadorA = require("./InstanciaUnica")
const ContadorB = require("./InstanciaUnica")
const ContadorC = require("./InstanciaNova")
const ContadorD = require("./InstanciaNova")

ContadorA.inc()
ContadorA.inc()
console.log(ContadorA.valor,ContadorB.valor);

ContadorC.inc()
ContadorC.inc()

console.log(ContadorC.valor,ContadorD.valor);