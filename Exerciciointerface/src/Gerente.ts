import { IGerente } from "./interfaces/IGerente";
import { ITrabalhador } from "./interfaces/ITrabalhador";

export class Gerente implements IGerente, ITrabalhador{
    public nome:string

    constructor (nome:string){
        this.nome=nome
    }

    gerenciar(): void {
        console.log(`${this.nome} está gerenciando`)
    }


    trabalhar(): void {
     console.log(`${this.nome} é lider técnico e trabalha junto com sua equipe!`)
    }


}

