import * as userDataBase from "../business/userDatabase"

export function get(token: string){
    getData(token);
    return await userDataBase.get();
  }
}