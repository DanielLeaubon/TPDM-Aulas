function celular(marca, modelo, ram, armazenamento, preco) {
    let _marca = marca;
    let _modelo= modelo;
    let _ram = ram;
    let _armazenamento = armazenamento
    let _preço= preco;
    
   this.exibepreço = () =>{
    console.log(`Preço do produto : ${_preço}`);
   }

this.salvaTudo = () =>{
    console.log(`Marca = ${_marca}`);
    console.log(`Modelo = ${_modelo}`);
    console.log(`Ram = ${_ram}Gb`);
    console.log(`Armazenamento = ${_armazenamento}Gb`);
    console.log(`Preço = R$${_preço}`);

}
}
// Criando uma nova instância de Pessoa
const Celular1 = new celular('Apple', 'Iphone 13', 16, 256, 3000);
const Celular12 = new celular('Samsung','Galaxy S23', 16, 512, 2000)

Celular1.exibepreço()
Celular1.salvaTudo()
Celular12.exibepreço()
Celular12.salvaTudo()