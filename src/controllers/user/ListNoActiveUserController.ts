import { Request, Response } from "express";
import { ListNoActiveUserService } from "../../services/user/ListNoActiveUserService";

class ListNoActiveUserController {
    async handle(req: Request, res: Response) {
        const listNoActiveUserService = new ListNoActiveUserService();
        const user = await listNoActiveUserService.execute();

        return res.json(user);
    }
}

export { ListNoActiveUserController }