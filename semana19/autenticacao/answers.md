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
    a. Confirma que dentre os tipos possíveis, este será certamente string.
    b.

import \* as jwt from "jsonwebtoken";

const expiresIn = "1min";
const generateToken(input: AuthenticationData): string {
const token = jwt.sign(
{
id: input.id,
},
process.env.JWT_KEY as string,
{
expiresIn
}
);
return token;
}
}

type AuthenticationData = {
id: string;
}

4.

app.post("/user/signup", async (req: Request, res: Response) => {
try {
// Item b. Validação do email
if (!req.body.email || req.body.email.indexOf("@") === -1) {
throw new Error("Invalid email");
}

    // Item c. Validação da senha
    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const id = generateId();


    await createUser(id, userData.email, userData.password);

    const token = generateToken({
      id,
    });

    res.status(200).send({
      token,
    });

} catch (err) {
res.status(400).send({
message: err.message,
});
}
});

5.  a.
    const getUserByEmail = async(email: string): Promise<any> => {
    const result = await connection
    .select("\*")
    .from(userTableName)
    .where({ email });

    return result[0];
    }
    }

6.  a.
    app.post("/user/login", async (req: Request, res: Response) => {
    try {
    // Item b. Validação do email
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
    throw new Error("Invalid email");
    }

        const userData = {
          email: req.body.email,
          password: req.body.password,
        };


        const user = await getUserByEmail(userData.email);

        if (user.password !== userData.password) {
          throw new Error("Invalid password");
        }


        const token = generateToken({
          id: user.id,
        });

        res.status(200).send({
          token,
        });

    } catch (err) {
    res.status(400).send({
    message: err.message,
    });
    }
    });
