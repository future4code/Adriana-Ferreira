import { connection } from "./connection"

export default async function selectById(
    id:string
){
    const result = await connection ('aula49_exercicio')
       .select('*')
       .where({id})

    return result[0]   
}