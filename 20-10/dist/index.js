"use strict";
/* 1-crie uma classe chamada Pokemon
O Pokemon deve ter: nome(string), vida(number) ataque(number), e um poder.
O poder é uma classe que vamos criar tambem. (criar classe poder)

Métodos do Pokemon:

falar: um método que repete o nome do pokemon algumas vezes

atacar: um método que recebe outro pokemon e ataca ele, tirando vida dele

atacarComPoder: um método que recebe outro pokemon e ataca ele também, porém diz o nome do poder e usa o ataque do poder


2- Crie uma classe chamada Poder. Ela deve ter um nome(string) e ataque(number). Não precisa de nenhum método, exceto o constructor.

3-Crie dois poderes e dois pokemons no index e simule uma pequena batalha entre eles.

*/
Object.defineProperty(exports, "__esModule", { value: true });
const Poder_1 = require("./Poder");
const Pokemon_1 = require("./Pokemon");
const poder = new Poder_1.Poder("raio violento", 10);
const poder1 = new Poder_1.Poder("bola de fogo", 5);
const poder2 = new Poder_1.Poder("choque", 60);
const poke = new Pokemon_1.Pokemon("Xablau1", 40, 20, poder);
const poke2 = new Pokemon_1.Pokemon("Xablau2", 40, 10, poder1);
const poke3 = new Pokemon_1.Pokemon("xablau3", 100, 20, poder2);
poke.falar();
poke.atacar(poke2);
console.log(poke2.vida);
