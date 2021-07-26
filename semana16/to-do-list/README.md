Para começar a explicar o nosso sistema vamos falar sobre os usuários. O cadastro deles deve ser simples, pedindo: um nome, um apelido (nickname) e um email

As tarefas são definidas por: título, descrição, data limite até a qual precisa ser feita, status e usuário pedinte (o que criou a tarefa). Existem os usuários responsáveis por uma tarefa, ou seja, aqueles que terão que executa-las. Mais de um usuário pode ser diretamente responsável de mesma tarefa. Os status das tarefas são 3: _to do_ ("a fazer"), _doing_ ("fazendo") e _done_ ("feita").

## Dados esses requisitos do sistema, você deve modelar todo o banco de dados (usando MySQL) e implementar o backend. Leia atentamente a lista de endpoints mostrada abaixo antes de começar a modelagem do banco, aí estão descritas todas as informações necessárias para criá-los.

CRIAÇÃO DE TABELAS

CREATE TABLE to-do-list-users (
id VARCHAR(64) PRIMARY KEY,
name VARCHAR(64) NOT NULL,
nickname VARCHAR(64) NOT NULL,
email VARCHAR(64) NOT NULL
);

CREATE TABLE to_do_list_tasks (
id VARCHAR(64) PRIMARY KEY,
title VARCHAR(64) NOT NULL,
description VARCHAR (1024) DEFAULT "No description provided",
deadline DATE,
status ENUM("TO_DO", "DOING", "DONE") DEFAULT "TO_DO",
author_id VARCHAR(64),
FOREIGN KEY (author_id) REFERENCES to_do_list_users(id)
);

CREATE TABLE to_do_list_assignees (
task_id VARCHAR(64),
assignee_id VARCHAR(64),
PRIMARY KEY (task_id), assignee_id),
FOREIGN KEY (task_id) REFERENCES to_do_list_tasks(id),
FOREIGN KEY (assignee_id) REFERENCES to_do_list_users(id)
);
