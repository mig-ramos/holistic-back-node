import { Request, Response } from "express";
import { ActiveUserService } from "../../services/user/ActiveUserService";

class ActiveUserController {
    async handle(req: Request, res: Response) {

        const id = req.params.id
        //  console.log( `O parâmetro é: ${ id }` )

        const activeUserService = new ActiveUserService()

        const user = await activeUserService.execute({
            id
        })

        return res.json(user);
    }
}

export { ActiveUserController }