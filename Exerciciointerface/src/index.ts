import { Desenvolvedor } from "./Desenvolvedor";
import { Gerente } from "./Gerente";
import { Lidertecnico } from "./Lidertecnico";

const gerente = new Gerente("Miriam")
gerente.gerenciar()
gerente.trabalhar()

const desenvolvedor = new Desenvolvedor("Paulo")
desenvolvedor.trabalhar()
desenvolvedor.programar()

const lidertecnico = new Lidertecnico ("Laura")
lidertecnico.gerenciar()
lidertecnico.programar()
lidertecnico.trabalhar()

