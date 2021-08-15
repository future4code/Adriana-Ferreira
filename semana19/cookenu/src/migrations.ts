import connection from "./connection"

try{
  connection.raw(`
     CREATE TABLE users_cookenu (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
     );

     CREATE TABLE recipes_cookenu(
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        author_id VARCHAR(255),
        FOREIGN KEY (author_id) REFERENCES users_cookenu
     );
  `).then(
      () => console.log('Tabela criada com sucesso')
  ).catch(error => 
    console.log(error.message)
  )
