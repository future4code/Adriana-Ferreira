import {Request, Response} from "express";
import { connection } from "../connection";

export default async function createStudent (
    req:Request, 
    res:Response
    ){

    let errorCode=400;

    try{
        const input: createTeacherInput={
          id:req.body.id,
          nome:req.body.nome,
          email:req.body.email,
          data_nasc:req.body.data_nasc,
          especialidades:req.body.especialidades,
          turma_id: req.body.turma_id
        }

        if(!input.id || input.nome || !input.email || !input.data_nasc || input.especialidades.length<1){
            errorCode = 422;
            throw new Error("Preencha os campos corretamente");
        }

        await connection.raw(`
        INSERT INTO docente(id, nome, email, data_nasc, turma_id)
        VALUES(
            ${input.id},
            "${input.nome}",
            "${input.email}",
            "${input.data_nasc}",
            ${input.turma_id}
        )`)

        for(let especialidade of input.especialidades){        
            await connection.raw(`
            INSERT INTO docente_especialidade(docente_id, especialidade_id)
            VALUES(
                ${input.id},
                ${ESPECIALIDADE[especialidade]}
            )`)
        }
        
        res.status(201).send({message: "Conseguimos criar!"})

    }catch (error){
        res.status(errorCode).send({message:error.message})
    }
}