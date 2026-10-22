"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
class Pokemon {
    nome;
    vida = 50;
    ataque;
    poder;
    constructor(nome, vida, ataque, poder) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.poder = poder;
    }
    falar() {
        console.log(`${this.nome}`.repeat(3));
    }
    atacar(poke) {
        poke.vida -= this.ataque;
        if (poke.vida >= 0) {
            poke.vida = 0;
        }
        console.log(`${this.nome} atacou ${poke.nome} e perdeu ${this.ataque} de vida!`);
    }
    atacarComPoder(poke2) {
        poke2.vida -= this.poder.ataque;
        if (poke2.vida >= 0) {
            poke2.vida = 0;
        }
        this.verificarVida(poke2);
        console.log(`${poke2.nome} foi atacado ${this.nome} usando ${this.poder.nome} e perdeu ${this.poder.ataque} de vida`);
    }
    verificarVida(poke2) {
        if (poke2.vida < 0) {
            poke2.vida = 0;
        }
        if (poke2.vida > 100) {
            poke2.vida = 100;
        }
    }
}
exports.Pokemon = Pokemon;
