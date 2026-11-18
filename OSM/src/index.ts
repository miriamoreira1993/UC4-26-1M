
//importe tudo da biblioteca 'readline-sync'
//dentro de um objeto, chamado 'readline'
//este objeto terá todos os atributso e metodos da biblioteca
import * as rl from "readline-sync"

import { Arqueiro } from "./Arqueiro";
import { Guardiao } from "./Guardiao";
import { Guerreiro } from "./Guerreiro";
import { Paladino } from "./Paladino";
import { Personagem } from "./Personagem";


let executando: boolean = true


const personagem = new Guerreiro ("Seu Zé", 20, 50, 10, 15)
const personagem1 = new Arqueiro ("Fredo", 10, 30, 20, 40)
const personagem2 = new Guardiao ("Samuel", 15, 20, 30, 40)
const personagem3 = new Personagem ("Diegolas", 15,30,60,80)
const personagem4 = new Paladino ("Herus", 10,30,40,50 )

const per: Personagem[] = [personagem, personagem1, personagem2, personagem3]

const inimigos: Personagem[] = [
    new Personagem("Fiscal de Preços", 10, 40, 10, 5),
    new Personagem("Operador de Ofertas", 15, 60, 15, 8),
    new Personagem("Balrog do Boleto", 50, 100, 25, 10)
];





import readlineSync from "readline-sync";

let heroiEscolhido: Personagem | null = null;

let progresso: number = 0;

while (executando) {

    console.log("\n=== O SENHOR DOS MERCADOS II ===");
    console.log("1 - Ver Sociedade");
    console.log("2 - Escolher herói");
    console.log("3 - Enfrentar inimigo");
    console.log("4 - Ver jornada");
    console.log("0 - Sair");

    const escolha = readlineSync.questionInt("Escolha: ");
    switch (escolha) {

        case 1:
            console.log("\n=== PERSONAGENS ===");

            per.forEach((heroi) => {
                console.log(heroi.nome);
            });
            break;

        case 2:
            console.log("\nEscolha seu herói:");

            per.forEach((heroi, indice) => {
                console.log(`${indice + 1} - ${heroi.nome}`);
            });

            const opcao = readlineSync.questionInt("Número do herói: ");

            if (opcao >= 1 && opcao <= per.length) {
                heroiEscolhido = per[opcao - 1];
                console.log(`${heroiEscolhido.nome} escolhido!`);
            } else {
                console.log("Personagem inexistente!");
            }
            break;

        case 3:


case 3:
    if (heroiEscolhido === null) {
        console.log("Escolha um herói primeiro!");

    } else if (!heroiEscolhido.estaVivo()) {
        console.log("Seu herói está derrotado!");

    } else if (progresso >= 2) {
        console.log("Você já venceu todos os inimigos!");

    } else {

        let inimigo: Personagem;

        if (progresso === 0) {
            inimigo = new Personagem("Fiscal de Preços", 10, 30, 5, 10);
        } else {
            inimigo = new Personagem("Balrog do Boleto", 50, 100, 25, 10);
        }

        console.log(`\n${inimigo.nome} apareceu!`);

        while (heroiEscolhido.estaVivo() && inimigo.estaVivo()) {

            heroiEscolhido.atacar(inimigo);

            if (inimigo.estaVivo()) {
                inimigo.atacar(heroiEscolhido);
            }
        }

        if (!heroiEscolhido.estaVivo()) {
            console.log("Você foi derrotado!");

        } else {
            console.log(`Você venceu ${inimigo.nome}!`);
            progresso++;

            if (progresso === 1) {
                console.log("O Balrog do Boleto foi desbloqueado!");
            } else {
                console.log("Você derrotou o Balrog do Boleto!!");
                console.log("A Sociedade salvou a Terra dos Mercados!");
                console.log("VOCÊ CHEGOU AO SERVIDOR DA PERDIÇÃO!");
                break;

            }
            
        }   

           }   

        case 4:
            if (heroiEscolhido === null) {
                console.log("Nenhum herói escolhido ainda.");
            } else {
                console.log(`Herói: ${heroiEscolhido.nome}`);
                console.log(`Está vivo: ${heroiEscolhido.estaVivo()}`);
            }
            break;

        case 5:
    const resposta = readlineSync.question("Deseja iniciar uma nova aventura? (s/n): ");

    if (resposta.toLowerCase() === "s") {
        progresso = 0;
        heroiEscolhido = null;

        console.log("\nUma nova aventura vai começar!");
        console.log("Escolha seu herói novamente.");

    } else {
        executando = false;
        console.log("\nObrigado por jogar O Senhor dos Mercados II!");
        console.log("Até a próxima aventura!");
        break;
    }
    
        default:
            console.log("Opção inválida!");
    }
        
}
    
    





personagem.exibirStatus()
personagem1.exibirStatus()
personagem2.exibirStatus()
personagem3.exibirStatus()


console.log("Vida Atual:", personagem.getVida());
console.log("Vida Atual:", personagem1.getVida());
console.log("Vida Atual:", personagem2.getVida());
console.log("Vida Atual:", personagem3.getVida());



console.log("Vida Máxima:", personagem.getVidaMax());
console.log("Vida Máxima:", personagem1.getVidaMax());
console.log("Vida Máxima:", personagem2.getVidaMax());
console.log("Vida Máxima:", personagem3.getVidaMax());

personagem.receberDano(50)
personagem1.receberDano(50)
personagem2.receberDano(5)


// Missão 2 
// //pendete:exibir status mostrando a vida
// personagem.curar(10)

// personagem1.receberDano(6)
// //pendete:exibir status mostrando a vida
// personagem1.curar(11)

// personagem2.receberDano(7)
// //pendete:exibir status mostrando a vida
// personagem2.curar(12)


// personagem3.receberDano(8)
// //pendete:exibir status mostrando a vida
// personagem3.curar(13)



personagem.estaVivo()
personagem1.estaVivo()
personagem2.estaVivo()
personagem3.estaVivo()

personagem.atacarComPoder(88)
personagem1.superFlecha(10)
personagem2.escudo()

personagem1.estaVivo()
personagem2.estaVivo()

personagem1.atacar()


// personagem.atacar()
// personagem1.atacar()
// personagem2.atacar()
// personagem3.atacar()

//4.Impeça personagens derrotados de atacar.

personagem4.habilidadeEspecial(10)

