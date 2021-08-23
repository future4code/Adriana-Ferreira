import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";

export default async function getProfile (req:Request, res:Response): Promise<void>{
    try {
      const token: string = req.headers.authorization!

      const tokenData = getTokenData(token)

      if(!tokenData){
        res.statusCode=401
        throw new Error("Unauthorized")
    }

      const [user] = await connection(users_cookenu)
        .where({id: tokenData?.id})

        if(!user){
            res.statusCode=404
            throw new Error("User not found")
        }

        const {id, email, name} = user 

        res.send({
            id: user.id,
            name: user.name,
            email: user.email
        })

    } catch (error) {
      console.log(error);

      if(res.statusCode === 200){
          res.status(500).send("Internal server error")
      }else {
          res.send(error.message)
      }
    }
}    