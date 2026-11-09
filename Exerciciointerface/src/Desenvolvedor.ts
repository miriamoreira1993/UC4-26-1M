import { IProgramador } from "./interfaces/IProgramador";
import { ITrabalhador } from "./interfaces/ITrabalhador";

export class Desenvolvedor implements IProgramador,  ITrabalhador{
    public nome: string

    constructor (nome:string){
        this.nome= nome
    }

    trabalhar(): void {
         console.log(`${this.nome} é lider técnico e trabalha junto com sua equipe!`)
    }

    programar(): void {
        console.log(`${this.nome} é lider técnico e programador!`)
    }
} 
