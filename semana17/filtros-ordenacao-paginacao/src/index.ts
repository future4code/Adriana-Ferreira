import { app } from "./app";
import getTeachers from "./endpoints/getTeachers";

app.get("/teachers", getTeachers)