
export type User = {
    nome: string
    CPF: string
    data: string
    saldo?: number
    transacoes?: Extrato[]
}

export type Extrato = {
    valor: number
    data: number
    descrição: string
}