//1. a)
//let minhaString: string = 10
//Type 'number' is not assignable to type 'string'.

//b)
//let meuNumero: number | string = 20
//Basta acrescentar barra vertical e a palavra string ao tipo da variável

//c) 
const irmao = {
    nome: "Cris",
    idade: 25,
    corFavorita: "Verde"
}

type Pessoa = {
    nome: string
    idade: number
    corFavorita: string
}

const irma: Pessoa = {
    nome: "Lia",
    idade: 32,
    corFavorita: "Preto"
}

const mae: Pessoa = {
    nome: "Lisandra",
    idade: 58,
    corFavorita: "Roxo"
}

const sobrinho: Pessoa = {
    nome: "Bento",
    idade: 4,
    corFavorita: "Azul"
}

//d)

enum ARCO_IRIS {
    VIOLETA = "VIOLETA",
    ANIL = "ANIL",
    AZUL = "AZUL",
    VERDE = "VERDE",
    AMARELO = "AMARELO",
    LARANJA = "LARANJA",
    VERMELHO = "VERMELHO"
}

type Pessoa_ArcoIris = {
    nome: string,
    idade: number,
    corFavorita: ARCO_IRIS
}

const irmaoArcoIris: Pessoa_ArcoIris = {
    nome: "Cris",
    idade: 25,
    corFavorita: ARCO_IRIS.VERDE
}

const irmaArcoIris: Pessoa_ArcoIris = {
    nome: "Lisa",
    idade: 32,
    corFavorita: ARCO_IRIS.ANIL
}

