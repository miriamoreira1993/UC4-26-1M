// //como exportamos a classe, nós agora podemos importá-la
// import { Cachorro } from "./Cachorro";


// // //para criar um objeto, criamos uma variável que deve ser do tipo da classe (Cachorro)
// // //depois usamos a palavra NEW, para criar um novo cCachorro
// // //dentro dos parênteses, precisamos colocar todas as informações que o CONSTRUCTOR pede
// const meuCachorro: Cachorro = new Cachorro("Zac", 8.5, "Pug")

// // //agora podemos acessar as informações do cachorro. Por exemplo, pra ver o nome:
// console.log(meuCachorro.nome)
// console.log(meuCachorro.raca)

// // //posso também chamar os métodos para ver o que o cachorro faz:
// meuCachorro.latir()





import { Carro } from "./Carro";

const meuCarro: Carro = new Carro ("honda", "CRV", 2008)
const meuCarro2: Carro = new Carro ("renault", "clio", 2010)
const meuCarro3: Carro = new Carro ("Chevrolet", "onix", 2022)

console.log(meuCarro.marca)
console.log(meuCarro.tipo)
console.log(meuCarro.ano)
meuCarro.andar()

console.log(meuCarro2.marca)
console.log(meuCarro2.tipo)
console.log(meuCarro2.ano)
meuCarro2.andar()

console.log(meuCarro3.marca)
console.log(meuCarro3.tipo)
console.log(meuCarro3.ano)
meuCarro3.andar()

