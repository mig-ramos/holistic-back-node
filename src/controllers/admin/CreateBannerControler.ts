import { Request, Response } from "express";
import { CreateBannerService } from "../../services/admin/CreateBannerService"; 

class CreateBannerController{
    async handle(req: Request, res: Response){
        const createBannerService = new CreateBannerService();

        if(!req.file){
            throw new Error("Error upload file");
        } else {
            // Renomeando o filename para slide
            const { originalname, filename: slide } = req.file;

            const banner = await createBannerService.execute({
                slide
            });

            return res.json(banner)
        }

    }
}

export { CreateBannerController };