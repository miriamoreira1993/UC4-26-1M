"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Arma_1 = require("./Arma");
const Personagem_1 = require("./Personagem");
// const personagem:Personagem = new Personagem ("Teddy", 50)
// console.log(personagem.vida )// 50
// personagem.curar()
// console.log(personagem.vida)//60
// personagem.perderVida(15)
// console.log(personagem.perderVida)
// // if(this.vida >= 0)
const arma = new Arma_1.Arma("Espada", 50);
const arma2 = new ("Mchado".);
49;
const arma3 = new ("Lança".);
51;
const per = new Personagem_1.Personagem("Teste1", 7, arma);
const per1 = new Personagem_1.Personagem("Teste2", 8, arma);
const per2 = new Personagem_1.Personagem("Teste3", 9, arma);
// string é um tipo, logo podemos criar um array deste tipo
const nomes = ["Miriam", "Lulu", "Zac"];
// number é um tipo, logo podemos criar um array deste tipo
const numeros = [99, 108, 59];
// se Personagem tbm é um tipo, não podemos criar uma rray de personagem
const personagens = [per, per1, per2];
per.atacar(per2);
