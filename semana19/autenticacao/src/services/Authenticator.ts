import { AuthenticationData } from "../types";
import * as jwt from "jsonwebtoken"

export class Authenticator{
    generateToken(info: AuthenticationData):string{
        const token = jwt.sign(
            {id: info.id}
            "chave",
            {expiresIn:"12m"}
        )     
        return token;
    }

    getTokenData(token: string): AuthenticationData{
       const payload = jwt.verify(
           token,
           "osegredo"
       );
       return payload as AuthenticationData
    }
}