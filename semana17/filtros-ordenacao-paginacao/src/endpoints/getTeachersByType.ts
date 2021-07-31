import {Request, Response} from "express"
import { connection } from "../data/connection"
import { teacher } from "../types"

export default async function getTeachersById (
   req: Request,
   res: Response
   ):Promise<void>
{
    try {

      const type = req.query.type || "%"
      const sort = req.query.sort === "type" ? "type" : "email"
      const order = req.query.order === "DESC" ? "DESC" : "ASC"
      const page = Number(req.query.page) || 2
      const size = Number(req.query.size) || 5
      
      const offset: number = size * (page - 1)

      const result = await connection("aula49_exercicio")
      .where("type","LIKE",`%${type}%`)
      .orderBy(sort, order)
      .limit(10)
      .offset(offset)
 
      const teachers = result.map(allTeachers)
          
      res.status(200).send(teachers)
       
    } catch (error) {       
       res.status(500).send("Internal server error")
    }
 }

 const allTeachers = (input: any): teacher => {
    return{
      id: input.id,
      name: input.name,
      email: input.email,
      type: input.type
    }
 }