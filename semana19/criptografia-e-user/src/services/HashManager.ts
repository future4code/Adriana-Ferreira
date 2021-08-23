import * as brcrypt from "bcryptjs";

export class HashManager{
    async hash(textToHide: string): Promise<string>{
          //para esconder o texto precisamos:
          //do plaintext (que é nosso parâmetro textToHide)
          //do nosso cost (que é o quanto vamos demorar pra esconder.
          //quanto maior mais escondido do salt (string aleatória que 
          //vai ser gerado aqui na função, a partir do cost))

          const cost = 12; //esse valor pode vir do .env
          const salt = await brcrypt.genSalt(cost);
          const cypherText = await brcrypt.hash(textToHide, salt);

          return cypherText;
    }
}

async compare(plaintext: string, hash: string): Promise<boolean>{
    const hashCompare: boolean = await brcrypt.compare(plaintext, hash);

    return hashCompare
}