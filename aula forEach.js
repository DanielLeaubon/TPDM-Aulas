const montadora = ['toyota', 'honda', 'VW']

for (i in montadora) {
    console.log(`Montadora:${montadora[i]}`);
}

function imprimir(nome, indice) {
    console.log(`${indice+1} ${nome}`);
}
montadora.forEach(function(n,i){
    console.log(`${i}${n}`);})


    montadora.forEach(imprimir)


const notas = [10, 8, 7, 5, 4, 2, 1, 9.9]
console.log(notas.filter((x) => x >= 7))

function notaBoa(x) {
    x > 7
}

const notaRuim = (y) => x< 7
console.log(notas.filter(notaBoa));
const maioresNotas = notas.filter(notaBoa)
console.log(maioresNotas);
