import { Request, Response } from "express";
import { ListAboutService } from "../../../services/home/about/ListAboutService";

class ListAboutController{
    async handle(req: Request, res: Response){
        const listAboutService = new ListAboutService();
        const about = await listAboutService.execute();

        return res.json(about);
    }
}

export { ListAboutController }