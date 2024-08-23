//1* Notação literal
const obj1 = {

}
console.log(obj1);
obj1.atrb1 = 10
console.log(obj1);


//2* Utilizando newOBject
/*console.log(typeof new Object(), Object);
const obj2 = new Object()
console.log(obj2, new Object());*/

//3* A partir de uma função construtora

function produto(nome, marca, custo, taxa) {
    this.nome = nome
    this.marca = marca
    this.Getpreço =()=>{
        return custo * (1.3+taxa)
    }
}
const p1 = new produto('mouse', 'logitech', 100, 0.15)
console.log(p1.Getpreço());

//4* A partir da função factory
function criarfuncionario(nome, salario, faltas) {
    return {
        nome , salario, faltas,
        getSalarioLiquido(){
            return(salario/30) * (30-faltas)
        }
    }
    
}
const funcionario1 = criarfuncionario('Maria', 10000, 1)
console.log(funcionario1.getSalarioLiquido());



