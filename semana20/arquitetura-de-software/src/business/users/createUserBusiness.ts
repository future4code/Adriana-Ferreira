import { hash } from "bcryptjs";
import { generateToken } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";

export function createUserBusiness = ({
   id,
   name,
   email, 
   password, 
   role
}:any) => {
    if(
      !name ||      
      !email ||
      !password ||
      !role
    ){
       throw new Error('Preencha todos os campos')
    }
}

const id: string = generateId()

const cypherPassword = await hash(password);

await insertUser({
    id,
    name,
    email,
    password: cypherPassword,
    role
})

const token: string = generateToken({
   id,
   role: role
})

return token

}

