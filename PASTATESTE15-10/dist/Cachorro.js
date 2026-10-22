"use strict";
//toda a classe começa com letra maiúscula
//Classe Cachorro
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
// a palavra "EXPORT" permite que outro arquivo importe e use essa classe
// a palavra "CLASS" inicia a declaração da classe
//depois, colocamos o nome da classe, que deve ser igual ao nome do arquivo, seguido de {}
class Cachorro {
    //todo o código da classe vai aqui dentro
    // atributos: sãoa s coisas que um cachorro tem, são como variáveis
    nome;
    peso;
    raca;
    //toda a classe precisa de um método especial, chamado "CONSTRUTOR"
    //É ele que recebe os valores de nome , pesso, raça, etc e cria o OBJETO
    constructor(meuNome, meuPeso, minhaRaca) {
        this.nome = meuNome;
        this.peso = meuPeso;
        this.raca = minhaRaca;
    }
    //Métodos: são funções.São as coisas que o cachorro faz 
    latir() {
        console.log(`${this.nome}está latindo!`);
    }
    comer() {
        console.log(`${this.nome} nham nham!`);
    }
}
exports.Cachorro = Cachorro;
//# sourceMappingURL=Cachorro.js.map