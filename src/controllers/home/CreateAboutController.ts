import { Request, Response } from "express";
import { CreateAboutService } from "../../services/home/CreateAboutService"; 

class CreateAboutController{
    async handle(req: Request, res: Response){

        const { title, subTitle, description } = req.body;

        const createAboutService = new CreateAboutService();

        if(!req.file){
            throw new Error("Error upload file");
        } else {
            // Renomeando o filename para slide
            const { originalname, filename: photo } = req.file;

            const about = await createAboutService.execute({
                title,
                subTitle,
                description,
                photo
            }
            
            );

            return res.json(about)
        }

    }
}

export { CreateAboutController };