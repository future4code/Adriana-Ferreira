//Usando o argumento process.argv

//1.
const nome = process.argv[2]
const idade = Number(process.argv[3])
console.log(`Olá, ${nome}. Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`)

//2.
const operation = process.argv[2]
const firstNum = Number(process.argv[3])
const secondNum = Number(process.argv[4])

let result = "Resultado: "

switch (operation) {
    case "add":
        result += firstNum + secondNum
        break
    case "sub":
        result += firstNum - secondNum
        break
    case "mult":
        result += firstNum * secondNum
        break
    case "div":
        result += (firstNum / secondNum).toFixed(1)
        break
    default:
        result += "invalid operation"
}

//3.
const tasks = [
    "estudar",
    "trabalhar",
    "ler livro"
]

const task = process.argv[2]

if (!task) {
    return console.log(`Was expecting at least 1 parameter for new task`)
}

tasks.push(task)

console.log(`Task ${task} added successfuly`)
console.log("tasks:", tasks)

