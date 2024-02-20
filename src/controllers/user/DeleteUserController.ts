import { Request, Response } from "express";
import { DeleteUserService } from "../../services/user/DeleteUserService";

class DeleteUserController {
    async handle(req: Request, res: Response) {

        const id = req.params.id
        //  console.log( `O parâmetro é: ${ id }` )

        const deleteUserService = new DeleteUserService()

        const user = await deleteUserService.execute({
            id
        })

        return res.json(user);
    }
}

export { DeleteUserController }