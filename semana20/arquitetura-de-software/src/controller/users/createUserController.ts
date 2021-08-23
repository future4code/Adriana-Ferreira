import {Request, Response} from "express";
import { createUserBusiness } from "../../business/users/createUserBusiness";

export const createUserController = async (
    req: Request,
    res: Response
) => {
    try {
       const {name, email, password, role} = req.body        
       
       const token = await createUserBusiness({
           name, 
           email, 
           password, 
           role
        })
        
       res
       .status(201)
       .send({
           message: "Usuário criado com sucesso",
           token
       })

    } catch (error) {
        res.status(400).send(error.message)
    }
}

