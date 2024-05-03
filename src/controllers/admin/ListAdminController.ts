import { Request, Response } from "express";
import { ListAdminService } from "../../services/admin/ListAdminService";

class ListAdminController{
    async handle(req: Request, res: Response){
        const listAdminController = new ListAdminService();
        const user = await listAdminController.execute();

        return res.json(user);
    }
}

export { ListAdminController }