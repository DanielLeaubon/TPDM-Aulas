const produto = new Object()

produto.nome = 'bicicleta'
produto["quadro de bicicleta"] = "carbono"
let aparencia = "cor"
produto[aparencia] = "amarela"
produto.preço = 2500
console.log("1-",produto);
let auxiliar = produto ["quadro de bicicleta"]
delete produto["quadro de bicicleta"]
console.log("2-",produto);
produto.quadro = auxiliar
console.log("3-",produto);