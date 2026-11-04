import { Navio } from "./Navio"

export class Galeao extends Navio{
constructor (nome:string){
    super(nome,50,200,30,40)
}

public navegar():void{
    console.log(`${this.nome} avança lentamente pelo mar`)
}

public atacar():void{
    console.log(`${this.nome} dispara com seu canhão `)
}

public repararNavio():void{
    this.vida =- 50
    /////////
}

}