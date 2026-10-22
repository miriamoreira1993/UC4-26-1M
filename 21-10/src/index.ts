// crie uma classe Personagem que tenha:
//nome
//vida
//dinheiro

import { Cachorro } from "./Cachorro";
import { Personagem } from "./Personagem";

//coloque todos os atributos como 'private'
//crie um metodo que mostra a vida (exemplo : mostrarVida())
//crie um método que modifica a vida (exemplo: mudarVida (vida:number))


const personagem: Personagem = new Personagem(" Zezé", 100,10 )


console.log(personagem.getVida()) // mostra a vida dele que é 100

personagem.setVida(50)
console.log(personagem.getVida()) // mostra que a vida dele é 50

//crie uma classe chamada Cachorro: nome, peso e raca
//coloque atributos no Cachorro e coloque private
//crie o constructor
//crie os metodos 'getters' e os 'setters'
//crie 3 cacchorros no index e chame seus metodos

const cachorro: Cachorro = new Cachorro ("ZAC", "PUG", 8)
const cachorro1: Cachorro = new Cachorro ("BUDDY","VIRA-LATA", 10)
const cachorro2: Cachorro = new Cachorro ("THOR", "FIAPO DE MANGA", 5)

cachorro.setRaca("BULDOG")
console.log(cachorro.getRaca())

cachorro1.setNome("JUU")
console.log(cachorro1.getNome())

cachorro2.setPeso(25)
console.log(cachorro2.getPeso())



