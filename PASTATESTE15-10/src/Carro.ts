//crie a classe Carro, siga as instruções para criá-la unsando de exemplo a classe cachorro
//o carro deve ter: marca, tipo, ano
// o que o carro faz: anda, buzina
//depois crie 3 carros diferentes no index.ts chame seus atributos em console.log e chame seus metodos


export class Carro{
    marca:string
    tipo:string
    ano:number


constructor(minhaMarca:string, meuTipo:string, meuAno:number){
    this.marca = minhaMarca
    this.tipo = meuTipo
    this.ano = meuAno

}

andar():void{
    console.log(`O carro da ${this.marca} está andando!`)
}

buzinar():void{
    console.log(`O carro da ${this.marca} está buzinando!`)
}

}



