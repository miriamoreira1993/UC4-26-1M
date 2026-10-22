"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    nome;
    vida;
    dinheiro;
    constructor(nome, vida, dinheiro) {
        this.nome = nome;
        this.vida = vida;
        this.dinheiro = dinheiro;
    }
    getNome() {
        return this.nome;
    }
    setNome(novoNome) {
        this.nome = novoNome;
    }
    getVida() {
        return this.vida;
    }
    setVida(novoVida) {
        this.vida = novoVida;
    }
    getDinheiro() {
        return this.dinheiro;
    }
    setDinheiro(novoDinheiro) {
        this.dinheiro = novoDinheiro;
    }
}
exports.Personagem = Personagem;
