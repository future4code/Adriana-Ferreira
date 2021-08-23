### Enunciado Projeto LabEcommerce Backend

---

**Usuário**

_classe `User`_

- id
- nome
- e-mail
- idade

**Produto**

_classe `Product`_

- id
- nome
- descrição
- preço

_Obs.: essa classe serve para guardar as camisetas e lembrancinhas da loja._

**Passagens**

_Como nova funcionalidade a empresa venderá **viagens**._
_classe `Ticket`_

- id\* do produto, seu nome, sua descrição e seu preço, e também a **origem** e o **destino** dessa viagem. **Para criar esta classe é obrigatório que ela também seja uma classe `Product`. Utilize herança ou implementando interfaces.**

Dica: no banco de dados você pode:

- Criar outra tabela para gerenciar as passagens;
- Criar outros dois campos na tabela de produtos, deixando-os como opcionais.

**Compras**

O projeto precisa ter uma **classe** `Purchase`, que receba o **identificador único** **do produto**, o **identificador único** **do usuário**, a quantidade de itens daquele produto que foi comprada, e o valor total da compra. O projeto ainda não possui um carrinho, então cada compra tem apenas um produto.

## Endpoints mínimos do MVP

1. Criar um usuário

- **método: `post`**
- name, email e age, passados por **body params**. O id deve ser gerado pela própria aplicação, e precisa ser uma **string**.
- Deve inserir o **User** no banco de dados
- O User criado deve ser inserido a partir de uma nova instância de **User**

2. Criar um produto

- **método: `post`**
- name, description e price, passados por **body params**. O id deve ser gerado pela própria aplicação, e precisa ser uma **string**.
- Deve inserir o **Product** no banco de dados
- O produto criado deve ser inserido a partir de uma nova instância de **Product**

3. Listar todos os usuários

- **método: `get`**
- Sem parâmetros;
- Deve trazer uma lista de todos os **usuários** cadastrados no banco;
- Precisa **obrigatoriamente** devolver um array da Classe **User**

4. Listar todos os produtos

- **método: `get`**
- Sem parâmetros;
- Deve trazer uma lista de todos os **produtos** cadastrados no banco;
- Precisa **obrigatoriamente** devolver um array da Classe **Product**

---

## TABELAS MySQL

CREATE TABLE
