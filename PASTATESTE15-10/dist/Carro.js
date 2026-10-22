"use strict";
//crie a classe Carro, siga as instruções para criá-la unsando de exemplo a classe cachorro
//o carro deve ter: marca, tipo, ano
// o que o carro faz: anda, buzina
//depois crie 3 carros diferentes no index.ts chame seus atributos em console.log e chame seus metodos
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    marca;
    tipo;
    ano;
    constructor(minhaMarca, meuTipo, meuAno) {
        this.marca = minhaMarca;
        this.tipo = meuTipo;
        this.ano = meuAno;
    }
    andar() {
        console.log(`O carro da ${this.marca} está andando!`);
    }
    buzinar() {
        console.log(`O carro da ${this.marca} está buzinando!`);
    }
}
exports.Carro = Carro;
//# sourceMappingURL=Carro.js.map