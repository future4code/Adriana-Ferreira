import {Request, Response} from "express";
import { connection } from "../connection";

export default async function createClass (
    req:Request, 
    res:Response
    ){

    let errorCode = 400;

    try{
        const input: createClassInput = {
            id: req.body.id,
            nome: req.body.nome,
            data_inicio: req.body.data_inicio,
            data_fim: req.body.data_fim,
            modulo:0,
            tipo:req.body.tipo
        }

        if(!input.id || !input.nome || !input.data_inicio
            || !input.data_fim || !input.tipo){
                errorCode=422;
                throw new Error("Preencha os campos corretamente")
        }

        if(input.tipo !== TIPO_TURMA.INTEGRAL && input.tipo !== TIPO_TURMA.NOTURNO){
            errorCode = 422;
            throw new Error("Os valores possíveis são 'integral' ou 'noturno'")
        }

        if(input.tipo === TIPO_TURMA.NOTURNO){
            input.nome = input.nome+="-noturno";
        }

        await connection.raw(`
        INSERT INTO turma(id, nome, data_inicio, data_fim, modulo)      )
        VALUES(
            ${input.id},
            "${input.nome}",
            "${input.data_inicio}",
            "${input.data_fim}",
            ${input.modulo}
        )`)
        res.status(201).send({message: "Turma criada com sucesso"})
    }catch(error){
        res.status(errorCode).send({message:error.message})
    }
}
