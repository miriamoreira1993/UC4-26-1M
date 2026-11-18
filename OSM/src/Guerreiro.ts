import { ICuravel } from "./interfaces/ICuravel";
import { Personagem } from "./Personagem";


export class Guerreiro extends Personagem implements ICuravel{
      

    constructor(nome:string, vida:number, vidaMaxima:number, ataque:number,defesa:number){
        super(nome,vida, vidaMaxima, ataque, defesa)
        this.nome=nome
            
    }     
    
    atacarComPoder(vida:number):void{
    console.log(`${this.nome} está atacando com Poder`)
    }

    public atacar():void{
        console.log(`${this.nome} ataca com seu Poder.`)
        
}
   cura(valorCura:number):void{
    console.log(`${this.nome} cura ${valorCura} pontos de vida`)
   } 

}
