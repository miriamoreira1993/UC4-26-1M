import { Poder } from "./Poder"

export class Pokemon{
    nome:string
    vida:number = 50
    ataque:number
    poder:Poder

  constructor(nome: string,vida:number, ataque:number, poder:Poder){
    this.nome = nome
    this.vida = vida
    this.ataque = ataque
    this.poder = poder
  }

  falar():void{
   console.log(`${this.nome}` . repeat(3))
  }

  atacar(poke:Pokemon):void{
  poke.vida -= this.ataque
  if(poke.vida >= 0){
    poke.vida = 0
  }
  console.log(`${this.nome} atacou ${poke.nome} e perdeu ${this.ataque} de vida!`)
  }

  atacarComPoder(poke2:Pokemon): void{
  poke2.vida -= this.poder.ataque
    if(poke2.vida >= 0) {
       poke2.vida = 0
  }
this. verificarVida(poke2)

  console.log(`${poke2.nome} foi atacado ${this.nome} usando ${this.poder.nome} e perdeu ${this.poder.ataque} de vida`)
  }

verificarVida(poke2:Pokemon): void{
  if (poke2.vida < 0){
    poke2.vida = 0
  }
  if (poke2.vida > 100){
    poke2.vida = 100
  }
}

}


