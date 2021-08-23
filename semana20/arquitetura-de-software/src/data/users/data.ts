import { connection } from "../connection"

export async function deleteUser(
   id:string
):Promise<void>{
    try {
        await connection()
        .where ({id})
        .from(TABLE_NAME)
        .del()
    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}