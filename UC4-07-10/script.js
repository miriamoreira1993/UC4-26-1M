"use strict";
// Em typescript as variáveis e constantes são TIPADAS, ou seja, informamos de que tipo são:
// let Meunome: string ="Miriam"
// Meunome = "Míriam"
// let minhaIdade: number = 32
// let desligado: boolean = true
// function somar(a: number , b: number) : number {
//     return a + b
// }
// console.log(somar(2,2))
// let compra : string []=["pão", "leite", "uva"]
//crie um array que contem X notas
// depois, calcule a média destas notas e mostre no terminal 
// lembrando a média se calcula somando todos os numeros e dividindo o resultado pela quantidade de numeros
// dica: pra somar um array use um for
// // somente soma:
// const notas: number[] = [10,5,9]
// let somar : number = 0
// for (let i: number = 0; i < notas.length; i++){
// somar += notas[i];
// }
// // media das notas
// const media: number = somar / notas.length;
// console.log("Média:", media);
//Objetos em TYPE
//atributos com '?' SÃO OPCIONAIS, posso u não colocar valores para eles
// let pessoa : {nome: string, idade: number, peso?: number} = {
//     nome:"Miriam",
//     idade: 32
// }
// console.log(pessoa.nome)
// pessoa.peso = 77
// Crie 2 objetos representando pessoas (coloque nomes diferentes para os objetos)
//Estes objetos devem ter: nome, cidade, emprego, sendo que emprego deve ser um atributo opcional
//Depois,faça um if que mostre duas frases diferentes 
//Se a pessoa tem um emprego (bulean =true ou false) mostre, fulano da cidade tal esta trabalhando, se não fulano da cidade tal está desempregado.
let pessoa1 = {
    nome: "Miriam",
    cidade: "Sao Leopoldo",
    emprego: true
};
let pessoa2 = {
    nome: "Bebeto",
    cidade: "Sao Leopoldo",
};
console.log(pessoa2.emprego);
if (pessoa1.emprego) {
    console.log(`${pessoa1.nome} da cidade de ${pessoa1.cidade} está trabalhando`);
}
else {
    console.log(`${pessoa2.nome} da cidade ${pessoa2.cidade} esta desempregada`);
}
