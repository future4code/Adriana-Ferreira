import { connection } from "./connection"
import teachers from "./teachers.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`

   CREATE TABLE aula49_exercicio(
      id INT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      type VARCHAR(255) NOT NULL
   );      
`)
   .then(() => { console.log("Tabela criada") })
   .catch(printError)

const insertTeachers = () => connection("aula49_users")
   .insert(teachers)
   .then(() => { console.log("Professores cadastrados") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertTeachers)  
   .finally(closeConnection)