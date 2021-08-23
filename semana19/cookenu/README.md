## Estrutura de dados

**_user_**

-id

-name

-email

-password **_6 caracteres_**

---

**_recipes_**

-id

-title

-description

-createdAt

-authorId

---

## Funcionalidades mínimas

| Funcionalidade | Input                     | Output          |
| -------------- | ------------------------- | --------------- |
| signup         | name, email, password     | token           |
| login          | email, password           | token           |
| getProfile     | token                     | id, name, email |
| getUserById    | token, id                 | id, name, email |
| createRecipe   | token, title, description | id, name, email |
