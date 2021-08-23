import { sign, verify } from 'jsonwebtoken'
import dotenv from "dotenv"
import { authenticationData } from '../types';
//import {config} from "dotenv"

//config()

dotenv.config();

export const generateToken = (
  payload: authenticationData
): string => sign(
  payload,
  process.env.JWT_KEY!,
  {expiresIn: "24h"}
)

export const getTokenData = (
  token: string
): authenticationData | null => {
   try {
      const {id} = verify(token, process.env.JWT_KEY!) as authenticationData
     
      return {id}

   }  catch (error) {
      return null
   }
}


//import { USER_ROLES } from '../entities/User';

/**export interface AuthenticationData{
    id: string,
    role: USER_ROLES
}

export class Authenticator{
    public generate(input: AuthenticationData):string {
      const token = jwt.sign(input, process.env.JWT_KEY,{
         expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
      });
      return token;
    }

  public getTokenData(token: string): AuthenticationData {
    const data = jwt.verify(token, process.env.JWT_KEY)
    return data as AuthenticationData
  }
}*/