import { Navio } from "./Navio";

export class Chalupa extends Navio{
    constructor(nome:string){
    super(nome, 10, 200, 5, 10)
    }

    public navegar():void{
        console.log(`${this.nome} utiliza sua agilidade para realizar manobras rápidas!`)
    }
    public atacar():void{
        console.log(`${this.nome} está disparando fogo dos seus ${this.canhoes}canhões, FOGOO!`)
    }
    public explorarIlha():void{
      console.log(`${this.nome} está explorando uma ilha em busca de tesouro`)
    }
}