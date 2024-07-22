function bomdia(nome) {
    console.log(`Bom dia ${nome}, seja bem-vindo`);
}
bomdia('orpheu')

const mes = (meszin) => {
switch (meszin) {
        case 1:
            console.log('Janeiro');  
        break;
        case 2:
            console.log('Fevereiro');  
        break;
        case 3:
            console.log('Março'); 
        break;
        case 4:
            console.log('Abril'); 
        break;
        case 5:
            console.log('Maio'); 
        break;
        case 6:
            console.log('Junho'); 
        break;
        case 7:
            console.log('Julho'); 
        break;
        case 8:
            console.log('Agosto'); 
        break;
        case 9:
            console.log('Setembro'); 
        break;
        case 10:
            console.log('Outubro'); 
        break;
        case 11:
            console.log('Novembro'); 
        break;
        case 12:
            console.log('Dezembro'); 
        break;

    default: console.log('Isso não é um número válido');
        break;
}
}
mes(5)

const VerSeÉNum =(x, y) =>{
    if(x == NaN || y == NaN){
        console.log('Um dos valores não é um número');
    }
    else if(x > y){
        console.log("Primeiro número maior que o segundo");
    }
    else if(y > x){
        console.log("Segudo número maior que o primeiro");
    }
    else if(x == y){
        console.log("Números Iguais");
    }


}
VerSeÉNum(1, 3)

const Saldomensal = (salario, qnthorasextra, faltas) =>{

    const valorhoras = salario / 176
    let horasfaltinhas = faltas * 8 *valorhoras
    let horasextras = parseFloat(valorhoras *1.5 *qnthorasextra)
    let salarioliq = salario + horasextras - horasfaltinhas
    let salariocortado = salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    let salarioliqcortado = salarioliq.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    let horasextrascortado = horasextras.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    let horasfaltinhascortado = horasfaltinhas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });


    console.log(`Seu salário é: ${salariocortado}\n Seu salário líquido é: ${salarioliqcortado}\n Seu total em horas extras é: ${horasextrascortado} \n Total descontado em faltas: ${horasfaltinhascortado}`);

}
Saldomensal(1800, 10, 2)

const random = ["dadad", 'fiufiu', 8, 9 , 100]
function valoresAleatorios(){
    console.log(random[0], random[random.length-1]);
}
valoresAleatorios(random)
