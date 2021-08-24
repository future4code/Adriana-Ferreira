import { Request, Response } from "express"
import * as createUserBusiness from "../../controller/users/createUserController"

export const login: any(req: Request, res:Response){
   try {
       const loginData = {email: req.body.email, password: req.body.password} = req.body    
       
       const token: string = await createUserBusiness
       
       res.status(200).send({token});

   } catch (error) {

       res.status(400).send({error: error.message})       
   }
}