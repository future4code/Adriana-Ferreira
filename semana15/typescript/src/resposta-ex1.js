//1. a)
//let minhaString: string = 10
//Type 'number' is not assignable to type 'string'.
//b)
//let meuNumero: number | string = 20
//Basta acrescentar barra vertical e a palavra string ao tipo da variável
//c) 
var irmao = {
    nome: "Cris",
    idade: 25,
    corFavorita: "Verde"
};
var irma = {
    nome: "Lia",
    idade: 32,
    corFavorita: "Preto"
};
var mae = {
    nome: "Lisandra",
    idade: 58,
    corFavorita: "Roxo"
};
var sobrinho = {
    nome: "Bento",
    idade: 4,
    corFavorita: "Azul"
};
//d)
var ARCO_IRIS;
(function (ARCO_IRIS) {
    ARCO_IRIS["VIOLETA"] = "VIOLETA";
    ARCO_IRIS["ANIL"] = "ANIL";
    ARCO_IRIS["AZUL"] = "AZUL";
    ARCO_IRIS["VERDE"] = "VERDE";
    ARCO_IRIS["AMARELO"] = "AMARELO";
    ARCO_IRIS["LARANJA"] = "LARANJA";
    ARCO_IRIS["VERMELHO"] = "VERMELHO";
})(ARCO_IRIS || (ARCO_IRIS = {}));
var irmaoArcoIris = {
    nome: "Cris",
    idade: 25,
    corFavorita: ARCO_IRIS.VERDE
};
var irmaArcoIris = {
    nome: "Lisa",
    idade: 32,
    corFavorita: ARCO_IRIS.ANIL
};
