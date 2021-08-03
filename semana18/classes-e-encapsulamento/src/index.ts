//Atividade 1

//a)
/* O corpo da classe pode conter uma função chamada
constructor, que recebe como parâmetros os atributos dessa
classe, referenciados pela keyword this. */

//b)
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }

  const UserAccount1 = new UserAccount('123.321.123-12', 'Olga', 45)


  //c)
  //Precisa criar métodos públicos.

  //2)
  class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }
  }

  //3)
  class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
    
  }