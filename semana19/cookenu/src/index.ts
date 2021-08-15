import { app } from "./app";
import createRecipe from "./endpoints/createRecipes";
import getProfile from "./endpoints/getProfile";
import getRecipeById from "./endpoints/getRecipeById";
import login from "./endpoints/login";
import signup from "./endpoints/signup";
/**import { getAllCharacters } from "./endpoints/getAllCharacters";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";
import { generateToken, getTokenData } from "./services/authenticator";*/

app.post('/users/signup', signup)
app.post('/users/login', login)
app.get('/users/profile', getProfile)
app.get('/users/:id/profile', getProfileById)

app.post('/recipe', createRecipe)
app.get('/recipe/:id', getRecipeById)

function getProfileById(arg0: string, getProfileById: any) {
    throw new Error("Function not implemented.");
}

