import { Arma } from "./Arma"

export class Personagem{
    //atributos: o que po personagem tem
    nome:string
    vida:number = 50
    forca:number
    arma:Arma

//constructor: serve pra criar o objeto
    constructor(nome:string, forca:number,arma:Arma){
        this.nome = nome
        this.forca = forca
        this.arma = arma
    
    }
    //metodos: o que o personagem faz

    curar():void{
        this.vida += 10
        if (this.vida > 100) {
            this.vida = 100
        }
    }

    perderVida(dano:number):void{
        this.vida -= dano
        if (this.vida< 0) {
            this.vida =0
        }
    }

    curarOutroPersonagem(per:Personagem):void{
        per.vida += 10
        if(per.vida>100) {
            per.vida = 100
        }
    console.log(`O personagem, ${per.nome} foi curado por ${this.nome}.
        \n Vida de ${per.nome} : ${per.vida} .`)
    }
//criem um método chamado atacar, que faça um personagem tirar vida do outro
    atacar(per:Personagem):void{
        per.vida -=this.arma.ataque
        if(per.vida >0) {
            per.vida =0
        }
    console.log(`O personagem, ${per.nome} foi atacado por ${this.nome} .
        \n Vida de ${per.nome} : ${per.vida} .`)
        
        
    }
    
    


}

//1-Crie uma nova classe chamada Arma
//Arma deve ter: nome e ataque
// não esqueça do constructor

//2-depois dentro da classe personagem, crie o atributo arma (do tipo arma)
//chame ele no constructor de personagem tbm

//3-Modifique o metodo 'atacar' da classe Personagem para usar o dano arma