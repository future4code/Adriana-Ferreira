//Exercícios de interpretação de código

/*Exercício 1

a. false
b. false
c. true
e. boolean */

/*Exercício 2

a. undefined
b. null
c. 10
d. 0
e. 19
f. 25 */

//Exercícios de escrita de código

//Exercício 1
//a.
const idadeUsuario = Number (prompt ('Digite sua idade:'))
const idadeAmiga = Number (prompt('Amiga, qual é a sua idade?'))
//b
console.log("Sua idade é maior do que a do seu melhor amigo?", true || false)
//c.
const somaDasIdades = idadeUsuario - idadeAmiga
console.log('Subtração das idades=', somaDasIdades)

//Exercício 2
//a.
const numeroPar = Number (prompt ('Digite um número par:'))

//b.
const restoDivisao = numeroPar % 2
console.log('o resto da divisão do número digitado por 2=', restoDivisao)

//c.
//Como se tratam de números pares os restos da divisão por 2 são todos iguais a zero.

//d.
//Se digitar número ímpar o resto é diferente de zero.

//Exercício 3
//a.
const listaDeTarefas = []

//b.
const primeiraTarefa = prompt('Informe a primeira tarefa que você precise realizar no dia:')
const segundaTarefa = prompt('Informe a segunda tarefa que você precise realizar no dia:')
const terceiraTarefa = prompt('Informe a terceira tarefa que você precise realizar no dia:')
const listaDeTarefas = ['primeiraTarefa', 'segundaTarefa', 'terceiraTarefa']

//c.
console.log(listaDeTarefas)

//d.
const indiceTarefa = Number (prompt('Digite o índice de uma tarefa que você realizou:', 0, 1 ou 2))

//e.
array.splice(2)

//f.
console.log(listaDeTarefas)

//4.
const nomeUsuario = prompt('Digite seu nome:')
const emailDoUsuario = prompt('Digite seu e-mail:')

const mensagem = 'O e-mail' + emailDoUsuario + 'foi cadastrado com sucesso. Seja bem-vinda(o),' + nomeDoUsuario'!'
console.log(mensagem)
