import { Request, Response } from "express";
import * as userBusiness from "../data/userBusiness"

export function deleteUser(req:Request, res:Response){
    try {
      const input={
          id: req.params.id,
          token:req.headers.authorization!
      } 
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}