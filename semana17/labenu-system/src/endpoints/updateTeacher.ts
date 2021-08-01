import {Request, Response} from "express";
import { connection } from "../connection";

export default async function updateTeacher (
    req:Request, 
    res:Response
    ){

    let errorCode=400;
    try{
        const input: updateTeacherInput ={
            docente_id: req.body.docente_id,
            turma_id: req.body.turma_id
        }
 
        await connection.raw(`
        UPDATE docente
        SET turma_id = ${input.turma_id}
        WHERE id = ${input.docente_id}
        `)
 
        res.status(200).send({message:"Atualizado com sucesso"});
 
    }catch(error){
      if(error.message.includes("foreign key constraint fails")){
          errorCode=422;
          error.message="Essa turma não existe"
      }
      res.status(errorCode).send({message:error.message})
    }
 }

