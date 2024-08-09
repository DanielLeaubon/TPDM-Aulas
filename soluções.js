function cumprimentar(nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(", ").concat(" Seja bem vindo!")
    
}
const nomemes = (mes) =>{
    const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
    return meses(--mes)
}
console.log(nomemes(1));

const maiorOuMenor = (n1, n2) =>{
    //if(n1 === undefined || n2 == undefined) return "Valores não desfinidos"
    if(n1 === NaN || n2 === NaN) return "valor não numérico"
    if(n1 > n2){
        return `O valor ${n1} é maior que o valor ${n2}`
    }
    else if (n1 < n2){
        return `O valor de ${n1} é manor que o valor de ${n2}`
    }
    else {
        return `O valor de ${n1} é manor que o valor de ${n2}`
    }
}
console.log(maiorOuMenor(1,3));
