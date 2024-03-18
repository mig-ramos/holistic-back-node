import { Request, Response } from "express";
import { CreateSlideService } from "../../../services/home/slide/CreateSlideService"; 

class CreateSlideController{
    async handle(req: Request, res: Response){
        const createSlideService = new CreateSlideService();

        if(!req.file){
            throw new Error("Error upload file");
        } else {
            // Renomeando o filename para slide
            const { originalname, filename: slide } = req.file;

            const slides = await createSlideService.execute({
                slide
            });

            return res.json(slides)
        }

    }
}

export { CreateSlideController };