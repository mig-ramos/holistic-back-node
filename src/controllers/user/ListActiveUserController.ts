import { Request, Response } from "express";
import { ListActiveUserService } from "../../services/user/ListActiveUserService";

class ListActiveUserController {
    async handle(req: Request, res: Response) {
        const listActiveUserService = new ListActiveUserService();
        const user = await listActiveUserService.execute();

        return res.json(user);
    }
}

export { ListActiveUserController }