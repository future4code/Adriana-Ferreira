import {Request, Response} from "express";
import { connection } from "../connection";

export default async function createStudent (
    req:Request, 
    res:Response
    ){

    let errorCode=400;

    try{
        const input: createStudentInput={
          id:req.body.id,
          nome:req.body.nome,
          email:req.body.email,
          data_nasc:req.body.data_nasc,
          hobbies:req.body.hobbies,
          turma_id: req.body.turma_id
        }

        if(!input.id || input.nome || !input.email || !input.data_nasc || input.hobbies.length<1){
            errorCode = 422;
            throw new Error("Preencha os campos corretamente");
        }

        await connection.raw(`
        INSERT INTO estudante(id, nome, email, data_nasc, turma_id)
        VALUES(
            ${input.id},
            "${input.nome}",
            "${input.email}",
            "${input.data_nasc}",
            ${input.turma_id}
        )`)

        for(let hobby of input.hobbies){
            const idPassatempo = Math.floor(Math.random()*1000000);
            await connection.raw(`
            INSERT INTO passatempo(id, nome)
            VALUES(
                "${idPassatempo}",
                "${hobby}"
            )`);

            await connection.raw(`
            INSERT INTO estudante_passatempo(estudante_id, passatempo_id)
            VALUES(
                ${input.id},
                ${idPassatempo}
            )`)
        }
        
        res.status(201).send({message: "Conseguimos criar!"})

    }catch (error){
        res.status(errorCode).send({message:error.message})
    }
}