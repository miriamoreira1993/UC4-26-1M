//toda a classe começa com letra maiúscula
//Classe Cachorro

// a palavra "EXPORT" permite que outro arquivo importe e use essa classe
// a palavra "CLASS" inicia a declaração da classe
//depois, colocamos o nome da classe, que deve ser igual ao nome do arquivo, seguido de {}

export class Cachorro{
    //todo o código da classe vai aqui dentro
    // atributos: sãoa s coisas que um cachorro tem, são como variáveis
    nome:string
    peso:number
    raca:string

    //toda a classe precisa de um método especial, chamado "CONSTRUTOR"
    //É ele que recebe os valores de nome , pesso, raça, etc e cria o OBJETO

  constructor(meuNome:string, meuPeso:number, minhaRaca:string){
      this.nome = meuNome
      this.peso = meuPeso
      this.raca = minhaRaca
  }  

    //Métodos: são funções.São as coisas que o cachorro faz 
    latir():void{
        console.log(`${this.nome}está latindo!`)
    }

    comer():void{
        console.log(`${this.nome} nham nham!`)
    }
}