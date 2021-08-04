enum TIPO_TURMA {
    INTEGRAL = "integral",
    NOTURNO = "noturno"
}

enum ESPECIALIDADE{
    REACT = 1,
    REDUX = 2,
    CSS = 3,
    TESTES = 4,
    TYPESCRIPT = 5,
    POO = 6,
    BACKEND=7
}

type createClassInput = {
    id: number,
    nome: string,
    data_inicio:string,
    data_fim:string,
    modulo: number,
    tipo: TIPO_TURMA
}

type createStudentInput={
    id:number,
    nome:string,
    email:string,
    data_nasc:string,
    hobbies:string[],
    turma_id:number
}

type createTeacherInput={
    id:number,
    nome:string,
    email:string,
    data_nasc:string,
    especialidades:ESPECIALIDADE[],
    turma_id:number
}

type updateStudentInput={
    estudante_id:number;
    turma_id: number;
}

type updateTeacherInput={
    docente_id:number;
    turma_id: number;
}