export class Personagem {
    nome: string
    protected vida: number
    protected vidaMaxima: number
    protected ataque: number
    protected defesa: number

    constructor(nome: string, vida: number, vidaMaxima: number, ataque: number, defesa: number) {
        this.nome = nome
        this.vida = vida
        this.vidaMaxima = vidaMaxima
        this.ataque = ataque
        this.defesa = defesa
    }

    //ajustar exibição igual NAVIO.TS
    exibirStatus(): void {
        console.log(`Status do personagem: ${this.nome}, Vida: ${this.vida}, Vida Máxima: ${this.vidaMaxima}, Ataque: ${this.ataque}, Defesa: ${this.defesa}`)
    }

    getVida(): number {
        return this.vida
    }

    getVidaMax(): number {
        return this.vidaMaxima
    }

    receberDano(valor: number): void {
        this.vida -= Math.abs(valor)
        if (this.vida < 0) {
            this.vida = 0
            console.log(`${this.nome} recebe ${valor} de dano.`);
        }
    }

    curar(valorCura: number): void {
        this.vida += Math.abs(valorCura)
        if (this.vida > this.vidaMaxima) {
            this.vida = this.vidaMaxima
            console.log(`${this.nome} curou ${valorCura} pontos de vida`)
        }

    }
    estaVivo():boolean {
        if (this.vida <= 0) {
            return false
        } else {
            return true
        }
    }

    public atacar(per: Personagem): void {

    const dano = Math.max(0, this.ataque - per.defesa);

    per.receberDano(dano);

    console.log(`${this.nome} causou ${dano} de dano!`);
}

}



