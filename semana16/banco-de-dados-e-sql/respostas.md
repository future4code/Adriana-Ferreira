###Respostas exercícios aula 45

## 1. a)

- VARCHAR -> usado para caracteres variáveis, pode conter letras e números;
- PRIMARY KEY -> é o identificador da tabela, não pode receber números repetidos ;
- NOT NULL indica que o campo não pode ficar em branco;
- DATE indica a data.

## b)

SHOW DATABASES mostra o nome da database.
SHOW TABLES mostra o nome tabela.

## c)

DESCRIBE -> mostra os dados de criação da tabela em linhas e colunas.

## 2. a)

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002",
  "Glória Pires",
  1200,
  "1963-08-23",
  "female"
);
```

## b)

-Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
-Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'

- A primary key deve ter um valor único.

## c)

-Error Code: 1136. Column count doesn't match value count at row 1
Faltou passar alguns dos parâmetros que representam as colunas.

## d)

> Error Code: 1364. Field 'name' doesn't have a default value
> Faltou o nome ser passado tanto o parâmetro/coluna quanto o conteúdo da coluna

## e)

> Error Code: 1292. Incorrect date value: '1979' for column 'birth_date' at row 1
> Faltaram as aspas, a data precisa ser uma string

## f)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
"Antônio Fagundes",
400000,
"1949-04-18",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
"1979-03-26",
"female"
);

## 3. a)

SELECT \* FROM Actor WHERE gender = "female";

## b)

SELECT salary from Actor WHERE name = "Tony Ramos";

## c)

SELECT \* FROM Actor WHERE gender = "invalid";
Não tem gender invalid

## d)

SELECT id, name, salary from Actor WHERE salary <= 500000;

## e)

> Error Code: 1054. Unknown column 'nome' in 'field list'
> Está escrito nome ao invés de name

## 4. a)

Mostra nomes da tabela que contém A ou J e simultaneamente tenham salário menor que 300000

## b)

SELECT \* FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

## c)

SELECT \* FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%");

## d)

SELECT \* FROM Actor
WHERE (
(name LIKE "%a%" OR name LIKE "%A%") OR (name LIKE "%g%" OR name LIKE "%G%")
)
AND salary BETWEEN 350000 AND 900000;

## 5. a)

CREATE TABLE Movie (
id VARCHAR(255) PRIMARY KEY,
nome VARCHAR (255) NOT NULL,
sinopse TEXT NOT NULL,
estreia DATE NOT NULL,
avaliacao INT NOT NULL
);

## b)

INSERT INTO Movie (id, nome, sinopse, estreia, avaliacao)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

## c)

INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

## d)

INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
"2017-11-02",
8
);

## e)

INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
"004",
"O Auto da Compadecida",
"Baseado na obra de Ariano Suassuna, o filme narra as aventuras de João Grilo, um sertanejo pobre e mentiroso, e Chicó, o mais covarde dos homens. Eles vivem trapaceando no pequeno vilarejo de Taperoá, sertão da Paraíba. Somente a aparição da Nossa Senhora pode salvar a dupla.",
"2021-05-24",
10
);

## 6. a)

SELECT id, nome, sinopse FROM Movie
WHERE id = "003";

## b)

SELECT \* FROM Movie
WHERE nome = "O Auto da Compadecida";

## c)

SELECT id, nome, sinopse FROM Movie
WHERE avaliacao > 7;

## 7. a)

SELECT \* FROM Movie
WHERE name like "%vida%";

## b)

SELECT \* FROM Movie
WHERE nome like "%vida%" OR sinopse like "%vida%";

## c)

SELECT \* FROM Movie
WHERE lancamento <= CURRENT_DATE();

## d)

SELECT \* FROM Movie
WHERE (
lancamento <= CURRENT_DATE() AND
(nome like "%vida%" OR sinopse like "%vida%") AND
avaliacao > 7
);
