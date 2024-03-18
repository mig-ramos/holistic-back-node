import { Request, Response } from "express";
import { ListSlideService } from "../../../services/home/slide/ListSlideService";

class ListSlideController{
    async handle(req: Request, res: Response){
        const listSlideService = new ListSlideService();
        const slide = await listSlideService.execute();

        return res.json(slide);
    }
}

export { ListSlideController }