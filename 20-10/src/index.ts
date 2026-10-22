/* 1-crie uma classe chamada Pokemon
O Pokemon deve ter: nome(string), vida(number) ataque(number), e um poder.
O poder é uma classe que vamos criar tambem. (criar classe poder)

Métodos do Pokemon:

falar: um método que repete o nome do pokemon algumas vezes

atacar: um método que recebe outro pokemon e ataca ele, tirando vida dele

atacarComPoder: um método que recebe outro pokemon e ataca ele também, porém diz o nome do poder e usa o ataque do poder


2- Crie uma classe chamada Poder. Ela deve ter um nome(string) e ataque(number). Não precisa de nenhum método, exceto o constructor.

3-Crie dois poderes e dois pokemons no index e simule uma pequena batalha entre eles.

*/

import { Poder } from "./Poder";
import { Pokemon } from "./Pokemon";

const poder: Poder = new Poder("raio violento", 10)
const poder1: Poder = new Poder ("bola de fogo", 5)
const poder2: Poder = new Poder ("choque", 60)

const poke: Pokemon = new Pokemon("Xablau1", 40, 20, poder)
const poke2: Pokemon = new Pokemon("Xablau2", 40, 10, poder1)
const poke3: Pokemon = new Pokemon("xablau3", 100, 20, poder2)




poke.falar()

poke.atacar(poke2)

console.log(poke2.vida)

/* ENCAPSULAMENTO: (serve para proteger o conteúdo das classes) 
É o ato de proteger os dados dos objetos  (tanto os atributos quanto os métodos) e controlar como podem ser acessados ou modificados
EXEMPLO: usando encapsulamento, podemo impedir que alguém deixe a vida do Pokemon negativa
para utilizar ENCAPSULAMENTO, nas nossas classes, precisamos colocar certas palavras antes dos ATRIBUTOS e antes dos MÉTODOS, 
são elas:

 * public (que significa 'publico')
 * private (que significa 'privado')
 * protected (que significa 'protegido')
 
Chamamos estes três modificadores de acesso. O 'p'ublic' permite que o atributo ou
método seja acessado e modificado em qualquer arquivo do meu programa DIRETAMENTE.
EXEMPLO:

Na classe -> public vida:number
No index -> pokemon.vida = -999

O 'Private' Não permite que o atributo seja acessado e modificado de qualquer jeito
Para poder fazer isso, precisamos chamar os métodos da classe.

*/