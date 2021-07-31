import {Request, Response} from "express"
import { connection } from "../data/connection"
import { teacher } from "../types"

export default async function getTeachers (
   req: Request,
   res: Response
   ):Promise<void>
{
    try {

      const name = req.query.name || "%"
      const sort = req.query.sort === "name" ? "name" : "id"
      const order = req.query.order === "DESC" ? "DESC" ; "ASC"
      const page = Number(req.query.page) || 1
      const size = Number(req.query.size) || 10
      
      const offset: number = size * (page - 1)

      const result = await connection("aula49_exercicio")
      .where("name","LIKE",`%${name}%`)
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