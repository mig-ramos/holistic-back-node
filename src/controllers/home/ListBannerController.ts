import { Request, Response } from "express";
import { ListBannerService } from "../../services/home/ListBannerService";

class ListBannerController{
    async handle(req: Request, res: Response){
        const listBannerService = new ListBannerService();
        const banner = await listBannerService.execute();

        return res.json(banner);
    }
}

export { ListBannerController }