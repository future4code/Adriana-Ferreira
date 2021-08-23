import * as userDatabase from '../data/userDatabase'

export function deleteUser(input:{id:string, token:string}){
    const verifiedToken = getData(input.token);
    if(verifiedToken.role!== "ADMIN"){
        throw new Error("Apenas administradores")
    }

    return userDatabase.deleteUser(input.id);
}
