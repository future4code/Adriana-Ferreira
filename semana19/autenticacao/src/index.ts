import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import {Authenticator} from "../src/services/Authenticator"

const auth = new Authenticator();

const token = auth.generateToken({id:"idmain"})
console.log("token:", token);

const verifiedToken = auth.getTokenData(token)
console.log("conteúdo do token:", verifiedToken)

app.post('/user/signup', createUser)
app.put('/user/edit/:id', editUser)