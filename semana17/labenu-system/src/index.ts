import express, {Express, Request, Response} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "./connection";
import createClass from "./endpoints/createClass";
import createStudent from "./endpoints/createStudent";
import updateStudent from "./endpoints/updateStudent";
import getStudentById from "./endpoints/getStudentById";
import createTeacher from "./endpoints/createTeacher";
import updateTeacher from "./endpoints/updateTeacher";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/turma", createClass)

app.post("/estudante", createStudent)

app.put("/estudante", updateStudent)

app.get("/estudante/:id", getStudentById)

app.post("/docente", createTeacher)

app.put("/docente", updateTeacher)

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    }else {
        console.error(`Failure upon starting server.`);
    }
});