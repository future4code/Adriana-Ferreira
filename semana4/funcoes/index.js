//---------------Interpretação de código
//----------------EXERCÍCIO 1
//a) 10
//   50


//b)Apareceriam os valores abaixo também, porque os valores foram guardados no comando return 
// 10
// 50


//-----------------EXERCÍCIO 2
//a) Darvas 
//   Caio 
//  ["Darvas","Caio"]
//b) Amanda 
//    Caio 
//  ["Amanda", "Caio"]


//-----------------EXERCÍCIO 3
// nome para função- numerosPares
//a função recebe um número x, verifica se a divisão dele por 2 é igual a zero se sim 
//na próxima linha acontece a multiplicação do número por ele mesmo e esse resultado é adicionado
//ao novo array 'arrayFinal' e na linha seguinte tem return que guarda o novo arraiy formado


//-----------------EXERCÍCIO 4
//a)
/*function infoSobreMim() {
  console.log (`Eu sou Adriana, tenho muitos anos, moro em Rio das Ostras e sou estudante`)
}
infoSobreMim()*/

//b)
function infoUsuario (nome) {
    const nomeUsuario = prompt('Digite seu nome')
    
    console.log(`Eu sou ${nome}`)
}

    
    infoUsuario (nomeUsuario)
   
    /*infoUsuario (idadeUsuario)
    
    infoUsuario (cidadeUsuario)
    
    infoUsuario (ocupacaoUsuario)

    const idadeUsuario = prompt('Digite sua idade')
    const cidadeUsuario = prompt('Em que cidade mora')
    const ocupacaoUsuario = prompt('É estudante ? Sou/ Não sou')
    tenho {idade} anos, moro em {cidade} e {ocupacao}  estudante.`)*/


//-----------------EXERCÍCIO 5
a) function operaNumeros (primeiroNumero, segundoNumero){
    const somaNumeros = primeiroNumero + segundoNumero
    return somaNumeros
}
  operaNumeros(6,8)

b) function comparing (firstNumber, secondNumber){
    if (firstNumber>=secondNumber) {
        return comparing
  }
}
  comparing (8,9)
