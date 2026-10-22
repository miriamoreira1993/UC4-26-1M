
// AO INVÉS DE CADASTRAR DESTA FORMA..

const pessoa:{nome:string, email:string, senha:string} = {
    nome: "Miriam",
    email:"mia@gmail.com",
    senha:"blabla"

}

const pesso1:{nome:string, email:string, senha:string} = {
    nome: "Miriam1",
    email:"mia@gmail.com",
    senha:"blabla"

}

const pessoa2:{nome:string, email:string, senha:string} = {
    nome: "Miriam2",
    email:"mia@gmail.com",
    senha:"blabla"

}

//CRIAMOS A CLASSE..
// classes sempre começam com letra maiúscula
// export significa: "exportar", ou seja, outros arquivos podem "importar" está classe e usar ela
// depois, usamos a palavra " class" para indicar que estamos criando uma classe 
//depois colocamos o exato mesmo nome que damos para o arquivo


export class Pessoa{
//atributos
//o que uma pessoa tem
nome:string
email:string
senha:string

//metodo:funcoes criadas dentro da  classe 
// metodo construtor: qnd uma função está dentro de uma classe, chamamos de metodos
// ele serve para criar o objeto pessoa 
constructor(meuNome: string, meuEmail:string, minhaSenha:string){
    this.nome = meuNome
    this.email = meuEmail
    this.senha = minhaSenha
}

 }