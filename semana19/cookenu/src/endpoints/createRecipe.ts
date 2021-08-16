import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import generateId from "../services/idGenerator";

export default async function createRecipe(
  req:Request,
  res:Response
): Promise<void>{
    try{
        const token = req.headers.authorization
      
        const {title, description} = req.body
  
        const tokenData = getTokenData(token!)

        if(!tokenData){
            res.statusCode=401
            throw new Error("Unauthorized")
        }

        if(!title || !description){
            res.statusCode=422
            throw new Error("'title' and 'description' required")
        }
  
        const id = generateId() 
        
        const createAt = new Date()

        await connection(recipes_cookenu)
           .insert({
               id, 
               title,
               description,
               create_at: createAt,
               author_id: tokenData!.id
           })

        res.send("Recipe created")

    } catch(error){
        console.log(error.message);

        if(res.statusCode === 200){
            res.status(500).send("Internal server error")
        }else{
            res.send(error.message)
        }
    }    
}