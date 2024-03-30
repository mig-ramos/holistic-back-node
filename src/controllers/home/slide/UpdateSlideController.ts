import { Request, Response } from "express";
import { UpdateSlideService } from "../../../services/home/slide/UpdateSlideService";

class UpdateSlideController{
    async handle(req: Request, res: Response){

       const id = req.params.id
     //  console.log( `O parâmetro é: ${ id }` )

        const { name, slogan } = req.body;

        const updateSlideService = new UpdateSlideService()

        const slides = await updateSlideService.execute({
            id,
          name,
          slogan
        })

        return res.json(slides);
    }
}

export { UpdateSlideController }