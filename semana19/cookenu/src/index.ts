import { app } from "./app";
/**import { getAllCharacters } from "./endpoints/getAllCharacters";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";
import { generateToken, getTokenData } from "./services/authenticator";*/

app.post('/users/signup')
app.post('/users/login')
app.get('/users/profile')
app.get('/users/:id/profile')

app.post('/recipe')
app.get('/recipe/:id')

