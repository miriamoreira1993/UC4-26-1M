// CD entra na pasta 
// NODE executa
// ctrl + ; COMENTA


// // // FOR OF (retorna o item da lista)
// const frutas = ["maçã", "banana", "laranja"]
// //opção 1
// for (let i = 0; i< frutas.length; i++){
//     console.log(frutas[i])
// }
// // opção 2
// for (const fruta of frutas){
//      console.log(fruta)
// } 




// // console.log("=======================================")
// // // FOR IN (retorna o índice, quando eu quero numerar)


// for (const fruta in frutas){
//      console.log(`${fruta} = ${frutas[fruta]}`)
// }

// // vizualização desta forma:
// 0 = maçã
// 1 = banana
// 2 = laranja

// console.log("=======================================")
// // FOR EACH


// console.log("=======================================")
// // FUNÇÕES \\

// console.log(saudacao("Miriam"))
// function saudacao(nome) {
//   return `Olá ${nome}, seja bem vindo!`;
// }


// // soma
// function soma (a , b){
//     return (a + b)
// }
// soma(10,5)

// // calcular a media
// let media = soma (10,5) / 2
// console.log(media)


// console.log("=======================================")
// // PROCEDIMENTO(NAO TEM RETORNO) QUE ALTERA O ESTADO DE UMA PROPRIEDADE
// // FUNÇÃO(TEM RETORNO) TIPO VOID ====
// let nome = " Miriam"
// function alteraNome(nomeNovo){
//  nome = nomeNovo
// }

// console.log(nome)

// alteraNome ("Maria")

// console.log(nome)

//ARROW FUNCTION 
// const soma = (a,b) => a + b
// console.log(soma(10,5))

// const pratos = ["de plástico", "de vidro", "de cerâmica", "de ferro"]

// pratos.forEach((item)) => console.log(item))


// REVISÃO READLINE-SYNC
// const rl = require("readline-sync")

// let nome = rl.question("Digite o seu nome:")
// console.log (`Seu nome é ${nome}`)

console.log("=======================================")
//  Variáveis, operadores e entrada/saída======================

//1
 const rl = require("readline-sync")
//  let nome = rl.question("Digite seu nome:")
//  let idade = rl.questionInt("Digite sua idade:")
//  console.log(`Seu nome é ${nome} e sua idade é ${idade}`)

//2
// let a = rl.questionInt("Digite um numero: ") 
// let b = rl.questionInt ("Digite outro numero:")
// console.log("-----")
// let soma = a + b
// console.log(`A soma dos numeros é ${soma}`)
// let subtracao = a - b
// console.log(`A subtracao dos numeros é ${subtracao}`)
// let multiplicacao = a * b
// console.log(`A multiplicação dos numeros é ${multiplicacao}`)
// let divisao = a / b
// console.log(`A divisao dos numeros é ${divisao}`)



//3
// let nota = rl.questionInt ("Digite a nota: ")
// let resultado = nota >= 7 ? 'APROVADO' : 'REPROVADO'
// console.log(resultado);

//4




// Estruturas condicionais=================================

//5
// let dia = rl.questionInt("Digite o dia da semana: ")

// switch(dia) {
//   case 1:
//     console.log("Domingo");
//     break;
//   case 2:
//     console.log("Segunda");
//     break;
//   case 3:
//     console.log("Terça");
//     break;
//   case 4:
//     console.log("Quarta");
//     break;
//   case 5:
//     console.log("Quinta");
//     break;
//   case 6:
//     console.log("Sexta");
//     break;
//   case 7:
//     console.log("Sábado") 
//   default:
//     console.log("Outro dia");
// }

//6
// let item = rl.questionInt("Escolha um item do cardapio: \n1-Pizza \n2-Pastel \n3-HotDog")
// console.log("")

// switch(item){
//    case 1:
//     console.log("1-Pizza R$ 10,00");
//     break; 
//     case 2:
//     console.log("2-Pastel R$ 8,00");
//     break; 
//     case 3:
//     console.log("3-HotDog R$ 12,00");
//     break;
//     default:
//     console.log("Opcao invalida"); 
// }

//7
// const numeros = [1,2,3,4,5]
// let soma = 0

// for (const numero of numeros){
//     soma = soma + numero
// }
// console.log(`A soma dos numeros ficou ${soma}`)


//8
// let numero = 1

// while (numero <= 10) {
//   console.log(numero);
//   numero ++
// }


//9
// const frutas =["uva", "pera", "mirtilo", "morango"];
// for (const fruta of frutas) console.log(fruta);

//10
// const cores =["azul", "rosa", "preto", "verde"];
// cores.forEach((cor) => console.log(cor));

//11
// const pessoa = {nome: "Miriam", idade: 25};
// for (const chave in pessoa){
//     console.log(`${chave}: ${pessoa[chave]}`);
// }

//12
// let par = 0;

// while ( par <=20) {
//   console.log(par);
//   par += 2;
// }

// exemplo com o for

// for ( let i = 0; i <=20; i++){
//    if (i % 2 == 0) console.log(i)
// }



//13
// function maiorNumero(n1, n2){
//     if (n1 > n2){
//         return n1
//     } else if (n2 > n1) {
//         return n2
//     } else {
//         return 'iguais'
//     }
// }

// console.log (maiorNumero(56874, 42225))


//14
const somatorio = []




//15
// function saudacao (){
//     let nome = rl.question("Digite seu nome: ")
//     let idade = rl.questionInt("Digite sua idade:")
//     console.log(`Seu nome é ${nome} e sua idade é ${idade} Seja bem vinda!`)
// }
// saudacao()



