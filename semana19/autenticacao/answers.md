1
a. Adicionando as letras haverá mais possibilidades de gerar ids diferentes e seguros.

b.
export function generateId(): string {
return v4();
}

2
a.
A função insere dados na tabela.

b.
CREATE TABLE User (
id VARCHAR(255) PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);

c.

     const createUser = async (
    	id: string,
    	email: string,
    	password: string) => {
      await connection
        .insert({
          id,
          email,
          password,
        })
        .into(userTableName);
    };

    3.
    a.
