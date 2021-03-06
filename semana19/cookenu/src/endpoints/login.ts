import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import { compareHash } from "../services/hashManager";

export default async function login (req:Request, res:Response): Promise<void>{
    try{
      const {email, password} = req.body

      if(!email || !password){
        res.statusCode=422
        throw new Error("'email' and 'password' required")
      }      

      const[user] = await connection(users_cookenu)
        .where({email})

        const passwordIsCorrect: boolean = compareHash(password, user?.password || '')

      if(!passwordIsCorrect){
          res
          .statusCode = 401
          throw new Error("Invalid credentials")          
      }    
      
      const token = generateToken({id: user.id})

      res.send({token})
      
    }catch(error){
        console.log(error.message);
        
        if(res.statusCode === 200){
           res.status(500).send("Internal server error")
        } else {
            res.send(error.message)
        }
    }   
}

