import { IHabilidadeEspecial } from "./interfaces/IHabilidadeEspecial";
import { Personagem } from "./Personagem";

    export class Guardiao extends Personagem implements IHabilidadeEspecial { 
    
        constructor(nome:string, vida:number, vidaMaxima:number, ataque:number,defesa:number){
        super(nome,vida, vidaMaxima, ataque, defesa)
        this.nome = nome

    }

    escudo():void{
     console.log(`${this.nome} se defende com seu escudo e não recebe dano.`)

    }

    public atacar():void{
        console.log(`${this.nome} se defende de um ataque.`)
    }

    habilidadeEspecial(valorHabilidade:number): void {
        console.log(`${this.nome} usa sua habilidade de valor ${valorHabilidade} para se defender.`)
    }
}