import { IGerente } from "./interfaces/IGerente";
import { IProgramador } from "./interfaces/IProgramador";
import { ITrabalhador } from "./interfaces/ITrabalhador";

export class Lidertecnico implements ITrabalhador, IProgramador, IGerente{
    public nome:string

    constructor (nome:string){
        this.nome= nome

    }

    gerenciar(): void {
        console.log(`${this.nome} é lider técnico e gerencia sua equipe!`)
    }

    programar(): void {
        console.log(`${this.nome} é lider técnico e programador!`)
    }

    trabalhar(): void {
        console.log(`${this.nome} é lider técnico e trabalha junto com sua equipe!`)
        
    }
}