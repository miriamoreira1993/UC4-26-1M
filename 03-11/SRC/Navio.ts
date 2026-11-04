export class Navio{
    nome: string
    capacidadeTripulacao: number
    vida: number
    velocidade: number
    canhoes: number


    constructor(nome:string, capacidadeTripulacao:number, vida:number, velocidade:number,canhoes:number){
    this.nome = nome
    this.capacidadeTripulacao = capacidadeTripulacao
    this.vida = vida
    this.velocidade = velocidade
    this.canhoes = canhoes
    }

    public navegar():void{
    console.log(" O navio está navegando!")
    }
    public atacar():void{
    console.log(`O navio esta atacando com seu ${this.canhoes}`)
    }
    public receberDano(dano: number): void{
    this.vida -= dano
    if(this.vida < 0){
       this.vida = 0
    }

    console.log(`${this.nome} recebeu ${dano} de dano`)
    console.log(`Vida atual ${this.vida}`)


    }
    public exibirInformacoes():void{
    console.log("=========INFORMACOES DO NAVIO ==========")
    console.log(`Nome: ${this.nome}`)
    console.log(`Capacidade Tripulação: ${this.capacidadeTripulacao}`)
    console.log(`Vida: ${this.vida}`)
    console.log(`Velocidade: ${this.velocidade} km`)
    console.log(`Canhões: ${this.canhoes}`)
    }
}