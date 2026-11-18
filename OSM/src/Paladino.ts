import { IEquipavel } from "./interfaces/IEquipavel";
import { IHabilidadeEspecial } from "./interfaces/IHabilidadeEspecial";

export class Paladino implements IHabilidadeEspecial, IEquipavel {

     nome: string
    protected vida: number
    protected vidaMaxima: number
    protected ataque: number
    protected defesa: number
    
    constructor(nome:string, vida:number, vidaMaxima:number, ataque:number,defesa:number ){
        this.nome = nome
    
    }
    habilidadeEspecial(valorHabilidade: number): void {
         console.log(`${this.nome} usa sua habilidade de valor ${valorHabilidade} para se defender.`)
    }

    equipa(equipa: string): void {
        console.log(`${this.nome} equipa seus ataques com ${equipa}.`)
    }
}

       
