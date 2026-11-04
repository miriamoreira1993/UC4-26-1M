import { Bergantim } from "./Bergantim";
import { Chalupa } from "./Chalupa";
import { Galeao } from "./Galeao";
import { Navio } from "./Navio";

const navio = new Navio(" VELASQUEZ", 100, 10, 10,10)
navio.navegar()
navio.atacar()
navio.receberDano(5)
navio.exibirInformacoes()

const bergantim = new Bergantim (" Vento dos Mares")
bergantim.navegar()
bergantim.atacar()

const chalupa = new Chalupa (" Pequena Aventureira")
chalupa.navegar()
chalupa.atacar()


const galeao = new Galeao ("Rei dos Piratas")
galeao.atacar()
galeao.navegar()

bergantim.receberDano(30)
chalupa.receberDano(20)
galeao.receberDano(80)

//consultar vida

chalupa.explorarIlha()
galeao.repararNavio()

const navios: Navio [] = [bergantim, chalupa,galeao]

navios.forEach((navio) => {
    navio.exibirInformacoes()
    navio.navegar()
    navio.atacar()
})

bergantim.receberDano(-50)
chalupa.receberDano(500)
