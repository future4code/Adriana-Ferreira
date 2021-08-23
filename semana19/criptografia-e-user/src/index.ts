import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { HashManager } from "./services/HashManager";

const hm = new HashManager();

async function aula56(){
  const cripto = await hm.hash("joao");

  console.log(cripto)
}

//aula56()

async function aula562(){
  console.log (await hm.compare("joao", "$2a$12$QMvzbWVSVH3beQGI13//hOTN2rNSW034rSau2b9CGsuZFkhybXlbq"))
}

//aula562()

dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
