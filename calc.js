const soma = (x,y) => x+y
const sub = (x,y) => x-y
const multi = (x,y) => x*y
const div = (x,y) => x/y

const Calcula = (a,b, operador=soma) =>{
    console.log(operador(a,b));
}

Calcula(2,3)
Calcula(4,3,sub)
Calcula(5,3,multi)
Calcula(10,2, div)
