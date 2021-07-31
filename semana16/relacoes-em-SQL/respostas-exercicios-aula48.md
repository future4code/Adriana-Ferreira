1. a) No contexto dos banco de dados, o conceito de chave estrangeira ou chave externa se refere ao tipo de relacionamento entre distintas tabelas de dados do banco de dados. Uma chave estrangeira é chamada quando há o relacionamento entre duas tabelas.

2. a)
   CREATE TABLE Rating (
   id VARCHAR(255) PRIMARY KEY,
   comment TEXT NOT NULL,
   rate FLOAT NOT NULL,
   movie_id VARCHAR(255),
   FOREIGN KEY (movie_id) REFERENCES Movie(id)
   )

b)
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
"001",
"Muito bom!",
7,
"004"
);
