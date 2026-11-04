import { Navio } from "./Navio";

export class Bergantim extends Navio{
constructor(nome:string){
  super(nome,20,10,10,10)  

}   

public navegar():void{
    console.log(`${this.nome} aproveite seus ventos para navegar rapidamente!`)
}
public atacar(): void{
    console.log(`${this.nome} está disparando, FOGOOOO!`)
}


}