// primeiro crie o packge.json (npm init -y)
// Depois, crie o script do npm star
//"start": "npx tsc index.ts && node index.js"
//Ai, instale a biblioteca com o readline-sync e tbm os tipos
// npm i readline-sync
// npm i @types/readline-sync
//Verifique se os dois aparecem no packge.json. Se não, não foram instalados
// Exercício 1:
//Crie uma função chamada 'somar ' que pede dois numeros. Estes numeros devem ser passados pelo usuário através do readline-sync.
// Moste a soma destes dois numeros e não esqueça de tipar o retorno corretamente.
import * as rl from "readline-sync";
// function somar(): number {
//     let numero1: number = Number(rl.questionInt("Digite o primeiro numero: "));
//     let numero2: number = Number(rl.questionInt("Digite o segundo numero: "));
//     return numero1 + numero2;
// }
// console.log("A soma é: " + somar());
// Exercicio 2:
// Seu zé (sim, ele de novo) também está no ramo do jogo do bicho no mercadinho dele.
//  Ele precisa agora de um sistema que identifique os numeros os animais a parir dos numeros que os clientes escolhem. Para isso, você deve:
// - Solicitar o nome do cliente;
//-Solicitar um numero de 1 a 20;
//-Criar uma função chamada 'descobrirBicho' que recebe este numero
//-Utilizando if, else if, e else, essa função identifica que animal a pessoa escolheu 
//-A função retorna o nome do cliente, o número escolhido e o nome do animal escolhido, tudo numa frase só!
// Animais:
// Avestruz: 01 a 04 | Aguia: 05 a 08| Burro: 09 a 12| Borboleta: 13 a 16 | Cachorro: 17 a 20
let nome = rl.question("Digite o nome do cliente: ");
let numero = rl.questionInt("Digite um numero de 1 a 20:");
function descobrirBicho(nome, numero) {
    let frase = "";
    if (numero <= 0 || numero > 20) {
        frase = `${nome} escolheu o número ${numero} que representa o Avestruz`;
    }
    else if (numero <= 8) {
        frase = `${nome} escolheu o número ${numero} que representa o Aguia`;
    }
    else if (numero <= 12) {
        frase = `${nome} escolheu o número ${numero} que representa o Burro`;
    }
    else if (numero <= 16) {
        frase = `${nome} escolheu o número ${numero} que representa o Borboleta`;
    }
    else {
        frase = `${nome} escolheu o número ${numero} que representa o Cachorro`;
    }
    return frase;
}
const frase = descobrirBicho(nome, numero);
console.log(frase);
