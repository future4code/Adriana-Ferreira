//Exercício 1
meuArray = [0,1,2,3,4,5];
function inverteArray(array){
  meuArrayInvertido= [];
  for(let i= array.length-1; i >=0; i--){
  meuArrayInvertido.push(array[i]);
  }
  return meuArrayInvertido
}
console.log('Array invertido:', inverteArray(meuArray));

//Exercício 2
meuArray = [0,1,2,3,4,5];
function retornaNumerosParesElevadosADois (array) {
   novoArray = [];   
   for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
          novoArray.push(array[i]**2);       
      }
   }   
   return novoArray
}
console.log ('O array novo é:', retornaNumerosParesElevadosADois(novoArray));

//Exercício 3
meuArray = [0,1,2,3,4,5];
function retornaNumerosPares (array) {
  newArray = [];
  for(let i = 0; i < array.length; i++){
     if(array[i] % 2 === 0) {
        newArray.push(array[i]);
     }
  }
  return newArray
}
console.log('O array apenas de números pares será=', retornaNumerosPares(meuArray));

//Exercício 4
function retornaMaiorNumero(array) {
   let numMaior = array[0];
   for(let i = 1; i < array.lenght; i++){
      if(array[i] > numMaior){
         numMaior = array[i]
      }
   }
   return numMaior
}
console.log('O número maior é:', numMaior);

//Exercício 5
function retornaQuantidadeElementos (array) {
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
  let booleanArray = []
  const respostas = [false, true, true, false, true]
  return respostas
}

//Exercício 7

function retornaNNumerosPares(n) {
   let paresArray = [];
     for(let x = 0; paresArray.length < n; x++){
        if(x % 2 === 0){
           paresArray.push(x)
        }
     }
     return paresArray
   }

// Exercício 8

function checaTriangulo(a, b, c) {
  if (a===b && b===c && c===a) {
   return 'Equilátero'     
  } else if (a!==b && b!==c && c!==a) {
    return 'Escaleno' 
  }else{
    return'Isósceles'
   }
 }

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}