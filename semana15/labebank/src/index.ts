import { app } from './app'
import { postNewUsers } from './endpoints/postNewUsers'


app.post("/users/create", postNewUsers)