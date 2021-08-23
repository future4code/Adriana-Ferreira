//import * as bcryptjs from 'bcryptjs'
import { hashSync, compareSync, genSaltSync } from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export const generateHash = (
   plainText: string
):string => {
  const rounds: number = Number(process.env.BCRYPT_COST)
  const salt: string = genSaltSync(rounds)
  return hashSync(plainText, salt)
}

export const compareHash = (
  plainText: string,
  cypherText:string 
): boolean => compareSync(plainText, cypherText)

/**export class HashManager{
    public async hash(text: string): Promise<string>{
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcryptjs.genSalt(rounds)
        return bcryptjs.hash(text, salt);
    }

    public async compare(text:string, hash: string): Promise<boolean>{
      return bcryptjs.compare(text, hash)
    }
}*/