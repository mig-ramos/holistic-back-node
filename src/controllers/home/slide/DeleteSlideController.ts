import { Request, Response } from "express";
import { DeleteSlideService } from "../../../services/home/slide/DeleteSlideService";

class DeleteSlideController {
  async handle(req: Request, res: Response) {

    const id = req.params.id
    //  console.log( `O parâmetro é: ${ id }` )

    const deleteSlideService = new DeleteSlideService()

    const slides = await deleteSlideService.execute({
      id
    })

    return res.json(slides);
  }
}

export { DeleteSlideController }