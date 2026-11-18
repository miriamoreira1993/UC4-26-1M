import { IEquipavel } from "./interfaces/IEquipavel";
import { Personagem } from "./Personagem";

export class Arqueiro extends Personagem implements IEquipavel {

    constructor(nome:string, vida:number, vidaMaxima:number, ataque:number,defesa:number){
        super(nome,vida, vidaMaxima, ataque, defesa)
        this.nome = nome 

    }

     superFlecha(vida:number):void{
         console.log(`${this.nome} está atacando com sua super flecha.`)
     }

     public atacar():void{
        console.log(`${this.nome} ataca com suas flechas.`)
    }

    equipa(equipa:string): void {
        console.log(`${this.nome} equipa seus ataques com ${equipa}.`)
    }
}


