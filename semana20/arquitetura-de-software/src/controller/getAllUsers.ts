import * as userBusiness from "../business/users"

export const getAllUsers: any (req:Request, res: Response){
    try {

        const token = req.headers.authorization!;
        const users = await userBusiness.get(token);
        
    } catch (error) {
        res.send({message: error.message}).status(error.status);
    }
}