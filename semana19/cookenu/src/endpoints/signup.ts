import { Request, Response } from "express";
import connection from "../connection";
import { generateHash } from "../services/hashManager";
import generateId from "../services/idGenerator";
import {users_cookenu} from "../migrations";
import { generateToken } from "../services/authenticator";
/**import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/User";
import { Authenticator } from "../services/authenticator";
import { HashManager } from "../services/hashManager";
import { IdGenerator } from "../services/idGenerator";*/

export default async function signup(
   req: Request,
   res: Response
): Promise<void>{
  try {
    const {name, email, password} = req.body

    if(!name || !email || !password){
      res.statusCode=422
      throw new Error("'name', 'email' and 'password' required")
    }

    if(password < 6){
      res.statusCode=422
      throw new Error("'password' must be at least 6 characters long")
    }
    
    const [user] = await connection(users_cookenu)
      .where({email})

    if(user){
      res.statusCode=409
      throw new Error("Email already in use")
    }

    const id: string = generateId()

    const cypherPassword: string = generateHash(password)

    const token: string = generateToken({id})

    res.send({token})

    await connection(users_cookenu)
      .insert({id, name, email, password: cypherPassword})

  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error")    
  }
}

/**export async function signup (req:Request, res:Response){
    try{
      const {name, email, password, role} = req.body

      if(!name || !email || !password || !role){
          res
          .status(422)
          .send(
              'Insira todos os dados corretamente'
          );
      }
      const userDatabase = new UserDatabase();
      const user = await userDatabase.findUserByEmail(email);

      if(user){
        res.status(409).send('Esse email já está cadastrado');
      }
      const idGenerator = new IdGenerator();
      const id = idGenerator.generate();
      
      const hashManager = new HashManager()
      const hashPassword = await hashManager.hash(password)

      const newUser = new User(id, name, email, hashPassword, role);
      await userDatabase.createUser(newUser);

      const authenticator = new Authenticator()
      const token = authenticator.generate({id, role})

      res.status(200).send({message:'Usuário criado com sucesso', token})
    }catch(error){
        res.status(400).send(error.message)
    }
}*/

