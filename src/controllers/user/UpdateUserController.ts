import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController{
    async handle(req: Request, res: Response){

       const id = req.params.id
     //  console.log( `O parâmetro é: ${ id }` )

        const { name, email, role, password } = req.body;

        const updateUserService = new UpdateUserService()

        const user = await updateUserService.execute({
            id,
          name,
          email,
          role,
          password
        })

        return res.json(user);
    }
}

export { UpdateUserController }