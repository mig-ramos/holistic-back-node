import { Request, Response } from "express";
import { DeleteAboutService } from "../../../services/home/about/DeleteAboutService";

class DeleteAboutController {
  async handle(req: Request, res: Response) {

    const id = req.params.id
    //  console.log( `O parâmetro é: ${ id }` )

    const deleteAboutService = new DeleteAboutService()

    const abouts = await deleteAboutService.execute({
      id
    })

    return res.json(abouts);
  }
}

export { DeleteAboutController }